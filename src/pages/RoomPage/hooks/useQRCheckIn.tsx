import { useState, useCallback, useEffect, useContext, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/auth/authContext";
import { roomService } from "../../../services/rooms/room.service";
import { findUserEligibleEvent, validateCheckInEligibility, isCheckInAlreadyDoneError } from "../utils/QR.utils";
import { QR_MESSAGES, QR_ROUTES } from "../constants/RoomPage.constants";
import type { RoomResponseDTO } from "../../../shared/types/room.types";

interface QRCheckInState {
    isProcessing: boolean;
    message: string | null;
    redirectPath: string | null;
    roomData: RoomResponseDTO | null;
}

type CheckInResult =
    | { success: true; message: string; roomData: RoomResponseDTO }
    | { success: false; message: string; redirectPath: string; roomData?: RoomResponseDTO };

export const useQRCheckIn = (roomEmailProp?: string) => {
    const navigate = useNavigate();
    const { roomEmail: roomEmailParam } = useParams<{ roomEmail: string }>();
    const { userEmail } = useContext(AuthContext);
    const roomEmail = roomEmailProp || roomEmailParam;
    const hasExecuted = useRef(false);
    const [state, setState] = useState<QRCheckInState>({
        isProcessing: true,
        message: null,
        redirectPath: null,
        roomData: null,
    });

    const performCheckIn = useCallback(async (): Promise<CheckInResult> => {

        if (!userEmail) {
            return {
                success: false,
                message: QR_MESSAGES.LOGIN_REQUIRED,
                redirectPath: QR_ROUTES.LOGIN,
            };
        }

        if (!roomEmail) {
            return {
                success: false,
                message: QR_MESSAGES.INVALID_ROOM,
                redirectPath: QR_ROUTES.HOME,
            };
        }

        try {
            const roomData = await roomService.getRoom(roomEmail);
            const eligibleEvent = findUserEligibleEvent(roomData, userEmail);
            const validation = validateCheckInEligibility(eligibleEvent);

            if (!validation.canCheckIn) {
                return {
                    success: false,
                    message: validation.reason,
                    redirectPath: QR_ROUTES.ROOM(roomEmail),
                    roomData: roomData,
                };
            }

            await roomService.checkInEvent(roomEmail, eligibleEvent!.id, userEmail);
            const updatedRoomData = await roomService.getRoom(roomEmail);

            return {
                success: true,
                message: QR_MESSAGES.CHECK_IN_SUCCESS,
                roomData: updatedRoomData,
            };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error al procesar check-in";

            try {
                const roomData = await roomService.getRoom(roomEmail);
                
                if (isCheckInAlreadyDoneError(errorMessage)) {
                    return {
                        success: true,
                        message: "Check-in ya realizado. Información actualizada.",
                        roomData: roomData,
                    };
                }
                
                return {
                    success: false,
                    message: errorMessage,
                    redirectPath: QR_ROUTES.ROOM(roomEmail),
                    roomData: roomData,
                };
            } catch {
                return {
                    success: false,
                    message: errorMessage,
                    redirectPath: QR_ROUTES.HOME,
                };
            }
        }
    }, [userEmail, roomEmail]);

    const executeCheckIn = useCallback(async () => {
        setState((prev) => ({ ...prev, isProcessing: true }));

        const result = await performCheckIn();

        if (result.success) {
            const redirectPath = QR_ROUTES.ROOM(roomEmail!);

            setState({
                isProcessing: false,
                message: result.message,
                redirectPath: redirectPath,
                roomData: result.roomData,
            });
        } else {
            setState({
                isProcessing: false,
                message: result.message,
                redirectPath: result.redirectPath,
                roomData: result.roomData || null,
            });
        }
    }, [performCheckIn, roomEmail]);

    const handleRedirect = useCallback(() => {
        if (state.redirectPath) {
            navigate(state.redirectPath);
        }
    }, [navigate, state.redirectPath]);

    useEffect(() => {
        if (hasExecuted.current) {
            return;
        }
        
        hasExecuted.current = true;
        executeCheckIn();
    }, [executeCheckIn]);

    return {
        ...state,
        handleRedirect,
    };
};

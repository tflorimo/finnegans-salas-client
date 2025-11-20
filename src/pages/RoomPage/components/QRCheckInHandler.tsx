import { useNavigate, useParams } from "react-router-dom";
import { decodeRoomId } from "../../../shared/utils/roomURL.utils";
import { setReturnTo, setLoginMessage } from "../../../shared/utils/localStorage.utils";
import { useEffect, useRef } from "react";
import { useQRCheckIn } from "../hooks/useQRCheckIn";
import { QR_ROUTES } from "../constants/RoomPage.constants";
import { QRCheckInModal } from "./QRCheckInModal";

export const QRCheckInHandler = () => {
    const navigate = useNavigate();
    const { roomEmail: encodedRoomEmail } = useParams<{ roomEmail: string }>();
    const roomEmail = encodedRoomEmail ? decodeRoomId(encodedRoomEmail) : undefined;
    const { isProcessing, message, redirectPath, roomData } = useQRCheckIn(roomEmail);
    const roomEmailRef = useRef(roomEmail);
    const messageRef = useRef(message);
    const roomDataRef = useRef(roomData);

    roomEmailRef.current = roomEmail;
    messageRef.current = message;
    roomDataRef.current = roomData;

    useEffect(() => {
        if (!isProcessing && redirectPath) { 
            if (redirectPath === QR_ROUTES.LOGIN && roomEmailRef.current) {
                const returnTo = QR_ROUTES.CHECK_IN(roomEmailRef.current);
                setReturnTo(returnTo);
                setLoginMessage(messageRef.current || '');

                navigate(redirectPath, {
                    replace: true,
                    state: { returnTo, loginMessage: messageRef.current }
                });
                return;
            }
            const timer = setTimeout(() => {
                if (redirectPath.includes('/room/') && roomDataRef.current) {
                    navigate(redirectPath, { replace: true, state: { room: roomDataRef.current } });
                } else {
                    navigate(redirectPath, { replace: true });
                }
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isProcessing, redirectPath, navigate]);

    const handleClose = () => {

        if (redirectPath) {

            if (redirectPath === QR_ROUTES.LOGIN && roomEmailRef.current) {
                const returnTo = QR_ROUTES.CHECK_IN(roomEmailRef.current);
                setReturnTo(returnTo);
                setLoginMessage(messageRef.current || '');
                navigate(redirectPath, {
                    replace: true,
                    state: { returnTo, loginMessage: messageRef.current }
                });

            } else if (redirectPath.includes('/room/') && roomDataRef.current) {
                navigate(redirectPath, { replace: true, state: { room: roomDataRef.current } });
            } else {
                navigate(redirectPath, { replace: true });
            }
        }
    };

    return (
        <QRCheckInModal
            isProcessing={isProcessing}
            message={message}
            onClose={handleClose}
        />
    );
};
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth/authContext";
import { roomService } from "../../../services/rooms/room.service";
import type { RoomResponseDTO } from "../../../shared/types/room.types";
import { canCheckIn } from "../utils/CheckIn.utils";

interface CheckInState {
  isLoading: boolean;
  message: string | null;
  isSuccess: boolean | null;
}

interface UseCheckInParams {
  onSuccess?: (room: RoomResponseDTO) => void;
}

export const useCheckIn = ({ onSuccess }: UseCheckInParams = {}) => {
  const { userEmail } = useContext(AuthContext);
  const [state, setState] = useState<CheckInState>({
    isLoading: false,
    message: null,
    isSuccess: null,
  });

  const isCheckInAvailable = (room: RoomResponseDTO | undefined): boolean => {
    if (!room || !userEmail) {
      return false;
    }

    return canCheckIn(room.current_event, userEmail);
  };

  const handleCheckIn = async (room: RoomResponseDTO | undefined) => {
    if (!room || !userEmail) {
      setState({
        isLoading: false,
        message: "Información del usuario o sala no disponible",
        isSuccess: false,
      });
      return;
    }

    setState({ isLoading: true, message: null, isSuccess: null });

    try {
      await roomService.checkInCurrentEvent(room.email, userEmail);

      // Optimistic update: actualizar estado local inmediatamente
      if (onSuccess && room.current_event) {
        const updatedRoom: RoomResponseDTO = {
          ...room,
          is_busy: true,
          current_event: {
            ...room.current_event,
            checkInStatus: 'checked_in',
          },
        };
        onSuccess(updatedRoom);
      }

      setState({
        isLoading: false,
        message: "¡Check-in realizado con éxito!",
        isSuccess: true,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error al realizar check-in";

      setState({
        isLoading: false,
        message: errorMessage,
        isSuccess: false,
      });
    }
  };

  const clearMessage = () => {
    setState((prev) => ({ ...prev, message: null, isSuccess: null }));
  };

  return {
    handleCheckIn,
    isCheckInAvailable,
    clearMessage,
    isLoading: state.isLoading,
    message: state.message,
    isSuccess: state.isSuccess,
  };
};

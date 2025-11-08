import { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth/authContext";
import { roomService } from "../../../services/rooms/room.service";
import type { RoomResponseDTO } from "../../../shared/types/room.types";
interface CheckInState {
  isLoading: boolean;
  message: string | null;
  isSuccess: boolean | null;
}

export const useCheckIn = () => {
  const { userEmail } = useContext(AuthContext);
  const [state, setState] = useState<CheckInState>({
    isLoading: false,
    message: null,
    isSuccess: null,
  });

  const isCheckInAvailable = (room: RoomResponseDTO | undefined): boolean => {
    return !!(room && userEmail);
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

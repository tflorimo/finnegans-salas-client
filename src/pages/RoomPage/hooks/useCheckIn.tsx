import { useContext } from "react";
import { AuthContext } from "../../../context/auth/authContext";
import { roomService } from "../../../services/rooms/room.service";
import type { RoomResponseDTO } from "../../../shared/types/room.types";

export const useCheckIn = () => {
  const { userEmail } = useContext(AuthContext);

  const handleCheckIn = (room: RoomResponseDTO | undefined) => {
    if (!room?.current_event || !userEmail) return;

    roomService.checkInCurrentEvent(room.email, userEmail);
  };

  const isCheckInAvailable = (room: RoomResponseDTO | undefined): boolean => {
    return !!(room?.current_event && userEmail);
  };

  return { handleCheckIn, isCheckInAvailable };
};

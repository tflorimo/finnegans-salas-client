import { useContext } from "react";
import { AuthContext } from "../../../context/auth/authContext";
import { roomService } from "../../../services/rooms/room.service";
import type { RoomDetailsDTO } from "../../../shared/types/types";

export const useCheckIn = () => {
  const { userEmail } = useContext(AuthContext);

  const handleCheckIn = (roomDetails: RoomDetailsDTO | undefined) => {
    if (!roomDetails?.currentEvent || !userEmail) return;

    roomService.checkInCurrentEvent(roomDetails.id, userEmail);
  };

  const isCheckInAvailable = (roomDetails: RoomDetailsDTO | undefined): boolean => {
    return !!(roomDetails?.currentEvent && userEmail);
  };

  return { handleCheckIn, isCheckInAvailable };
};

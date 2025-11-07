import { useLocation } from "react-router-dom";
import type { RoomResponseDTO } from "../../../shared/types/room.types";

interface UseGetRoomReturn {
  loading: boolean;
  roomData: RoomResponseDTO | null;
  error: string | null;
}

export const useGetRoom = (): UseGetRoomReturn => {
  const location = useLocation();
  const roomData = (location.state as { room?: RoomResponseDTO })?.room ?? null;
  const loading = false;
  const error = roomData ? null : "No se encontró información de la sala";

  return { loading, roomData, error };
};

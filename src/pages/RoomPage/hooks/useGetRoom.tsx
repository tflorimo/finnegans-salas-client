import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { RoomResponseDTO } from "../../../shared/types/room.types";
interface UseGetRoomReturn {
  loading: boolean;
  roomData: RoomResponseDTO | undefined;
  error: string | null;
  updateRoomData: (updater: (prev: RoomResponseDTO | undefined) => RoomResponseDTO | undefined) => void;
}

export const useGetRoom = (): UseGetRoomReturn => {
  const location = useLocation();
  const initialRoomData = (location.state as { room?: RoomResponseDTO })?.room ?? undefined;
  
  const [roomData, setRoomData] = useState<RoomResponseDTO | undefined>(initialRoomData);
  const loading = false;
  const error = roomData ? null : "No se encontró información de la sala";

  useEffect(() => {
    const newRoomData = (location.state as { room?: RoomResponseDTO })?.room;
    if (newRoomData) {
      setRoomData(newRoomData);
    }
  }, [location.state]);

  const updateRoomData = (updater: (prev: RoomResponseDTO | undefined) => RoomResponseDTO | undefined) => {
    setRoomData(updater);
  };

  return { loading, roomData, error, updateRoomData };
};

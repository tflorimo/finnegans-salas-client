import { useEffect, useState } from "react";
import { roomService } from "../../../services/rooms/room.service";
import type { RoomData } from "../../../shared/types/types";

export const useGetRoom = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [roomData, setRoomData] = useState<RoomData | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchRoom = async () => {
      try {
        const data = await roomService.getRoom();
        setRoomData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error al consultar la sala:", error);
      }
    };
    fetchRoom();
  }, []);

  return { loading, roomData };
};

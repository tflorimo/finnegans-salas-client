import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { roomService } from "../../../services/rooms/room.service";
import type { RoomResponseDTO } from "../../../shared/types/room.types";

export const useGetRoom = () => {
  const { roomEmail } = useParams<{ roomEmail: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [roomData, setRoomData] = useState<RoomResponseDTO | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!roomEmail) {
      setError("No se encontró el email de la sala");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const fetchRoom = async () => {
      try {
        const data = await roomService.getRoom(roomEmail);
        setRoomData(data);
      } catch (error) {
        console.error("Error al consultar la sala:", error);
        setError("Error al cargar la sala");
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [roomEmail]);

  return { loading, roomData, error };
};

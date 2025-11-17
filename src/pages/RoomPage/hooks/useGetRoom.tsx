import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import type { RoomResponseDTO } from "../../../shared/types/room.types";
import { decodeRoomId } from "../../../shared/utils/roomURL.utils";
import { roomService } from "../../../services/rooms/room.service";
interface UseGetRoomReturn {
  loading: boolean;
  roomData: RoomResponseDTO | undefined;
  error: string | null;
  updateRoomData: (updater: (prev: RoomResponseDTO | undefined) => RoomResponseDTO | undefined) => void;
}

export const useGetRoom = (): UseGetRoomReturn => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const initialRoomData = (location.state as { room?: RoomResponseDTO })?.room ?? undefined;
  
  const [roomData, setRoomData] = useState<RoomResponseDTO | undefined>(initialRoomData);
  const [loading, setLoading] = useState<boolean>(!initialRoomData && !!id);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);
        const roomEmail = decodeRoomId(id);
        const data = await roomService.getRoom(roomEmail);
        setRoomData(data);
      } catch (err) {
        console.error('Error fetching room:', err);
        setError("No se encontró información de la sala");
      } finally {
        setLoading(false);
      }
    };

    if (initialRoomData) {
      setRoomData(initialRoomData);
      setLoading(false);

      if (id) {
        const roomEmail = decodeRoomId(id);
        roomService.getRoom(roomEmail)
          .then(data => setRoomData(data))
          .catch(err => console.error('Error refreshing room data:', err));
      }
    } else {
      fetchRoomData();
    }
  }, [id]); 

  useEffect(() => {
    const newRoomData = (location.state as { room?: RoomResponseDTO })?.room;
    if (newRoomData && newRoomData.email !== roomData?.email) {
      setRoomData(newRoomData);
      setError(null);
    }
  }, [location.state, roomData?.email]);

  const updateRoomData = (updater: (prev: RoomResponseDTO | undefined) => RoomResponseDTO | undefined) => {
    setRoomData(updater);
  };

  return { loading, roomData, error, updateRoomData };
};

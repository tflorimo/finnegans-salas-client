import { useEffect, useState } from "react";
import { roomService } from "../../../services/rooms/room.service";
import type { RoomResponseDTO } from "../../../shared/types/room.types";

export const useGetRooms = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [roomsData, setRoomsData] = useState<RoomResponseDTO[]>([]);

    useEffect(() => {
        setLoading(true);
        const fetchRooms = async () => {
            try {
                const data = await roomService.getRooms();
                setRoomsData(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error('Error en la solicitud de consulta de Salas:', error);
            }
        };
        fetchRooms();
    }, [])

    return { loading, roomsData };
}
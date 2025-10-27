import { useEffect, useState } from "react";
import { roomService } from "../../../services/rooms/roomService";
import type { RoomData } from "../../../shared/types/types";

export const useGetRooms = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [roomsData, setRoomsData] = useState<RoomData[]>([]);

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
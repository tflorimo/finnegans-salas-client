import { useEffect, useState } from "react";
import { adminService } from "../../../services/admin/adminService";
import type { RoomEventDetailsDTO } from "../../../shared/types/types";

export const useGetAdminEvents = () => {
    // Consumir servicio que me retorna todos los eventos
    const [roomEvents, setRoomEvents] = useState<RoomEventDetailsDTO[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Llamar al servicio para obtener los eventos
                const response = await adminService.getAllEventsAdmin();
                setRoomEvents(response.roomsEvents);
            } catch (error) {
                console.error("Error fetching admin events:", error);
            }
        };

        fetchEvents();
    }, []);
    // Retornar array de eventos
    return { roomEvents }
}
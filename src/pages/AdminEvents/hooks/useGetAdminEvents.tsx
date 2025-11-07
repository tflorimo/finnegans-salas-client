import { useEffect, useMemo, useState } from "react";
import { adminService } from "../../../services/admin/admin.service";
import type { EventResponseDTO, FlatEvent } from "../../../services/admin/events/types";
import { mapToFlatEvent } from "../utils/eventsMapper";

export const useGetAdminEvents = () => {
    const [events, setevents] = useState<EventResponseDTO[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    const eventsFlat: FlatEvent[] = useMemo(
        () => events.map(mapToFlatEvent),
        [events]
    );

    const getAllEvents = async (): Promise<EventResponseDTO[]> => {
        try {
            setLoading(true);
            setError(null);

            const response = await adminService.getAllEventsAdmin();
            const events = (Array.isArray(response) ? response : []) as EventResponseDTO[];

            if (!events.length) {
                return [];
            }

            const parsedEvents = events.map(e => ({
                ...e,
                date: new Date(e.startTime).toISOString().split("T")[0],
                startTime: new Date(e.startTime),
                endTime: new Date(e.endTime),
            }));

            setevents(parsedEvents);
            return parsedEvents;
        } catch (err) {
            setError(err);
            return []; // Retorna array vacío en caso de error para evitar fallos en la UI
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllEvents();
    }, []);

    return {
        events,        // para el modal (ojo)
        eventsFlat,    // para la tabla
        loading,
        error,
        getAllEvents,  // refrescar desde cualquier componente
    };
};

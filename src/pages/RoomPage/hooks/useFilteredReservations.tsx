import { useMemo } from "react";
import type { EventResponseDTO } from "../../../shared/types/event.types";
interface UseFilteredReservationsReturn {
  todayReservations: EventResponseDTO[];
  weekReservations: EventResponseDTO[];
}

export const useFilteredReservations = (
  events: EventResponseDTO[] | undefined
): UseFilteredReservationsReturn => {
  return useMemo(() => {
    if (!events || events.length === 0) {
      return { todayReservations: [], weekReservations: [] };
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayReservations = events.filter((event) => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate.getTime() === today.getTime();
    });

    const weekReservations = events.filter((event) => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate.getTime() !== today.getTime();
    });

    return { todayReservations, weekReservations };
  }, [events]);
};

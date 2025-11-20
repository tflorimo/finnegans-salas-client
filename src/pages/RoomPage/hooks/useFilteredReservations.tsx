import { useMemo } from "react";
import type { EventResponseDTO } from "../../../shared/types/event.types";
import { isEventFinished } from "../../../shared/utils/event.utils";
interface UseFilteredReservationsReturn {
  todayReservations: EventResponseDTO[];
  weekReservations: EventResponseDTO[];
  finishedReservations: EventResponseDTO[];
}

export const useFilteredReservations = (
  events: EventResponseDTO[] | undefined
): UseFilteredReservationsReturn => {
  return useMemo(() => {
    if (!events || events.length === 0) {
      return { todayReservations: [], weekReservations: [], finishedReservations: [] };
    }

    const now = new Date();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todayReservations = events
      .filter((event) => {
        const eventStartTime = new Date(event.startTime);
        const eventEndTime = new Date(event.endTime);
        return eventEndTime > now && (eventStartTime >= today || eventEndTime >= today);
      })
      .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());

    const weekReservations = events
      .filter((event) => {
        const eventStartTime = new Date(event.startTime);
        const eventEndTime = new Date(event.endTime);
        
        return eventStartTime >= tomorrow && eventEndTime > now;
      })
      .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());

    const finishedReservations = events
      .filter((event) => isEventFinished(event.endTime))
      .sort((a, b) => new Date(b.endTime).getTime() - new Date(a.endTime).getTime());

    return { todayReservations, weekReservations, finishedReservations };
  }, [events]);
};

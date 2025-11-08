import { useMemo } from "react";
import type { EventResponseDTO } from "../../../shared/types/event.types";

export const useFilteredEvents = (
  events: EventResponseDTO[],
  searchTerm: string
) => {
  return useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return events;
    
    return events.filter((ev) =>
      ev.title?.toLowerCase().includes(term) ||
      ev.roomName?.toLowerCase().includes(term)
    );
  }, [searchTerm, events]);
};

import { useMemo } from "react";
import type { RoomEventDetailsDTO } from "../../../shared/types/types";

export const useFilteredEvents = (
  events: RoomEventDetailsDTO[],
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

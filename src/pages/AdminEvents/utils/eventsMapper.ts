import type { EventResponseDTO } from "../../../shared/types/event.types";
import type { FlatEvent } from "../../../services/admin/events/types";

export const mapToFlatEvent = (event: EventResponseDTO): FlatEvent => {
  const date = new Date(event.startTime).toISOString().split("T")[0];

  return {
    id: event.id,
    title: event.title,
    roomName: event.roomName,
    date: date,
    startTime: event.startTime,
    endTime: event.endTime,
    attendeesCount: event.attendees.length,
  };
};

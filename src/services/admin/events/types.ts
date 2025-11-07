import type { EventResponseDTO } from "../../../shared/types/event.types";
export interface FlatEvent extends Pick<EventResponseDTO,
  'id' |
  'title' |
  'roomName' |
  'startTime' |
  'endTime' > {
  date: string;
  attendeesCount: number;
}

import type { EventResponseDTO } from "./event.types";
export interface RoomResponseDTO {
    email: string;
    name: string;
    capacity: number;
    description: string | null;
    type: string;
    floor: string;
    is_busy: boolean;
    current_event: EventResponseDTO | null; 
    resources: string[] | null;
    events: EventResponseDTO[];
}
export interface FormattedEventDTO extends Omit<EventResponseDTO, 'startTime' | 'endTime'> {
    startTime: string;
    endTime: string;
}
export interface FormattedRoomResponseDTO extends Omit<RoomResponseDTO, 'events' | 'current_event'> {
    events: FormattedEventDTO[];
    current_event: FormattedEventDTO | null;
}

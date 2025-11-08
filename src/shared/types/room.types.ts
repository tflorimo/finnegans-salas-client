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

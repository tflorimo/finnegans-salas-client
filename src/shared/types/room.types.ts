import type { EventResponseDTO } from "./event.types";

export interface RoomResponseDTO {
    email: string;
    name: string;
    capacity: number;
    description: string | null;
    type: string;
    floor: string;
    is_busy: boolean;
    current_event: string | null;
    resources: string[] | null;
    events: EventResponseDTO[];
}

/* export enum RoomStatusEnum {
  AVAILABLE = "available",
  OCCUPIED = "occupied",
  MAINTENANCE = "maintenance",
}

export type roomStatusType = "available" | "occupied" | "maintenance";
export type eventStatusType = "booked" | "in-progress" | "completed"; */

/* export interface RoomBaseDTO {
  id: string; // Mail de la sala
  name: string;
  floor: string;
  capacity: number;
  status: roomStatusType;
}

export interface RoomEventResponseDTO {
  id: string;
  title: string;
  start: string;
  end: string;
}

export type RoomsResponse = RoomData[];

export type RoomData = {
  roomDetails: RoomDetailsDTO;
  roomEvents: RoomEventResponseDTO[];
};

export type EventsData = {
  roomsEvents: RoomEventResponseDTO[];
};

export interface RoomDetailsDTO extends RoomBaseDTO {
  description: string;
  equipment: string[];
  qrImageUrl: string;
  nextAvailableAt?: string;
  currentEvent?: RoomEventResponseDTO;
}

export type RoomEventsResponse = RoomEventResponseDTO[]; */
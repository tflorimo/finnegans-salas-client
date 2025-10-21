export enum RoomStatusEnum {
  AVAILABLE = "available",
  OCCUPIED = "occupied",
  MAINTENANCE = "maintenance",
}

export type roomStatusType = "available" | "occupied" | "maintenance";
export type eventStatusType = "booked" | "in-progress" | "completed";

export interface RoomBaseDTO {
  id: string; // Mail de la sala
  name: string;
  floor: string;
  capacity: number;
  status: roomStatusType;
}

export interface RoomEventDTO {
  id: string;
  title: string;
  start: string;
  end: string;
}

export type RoomsResponse = RoomData[];

export type RoomData = {
  roomDetails: RoomDetailsDTO;
  roomEvents: RoomEventDetailsDTO[];
};

export type EventsData = {
  roomsEvents: RoomEventDetailsDTO[];
};

export interface RoomDetailsDTO extends RoomBaseDTO {
  description: string;
  equipment: string[];
  qrImageUrl: string;
  nextAvailableAt?: string;
  currentEvent?: RoomEventDTO;
}

export interface RoomEventDetailsDTO extends RoomEventDTO {
  id: string; // Id del backend del evento
  title: string;
  organizer: string;
  guests: string[]; // Mails de los invitados al evento. Servirá para matchear con el botón de check-in
  attendees: number;
  status: eventStatusType;
  roomId: string;
  checkInStatus?: boolean;
  description?: string;
  details?: string[];
  tags?: string[];
  meetingLink?: string;
}

export type RoomEventsResponse = RoomEventDetailsDTO[];

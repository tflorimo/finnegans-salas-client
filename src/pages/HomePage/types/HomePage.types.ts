import type { EventResponseDTO } from "../../../shared/types/event.types";
import type { RoomResponseDTO } from "../../../shared/types/room.types";

export type RoomItemProps = {
  room: RoomResponseDTO;
};

export type RoomEventItemProps = {
  event: EventResponseDTO;
};

export type RoomSelectOptionsType = {
  id: RoomStatusOptions;
  description: string;
  status: RoomStatusOptions;
};

export enum RoomStatusOptionsEnum {
  all = "all",
  available = "available",
  occupied = "occupied",
}

export type RoomStatusOptions = keyof typeof RoomStatusOptionsEnum;

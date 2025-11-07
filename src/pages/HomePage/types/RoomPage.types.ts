import type { RoomData, RoomEventResponseDTO } from "../../../shared/types/types";

export type RoomItemProps = {
  room: RoomData;
};

export type RoomEventItemProps = {
  event: RoomEventResponseDTO;
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

import { Tags } from "../../../components/Tag/types";
import { RoomStatusEnum } from "./../../../shared/types/types";
import { RoomStatusOptionsEnum } from "./../types/RoomPage.types";

export const ROOM_SELECT_OPTIONS = [
  {
    id: RoomStatusOptionsEnum.all,
    description: "Todas las salas",
    status: RoomStatusOptionsEnum.all,
  },
  {
    id: RoomStatusOptionsEnum.available,
    description: "Solo libres",
    status: RoomStatusOptionsEnum.available,
  },
  {
    id: RoomStatusOptionsEnum.occupied,
    description: "Solo ocupadas",
    status: RoomStatusOptionsEnum.occupied,
  },
];

export const ROOM_STATUS_CONFIG = {
  [RoomStatusEnum.AVAILABLE]: Tags.succesOutput,
  [RoomStatusEnum.OCCUPIED]: Tags.dangerOutput,
  [RoomStatusEnum.MAINTENANCE]: Tags.infoOutput,
};

export const ROOM_TEXT_CONFIG = {
  [RoomStatusEnum.AVAILABLE]: "Libre",
  [RoomStatusEnum.OCCUPIED]: "Ocupada",
  [RoomStatusEnum.MAINTENANCE]: "Mantenimiento",
};

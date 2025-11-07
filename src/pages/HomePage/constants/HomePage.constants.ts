import { Tags } from "../../../components/Tag/types";
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

export const getRoomStatusConfig = (isBusy: boolean) => 
  isBusy ? Tags.dangerOutput : Tags.succesOutput;

export const getRoomStatusText = (isBusy: boolean) => 
  isBusy ? "Ocupada" : "Libre";

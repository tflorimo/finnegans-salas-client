import { useCallback } from "react";
import type { RoomResponseDTO } from "../../../shared/types/room.types";
import { RoomStatusOptionsEnum } from "../types/RoomPage.types";

interface UseRoomFiltersProps {
  roomsData: RoomResponseDTO[];
  roomStatusSelected: string;
}

export const useRoomFilters = ({ roomsData, roomStatusSelected }: UseRoomFiltersProps) => {
  const countRoomsByStatus = useCallback(() => {
    const occupiedCount = roomsData.filter(room => room.is_busy).length;
    const availableCount = roomsData.length - occupiedCount;

    return [
      { title: 'Total de Salas', number: roomsData.length },
      { title: 'Salas libres', number: availableCount },
      { title: 'Salas ocupadas', number: occupiedCount },
    ];
  }, [roomsData]);

  const calculateRoomsByStatus = useCallback(() => {
    const roomsByStatus = [
      { id: RoomStatusOptionsEnum.all, rooms: roomsData },
      { id: RoomStatusOptionsEnum.available, rooms: roomsData.filter(room => !room.is_busy) },
      { id: RoomStatusOptionsEnum.occupied, rooms: roomsData.filter(room => room.is_busy) },
    ];

    return roomsByStatus.find(roomStatus => roomStatus.id === roomStatusSelected);
  }, [roomStatusSelected, roomsData]);

  return {
    countRoomsByStatus,
    calculateRoomsByStatus,
  };
};

import { useCallback } from "react";
import type { RoomResponseDTO } from "../../../shared/types/room.types";
import { RoomStatusOptionsEnum } from "../types/RoomPage.types";

interface UseRoomFiltersProps {
  roomsData: RoomResponseDTO[];
  roomStatusSelected: string;
  roomKeywordSelected: string;
}

export const useRoomFilters = ({ roomsData, roomStatusSelected, roomKeywordSelected }: UseRoomFiltersProps) => {
  const countRoomsByStatus = useCallback(() => {
    const occupied = roomsData.filter((room) => room.is_busy).length;
    const available = roomsData.length - occupied;
    return {
      total: roomsData.length,
      available,
      occupied,
    };
  }, [roomsData]);

  const calculateRoomsByStatus = useCallback(() => {
    const roomsByStatus = [
      { id: RoomStatusOptionsEnum.all, rooms: roomsData },
      { id: RoomStatusOptionsEnum.available, rooms: roomsData.filter(room => !room.is_busy) },
      { id: RoomStatusOptionsEnum.occupied, rooms: roomsData.filter(room => room.is_busy) },
    ];

    return roomsByStatus.find(roomStatus => roomStatus.id === roomStatusSelected);
  }, [roomStatusSelected, roomsData]);

  const filterRooms = useCallback(() => {
    let filtered = [...roomsData];

    // Filtro por estado
    if (roomStatusSelected === RoomStatusOptionsEnum.available) {
      filtered = filtered.filter((room) => !room.is_busy);
    } else if (roomStatusSelected === RoomStatusOptionsEnum.occupied) {
      filtered = filtered.filter((room) => room.is_busy);
    }

    // Filtro por nombre
    if (roomKeywordSelected.trim() !== "") {
      filtered = filtered.filter((room) =>
        room.name.toLowerCase().includes(roomKeywordSelected.toLowerCase())
      );
    }

    return filtered;
  }, [roomsData, roomStatusSelected, roomKeywordSelected]);

  return {
    countRoomsByStatus,
    calculateRoomsByStatus,
    filterRooms
  };
};

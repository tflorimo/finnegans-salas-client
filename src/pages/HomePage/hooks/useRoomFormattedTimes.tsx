import { useMemo } from "react";
import { formatTime } from "../utils/formatTime.utils";
import type { RoomResponseDTO } from "../../../shared/types/room.types";

export const useRoomFormattedTimes = (room: RoomResponseDTO | null) => {
  return useMemo(() => {
    if (!room) return null;

    return {
      ...room,
      events: Array.isArray(room.events)
        ? room.events.map((event) => ({
            ...event,
            startTime: formatTime(event.startTime),
            endTime: formatTime(event.endTime),
          }))
        : [],
    };
  }, [room]);
};
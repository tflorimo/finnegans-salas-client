import { useMemo } from "react";
import { formatTime } from "../utils/formatTime.utils";
import type { RoomResponseDTO, FormattedRoomResponseDTO } from "../../../shared/types/room.types";

export const useRoomFormattedTimes = (room: RoomResponseDTO | null): FormattedRoomResponseDTO | null => {
  return useMemo(() => {
    if (!room) return null;

    return {
      ...room,
      current_event: room.current_event
        ? {
            ...room.current_event,
            startTime: formatTime(room.current_event.startTime),
            endTime: formatTime(room.current_event.endTime),
          }
        : null,
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
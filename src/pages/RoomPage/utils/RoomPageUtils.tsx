import { Tag } from "../../../components/Tag/Tag";
import { ROOM_STATUS_LABELS, ROOM_STATUS_TAG_TYPES } from "../constants/RoomPage.constants";

export function initials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export const renderStatusTag = (loading: boolean, is_busy?: boolean) => {
  if (loading) {
    return <Tag text={ROOM_STATUS_LABELS.loading} type={ROOM_STATUS_TAG_TYPES.loading} />;
  }
  
  if (!is_busy) {
    return <Tag text={ROOM_STATUS_LABELS.available} type={ROOM_STATUS_TAG_TYPES.available} />;
  }
  
  return <Tag text={ROOM_STATUS_LABELS.occupied} type={ROOM_STATUS_TAG_TYPES.occupied} />;
};

export function getDayName(dateInput: string | Date): string {
  const date = new Date(dateInput);
  const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  return days[date.getDay()];
}

export function sortEligibleEvents<T extends { id: string; startTime: string | Date }>(
  events: T[],
  currentEventId?: string
): T[] {
  return events.sort((a, b) => {
    const timeA = new Date(a.startTime).getTime();
    const timeB = new Date(b.startTime).getTime();
    
    if (timeA === timeB) {
      const isACurrentEvent = currentEventId === a.id;
      const isBCurrentEvent = currentEventId === b.id;
      if (isACurrentEvent) return -1;
      if (isBCurrentEvent) return 1;
    }
    
    return timeA - timeB;
  });
}

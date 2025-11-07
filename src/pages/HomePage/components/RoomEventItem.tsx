import { Clock } from "lucide-react"
import { ROOM_PAGE_COLORS, RoomEventItemStyles, RoomEventTimeSectionStyles } from "../styles"

const formatTime = (dateInput: Date | string): string => {
  try {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  } catch (error) {
    console.error("Error formateando hora:", error);
    return "-";
  }
};

interface RoomEventTimeProps {
  event: {
    id: string;
    title: string;
    startTime: Date | string; 
    endTime: Date | string;  
  };
}

export const RoomEventItem = ({ event }: RoomEventTimeProps) => {
  const startTime = formatTime(event.startTime);
  const endTime = formatTime(event.endTime);

  const maxTitleLength = 25;
  const truncatedTitle =
    event.title.length > maxTitleLength
      ? event.title.slice(0, maxTitleLength) + "..."
      : event.title;

  return (
    <RoomEventItemStyles>
      <p title={event.title}>{truncatedTitle}</p>
      <RoomEventTimeSectionStyles>
        <Clock size={14} color={ROOM_PAGE_COLORS.roomText} style={{ marginRight: '0.25rem' }} />
        <p>{`${startTime} - ${endTime}`}</p>
      </RoomEventTimeSectionStyles>
    </RoomEventItemStyles>
  )
}
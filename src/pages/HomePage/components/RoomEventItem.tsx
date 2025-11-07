import { Clock } from "lucide-react";
import { ROOM_PAGE_COLORS, RoomEventItemStyles, RoomEventTimeSectionStyles } from "../styles";
import type { RoomEventTimeProps } from "../utils/formatTime.utils";

export const RoomEventItem = ({ event }: RoomEventTimeProps) => {
  const startTime = event.startTime; 
  const endTime = event.endTime;     

  const maxTitleLength = 25;
  const truncatedTitle =
    event.title.length > maxTitleLength
      ? `${event.title.slice(0, maxTitleLength)}...`
      : event.title;

  return (
    <RoomEventItemStyles>
      <p title={event.title}>{truncatedTitle}</p>
      <RoomEventTimeSectionStyles>
        <Clock 
          size={14} 
          color={ROOM_PAGE_COLORS.roomText} 
          style={{ marginRight: '0.25rem' }} 
        />
        <p>{`${startTime} - ${endTime}`}</p>
      </RoomEventTimeSectionStyles>
    </RoomEventItemStyles>
  );
};
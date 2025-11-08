import { Clock } from "lucide-react";
import { ROOM_PAGE_COLORS, RoomEventItemStyles, RoomEventTimeSectionStyles } from "../styles";
import type { RoomEventTimeProps } from "../utils/formatTime.utils";
import { truncateText } from "../../RoomPage/utils/textUtils";

export const RoomEventItem = ({ event }: RoomEventTimeProps) => {
  const startTime = event.startTime; 
  const endTime = event.endTime;     

  return (
    <RoomEventItemStyles>
      <p title={event.title}>{truncateText(event.title, 20)}</p>
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
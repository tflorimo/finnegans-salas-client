import { ROOM_PAGE_COLORS, RoomEventItemStyles, RoomEventTimeSectionStyles, FinishedEventIconWrapper, EventIconWrapper, InProgressEventIconWrapper } from "../styles";
import type { RoomEventTimeProps } from "../utils/formatTime.utils";
import { truncateTextByLength } from "../../../shared/utils/text.utils";
import { EventStatusIcon } from "../../../shared/components/EventStatusIcon";

export const RoomEventItem = ({ event, currentEventId }: RoomEventTimeProps) => {
  const startTime = event.startTime; 
  const endTime = event.endTime;

  return (
    <RoomEventItemStyles>
      <p title={event.title}>{truncateTextByLength(event.title, 20)}</p>
      <RoomEventTimeSectionStyles>
        {event.originalStartTime && event.originalEndTime ? (
          <EventStatusIcon
            startTime={event.originalStartTime}
            endTime={event.originalEndTime}
            eventId={event.id}
            currentEventId={currentEventId}
            size={14}
            upcomingColor={ROOM_PAGE_COLORS.roomText}
            FinishedWrapper={FinishedEventIconWrapper}
            InProgressWrapper={InProgressEventIconWrapper}
            UpcomingWrapper={EventIconWrapper}
          />
        ) : (
          <EventIconWrapper>
            <EventStatusIcon
              startTime={new Date()}
              endTime={new Date()}
              size={14}
              upcomingColor={ROOM_PAGE_COLORS.roomText}
            />
          </EventIconWrapper>
        )}
        <p>{`${startTime} - ${endTime}`}</p>
      </RoomEventTimeSectionStyles>
    </RoomEventItemStyles>
  );
};
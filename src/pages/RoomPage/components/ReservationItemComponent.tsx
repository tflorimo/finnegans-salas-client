import { Avatar, ResInfo, ResRight, ReservationItem, FinishedEventIcon, InProgressEventIcon } from "../styles";
import { initials, getDayName } from "../utils/RoomPageUtils";
import { truncateTextByLength } from "../../../shared/utils/text.utils";
import { EventStatusIcon } from "../../../shared/components/EventStatusIcon";

interface ReservationItemComponentProps {
  organizer: string;
  start: string | Date | undefined;
  end: string | Date | undefined;
  date: Date | string;
  title: string;
  endTime: Date | string; 
  startTime: Date | string;
  eventId: string;
  currentEventId?: string;
}

export const ReservationItemComponent = ({
  organizer,
  start,
  end,
  date,
  title,
  endTime,
  startTime,
  eventId,
  currentEventId,
}: ReservationItemComponentProps) => {

  return (
    <ReservationItem>
      <Avatar>{initials(organizer)}</Avatar>
      <ResInfo>
        <span>
          {organizer} - {truncateTextByLength(title, 50)}
        </span>
        <small>{getDayName(date)}</small>
      </ResInfo>
      <ResRight>
        <EventStatusIcon
          startTime={startTime}
          endTime={endTime}
          eventId={eventId}
          currentEventId={currentEventId}
          size={16}
          FinishedWrapper={FinishedEventIcon}
          InProgressWrapper={InProgressEventIcon}
        />
        <span>{`${start ?? '-'} - ${end ?? '-'}`}</span>
      </ResRight>
    </ReservationItem>
  );
};

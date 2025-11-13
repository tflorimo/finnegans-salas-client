import { Avatar, ResInfo, ResRight, ReservationItem, EventStatusInProgress, EventStatusOverlapping, FinishedEventIcon, InProgressEventIcon } from "../styles";
import { initials } from "../utils/RoomPageUtils";
import { getDayName } from "../utils/RoomPageUtils";
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

  const formatTitle = (title: string) => {
    const truncatedTitle = truncateTextByLength(title, 50);
    
    if (truncatedTitle.includes("En Curso")) {
      const parts = truncatedTitle.split("En Curso");
      return (
        <>
          {parts[0]}
          <EventStatusInProgress>En Curso</EventStatusInProgress>
          {parts[1]}
        </>
      );
    }
    
    if (truncatedTitle.includes("Superpuesto")) {
      const parts = truncatedTitle.split("Superpuesto");
      return (
        <>
          {parts[0]}
          <EventStatusOverlapping>Superpuesto</EventStatusOverlapping>
          {parts[1]}
        </>
      );
    }
    
    return truncatedTitle;
  };

  return (
    <ReservationItem>
      <Avatar>{initials(organizer)}</Avatar>
      <ResInfo>
        <span>
          {organizer} - {formatTitle(title)}
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

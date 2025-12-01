import { useContext } from "react";

import { ThemeContext } from "../../../context/theme/themeContext";
import { EventStatusIcon } from "../../../shared/components/EventStatusIcon";
import { truncateTextByLength } from "../../../shared/utils/text.utils";
import { Avatar, FinishedEventIcon, InProgressEventIcon, ResInfo, ResRight, ReservationItem } from "../styles";
import { getDayName, initials } from "../utils/RoomPageUtils";

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
  const { theme } = useContext(ThemeContext);
  return (
    <ReservationItem $theme={theme}>
      <Avatar>{initials(organizer)}</Avatar>
      <ResInfo $theme={theme}>
        <span>
          {organizer} - {truncateTextByLength(title, 50)}
        </span>
        <small>{getDayName(date)}</small>
      </ResInfo>
      <ResRight $theme={theme}>
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

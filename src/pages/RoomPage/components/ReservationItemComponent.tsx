import { Clock } from "lucide-react";
import { Avatar, ResInfo, ResLeft, ResRight, ReservationItem } from "../styles";
import { initials, timeRange } from "../utils/roomUtils";

interface ReservationItemComponentProps {
  organizer: string;
  start: Date;
  end: Date;
}

export const ReservationItemComponent = ({
  organizer,
  start,
  end,
}: ReservationItemComponentProps) => {
  const weekday = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
  }).format(start);

  return (
    <ReservationItem>
      <ResLeft>
        <Avatar>{initials(organizer)}</Avatar>
        <ResInfo>
          <span>{organizer}</span>
          <small>{weekday}</small>
        </ResInfo>
      </ResLeft>
      <ResRight>
        <Clock size={16} />
        <span>{timeRange(start, end)}</span>
      </ResRight>
    </ReservationItem>
  );
};

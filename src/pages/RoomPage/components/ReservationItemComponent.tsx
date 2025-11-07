import { Clock } from "lucide-react";
import { Avatar, ResInfo, ResLeft, ResRight, ReservationItem } from "../styles";
import { initials } from "../utils/RoomPageUtils";
import { getDayName } from "../utils/RoomPageUtils";
interface ReservationItemComponentProps {
  organizer: string;
  start: string | Date | undefined;
  end: string | Date | undefined;
  date: Date | string;
}

export const ReservationItemComponent = ({
  organizer,
  start,
  end,
  date,
}: ReservationItemComponentProps) => {
  return (
    <ReservationItem>
      <ResLeft>
        <Avatar>{initials(organizer)}</Avatar>
        <ResInfo>
          <span>{organizer}</span>
          <small>{getDayName(date)}</small>
        </ResInfo>
      </ResLeft>
      <ResRight>
        <Clock size={16} />
        <span>{`${start} - ${end}`}</span>
      </ResRight>
    </ReservationItem>
  );
};

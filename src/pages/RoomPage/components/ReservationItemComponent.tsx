import { Clock } from "lucide-react";
import { Avatar, ResInfo, ResLeft, ResRight, ReservationItem } from "../styles";
import { initials } from "../utils/RoomPageUtils";
import { getDayName } from "../utils/RoomPageUtils";
import { truncateTextByLength } from "../../../shared/utils/text.utils";
import { ThemeContext } from "../../../context/theme/themeContext";
import { useContext } from "react";
interface ReservationItemComponentProps {
  organizer: string;
  start: string | Date | undefined;
  end: string | Date | undefined;
  date: Date | string;
  title: string;
}
export const ReservationItemComponent = ({
  organizer,
  start,
  end,
  date,
  title,
}: ReservationItemComponentProps) => {
  const {theme} = useContext(ThemeContext);
  return (
    <ReservationItem>
      <ResLeft>
        <Avatar>{initials(organizer)}</Avatar>
        <ResInfo $theme={theme}>
          <span>
            {organizer} - {truncateTextByLength(title, 30)}
          </span>
          <small>{getDayName(date)}</small>
        </ResInfo>
      </ResLeft>
      <ResRight  $theme={theme}>
        <Clock size={16} />
        <span>{`${start ?? '-'} - ${end ?? '-'}`}</span>
      </ResRight>
    </ReservationItem>
  );
};

import { Eye } from "lucide-react";
import { useContext } from "react";
import { Tag } from "../../../components/Tag/Tag";
import { Tags } from "../../../components/Tag/types";
import type { EventResponseDTO } from "../../../shared/types/event.types";
import { formatTimeRange } from "../../../shared/utils/format.utils";
import { formatDate } from "../utils/dateUtils";
import { truncateTextByLength } from "../../../shared/utils/text.utils";
import { attendeesTagStyle, IconBtn } from "../styles";
import { ThemeContext } from "../../../context/theme/themeContext";
interface EventTableRowProps {
  event: EventResponseDTO;
  onView: () => void;
}

export const EventTableRow = ({ event, onView }: EventTableRowProps) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <tr key={event.id}>
      <td title={event.title}>{truncateTextByLength(event.title, 30)}</td>
      <td>{event.roomName}</td>
      <td>{formatDate(event.startTime)}</td>
      <td>{formatTimeRange(event.startTime, event.endTime)}</td>
      <td>
        <Tag
          text={`${event.attendees?.length ?? 0}`}
          type={Tags.info}
          customStyle={attendeesTagStyle}
          $theme={theme}
        />
      </td>
      <td>
        <IconBtn $theme={theme} title="Ver" onClick={onView}>
          <Eye size={16} />
        </IconBtn>
      </td>
    </tr>
  );
};

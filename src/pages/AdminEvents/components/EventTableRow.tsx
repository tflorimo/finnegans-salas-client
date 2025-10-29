import { Eye } from "lucide-react";
import { Tag } from "../../../components/Tag/Tag";
import { Tags } from "../../../components/Tag/types";
import type { RoomEventDetailsDTO } from "../../../shared/types/types";
import { formatDate, formatTimeRange } from "../utils/dateUtils";
import { attendeesTagStyle, IconBtn } from "../styles";

interface EventTableRowProps {
  event: RoomEventDetailsDTO;
}

export const EventTableRow = ({ event }: EventTableRowProps) => {
  return (
    <tr key={event.id}>
      <td>{event.title}</td>
      <td>{event.roomName}</td>
      <td>{formatDate(event.start)}</td>
      <td>{formatTimeRange(event.start, event.end)}</td>
      <td>
        <Tag
          text={`${event.attendees ?? event.guests?.length ?? 0}`}
          type={Tags.info}
          customStyle={attendeesTagStyle}
        />
      </td>
      <td>
        <IconBtn title="Ver">
          <Eye size={16} />
        </IconBtn>
      </td>
    </tr>
  );
};

import { Calendar, UsersIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CardContainer } from "../../../components/CardContainer/CardContainer";
import { Tag } from "../../../components/Tag/Tag";
import { ThemeContext } from "../../../context/theme/themeContext";
import {
  EVENTOS_SEMANA,
  getRoomStatusConfig,
  getRoomStatusText,
} from "../constants/HomePage.constants";
import {
  ROOM_PAGE_COLORS,
  RoomEventsSectionStyles,
  RoomInfoSectionStyles,
  RoomListContainerStyles,
  RoomStatusSectionStyles,
} from "../styles";
import type { RoomItemProps } from "../types/HomePage.types";
import { RoomEventItem } from "./RoomEventItem";
import { useRoomFormattedTimes } from "../hooks/useRoomFormattedTimes";
import { selectDisplayEvents } from "../utils/eventSelection.utils";
import { encodeRoomEmail } from "../../../shared/utils/roomURL.utils";

export const RoomItem = ({ room }: RoomItemProps) => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const roomTimes = useRoomFormattedTimes(room);

  const handleClick = () => {
    const encodedId = encodeRoomEmail(room.email);
    navigate(`/room/${encodedId}`, { state: { room } });
  };

  if (!roomTimes) return null;

  const displayEvents = selectDisplayEvents(
    roomTimes.events,
    roomTimes.current_event?.id
  );

  return (
    <CardContainer
      onClick={handleClick}
      customStyle={RoomListContainerStyles(theme)}
    >
      <RoomStatusSectionStyles>
        <h2>{roomTimes.name}</h2>
        <Tag
          text={getRoomStatusText(roomTimes.is_busy)}
          type={getRoomStatusConfig(roomTimes.is_busy)}
        />
      </RoomStatusSectionStyles>

      <RoomInfoSectionStyles>
        <UsersIcon size={16} color={ROOM_PAGE_COLORS.roomText} />
        <p>{`Capacidad: ${roomTimes.capacity} personas`}</p>
      </RoomInfoSectionStyles>

      <RoomInfoSectionStyles>
        <Calendar size={16} color={ROOM_PAGE_COLORS.roomText} />
        <p>{EVENTOS_SEMANA}</p>
      </RoomInfoSectionStyles>

      <RoomEventsSectionStyles>
        {displayEvents.map((event) => (
          <RoomEventItem
            key={event.id}
            event={event}
            currentEventId={roomTimes.current_event?.id}
          />
        ))}
      </RoomEventsSectionStyles>
    </CardContainer>
  );
};

import { Calendar, UsersIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CardContainer } from "../../../components/CardContainer/CardContainer";
import { Tag } from "../../../components/Tag/Tag";
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
import type { RoomItemProps } from "../types/RoomPage.types";
import { RoomEventItem } from "./RoomEventItem";
import { useRoomFormattedTimes } from "../hooks/useRoomFormattedTimes";

export const RoomItem = ({ room }: RoomItemProps) => {
  const navigate = useNavigate();
  const roomTimes = useRoomFormattedTimes(room);

  const handleClick = () => {
    navigate(`/room/${room.email}`, { state: { room } });
  };

  if (!roomTimes) return null;

  return (
    <CardContainer
      onClick={handleClick}
      customStyle={RoomListContainerStyles}
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
        {roomTimes.events.slice(0, 3).map((event) => (
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

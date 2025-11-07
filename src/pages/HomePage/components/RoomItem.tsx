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

export const RoomItem = ({ room }: RoomItemProps) => {
  const navigate = useNavigate();

  return (
    <CardContainer
      onClick={() => navigate(`/room/${room.email}`)}
      customStyle={RoomListContainerStyles}
    >
      <RoomStatusSectionStyles>
        <h2>{room.name}</h2>
        <Tag
          text={getRoomStatusText(room.is_busy)}
          type={getRoomStatusConfig(room.is_busy)}
        />
      </RoomStatusSectionStyles>

      <RoomInfoSectionStyles>
        <UsersIcon size={16} color={ROOM_PAGE_COLORS.roomText} />
        <p>{`Capacidad: ${room.capacity} personas`}</p>
      </RoomInfoSectionStyles>

      <RoomInfoSectionStyles>
        <Calendar size={16} color={ROOM_PAGE_COLORS.roomText} />
        <p>{EVENTOS_SEMANA}</p>
      </RoomInfoSectionStyles>

      <RoomEventsSectionStyles>
        {room.events.slice(0, 3).map((event) => (
          <RoomEventItem key={event.id} event={event} />
        ))}
      </RoomEventsSectionStyles>
    </CardContainer>
  );
};

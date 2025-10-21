import { Calendar, Dot, UsersIcon } from "lucide-react"

import { CardContainer } from "../../../components/CardContainer/CardContainer"
import { Tag } from "../../../components/Tag/Tag"
import { ROOM_STATUS_CONFIG, ROOM_TEXT_CONFIG } from "../constants/HomePage.constants"
import { ROOM_PAGE_COLORS, RoomEventsSectionStyles, RoomInfoSectionStyles, RoomListContainerStyles, RoomStatusSectionStyles } from "../styles"
import type { RoomItemProps } from "../types/RoomPage.types"
import { RoomEventItem } from "./RoomEventItem"

export const RoomItem = ({ room }: RoomItemProps) => {
    return (
        <CardContainer
            customStyle={RoomListContainerStyles}
        >
            <RoomStatusSectionStyles>
                <h2>{room.roomDetails.name}</h2>
                <Tag icon={<Dot size={20} />} text={ROOM_TEXT_CONFIG[room.roomDetails.status]} type={ROOM_STATUS_CONFIG[room.roomDetails.status]} />
            </RoomStatusSectionStyles>
            <RoomInfoSectionStyles>
                <UsersIcon size={16} color={ROOM_PAGE_COLORS.roomText} />
                <p>{`Capacidad: ${room.roomDetails.capacity} personas`}</p>
            </RoomInfoSectionStyles>
            <RoomInfoSectionStyles>
                <Calendar size={16} color={ROOM_PAGE_COLORS.roomText} />
                <p>{`Eventos esta semana`}</p>
            </RoomInfoSectionStyles>
            <RoomEventsSectionStyles>
                {room.roomEvents.map((event) => (
                    <RoomEventItem key={event.id} event={event} />
                ))}
            </RoomEventsSectionStyles>
        </CardContainer>
    )
}
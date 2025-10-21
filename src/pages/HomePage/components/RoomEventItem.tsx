import { Clock } from "lucide-react"

import { ROOM_PAGE_COLORS, RoomEventItemStyles, RoomEventTimeSectionStyles } from "../styles"
import type { RoomEventItemProps } from "../types/RoomPage.types"


export const RoomEventItem = ({ event }: RoomEventItemProps) => {

    const calculateTime = (dateString: string) => {
        const date = new Date(dateString);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    return (
        <RoomEventItemStyles key={event.id} >
            <p>{event.title}</p>
            <RoomEventTimeSectionStyles>
                <Clock size={14} color={ROOM_PAGE_COLORS.roomText} style={{ marginRight: '0.25rem' }} />
                <p>{`${calculateTime(event.start)} - ${calculateTime(event.end)}`}</p>
            </RoomEventTimeSectionStyles>
        </RoomEventItemStyles>
    )
}
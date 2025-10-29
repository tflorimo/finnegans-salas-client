import { Users } from "lucide-react";
import { RoomStatusTag } from "./RoomStatusTag";
import { ROOM_PAGE_MESSAGES } from "../constants/RoomPage.constants";
import type { roomStatusType } from "../../../shared/types/types";
import {
  RoomHeaderContainer,
  RoomHeaderInfo,
  RoomTitle,
  RoomCapacityInfo,
} from "../styles";

interface RoomHeaderProps {
  name?: string;
  capacity?: number;
  status?: roomStatusType;
  loading: boolean;
}

export const RoomHeader = ({ name, capacity, status, loading }: RoomHeaderProps) => {
  return (
    <RoomHeaderContainer>
      <RoomHeaderInfo>
        <RoomTitle>
          {loading ? ROOM_PAGE_MESSAGES.LOADING : name ?? ROOM_PAGE_MESSAGES.ROOM_DEFAULT}
        </RoomTitle>
        <RoomCapacityInfo>
          <Users size={16} />
          <span>
            {ROOM_PAGE_MESSAGES.CAPACITY_LABEL} {loading ? ROOM_PAGE_MESSAGES.LOADING : capacity ?? "-"}{" "}
            {ROOM_PAGE_MESSAGES.CAPACITY_UNIT}
          </span>
        </RoomCapacityInfo>
      </RoomHeaderInfo>
      <RoomStatusTag status={status} loading={loading} />
    </RoomHeaderContainer>
  );
};

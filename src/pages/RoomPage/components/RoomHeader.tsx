import { Users } from "lucide-react";
import { RoomStatusTag } from "./RoomStatusTag";
import { ROOM_PAGE_MESSAGES } from "../constants/RoomPage.constants";
import {
  RoomHeaderContainer,
  RoomHeaderInfo,
  RoomTitle,
  RoomCapacityInfo,
} from "../styles";

interface RoomHeaderProps {
  name?: string;
  capacity?: number;
  isBusy?: boolean | undefined;
  loading: boolean;
}

export const RoomHeader = ({ name, capacity, isBusy, loading }: RoomHeaderProps) => {
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
      <RoomStatusTag isBusy={isBusy} loading={loading} />
    </RoomHeaderContainer>
  );
};

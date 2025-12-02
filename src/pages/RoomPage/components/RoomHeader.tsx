import { Users } from "lucide-react";
import { useContext } from "react";

import { ThemeContext } from "../../../context/theme/themeContext";
import { ROOM_PAGE_MESSAGES } from "../constants/RoomPage.constants";
import {
  RoomCapacityInfo,
  RoomHeaderContainer,
  RoomHeaderInfo,
  RoomTitle,
} from "../styles";
import { RoomStatusTag } from "./RoomStatusTag";

interface RoomHeaderProps {
  name?: string;
  capacity?: number;
  isBusy?: boolean | undefined;
  loading: boolean;
}

export const RoomHeader = ({ name, capacity, isBusy, loading }: RoomHeaderProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <RoomHeaderContainer>
      <RoomHeaderInfo>
        <RoomTitle $theme={theme}>
          {loading ? ROOM_PAGE_MESSAGES.LOADING : name ?? ROOM_PAGE_MESSAGES.ROOM_DEFAULT}
        </RoomTitle>
        <RoomCapacityInfo $theme={theme}>
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

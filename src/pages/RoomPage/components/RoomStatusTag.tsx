import { Tag } from "../../../components/Tag/Tag";
import { ROOM_STATUS_LABELS, ROOM_STATUS_TAG_TYPES } from "../constants/RoomPage.constants";
import type { roomStatusType } from "../../../shared/types/types";

interface RoomStatusTagProps {
  status: roomStatusType | undefined;
  loading: boolean;
}

export const RoomStatusTag = ({ status, loading }: RoomStatusTagProps) => {
  if (loading) {
    return <Tag text="…" type={ROOM_STATUS_TAG_TYPES.occupied} />;
  }

  if (!status) return null;

  const label = ROOM_STATUS_LABELS[status];
  const tagType = ROOM_STATUS_TAG_TYPES[status];

  return <Tag text={label} type={tagType} />;
};

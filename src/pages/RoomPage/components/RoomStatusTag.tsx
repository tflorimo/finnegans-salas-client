import { Tag } from "../../../components/Tag/Tag";
import { getRoomStatusConfig, getRoomStatusText } from "../../HomePage/constants/HomePage.constants";

interface RoomStatusTagProps {
  isBusy: boolean | undefined;
  loading: boolean;
}

export const RoomStatusTag = ({ isBusy, loading }: RoomStatusTagProps) => {
  if (loading) {
    return <Tag text="…" type={getRoomStatusConfig(true)} />;
  }

  if (isBusy === undefined) return null;

  const label = getRoomStatusText(isBusy);
  const tagType = getRoomStatusConfig(isBusy);

  return <Tag text={label} type={tagType} />;
};
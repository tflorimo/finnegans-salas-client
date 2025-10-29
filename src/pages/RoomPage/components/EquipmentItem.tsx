import { Monitor } from "lucide-react";
import { Tag } from "../../../components/Tag/Tag";
import { Tags } from "../../../components/Tag/types";
import {
  EQUIPMENT_ICON_SIZE,
  EQUIPMENT_ICON_COLOR,
  EquipmentTagStyle,
} from "../styles";

interface EquipmentItemProps {
  item: string;
}

export const EquipmentItem = ({ item }: EquipmentItemProps) => {
  return (
    <Tag
      icon={<Monitor size={EQUIPMENT_ICON_SIZE} color={EQUIPMENT_ICON_COLOR} />}
      text={item}
      type={Tags.info}
      customStyle={EquipmentTagStyle}
    />
  );
};

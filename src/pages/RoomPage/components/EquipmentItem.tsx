import { Monitor } from "lucide-react";
import { useContext } from "react";
import { Tag } from "../../../components/Tag/Tag";
import { Tags } from "../../../components/Tag/types";
import { ThemeContext } from "../../../context/theme/themeContext";
import {
  EQUIPMENT_ICON_SIZE,
  EquipmentTagStyle,
} from "../styles";

interface EquipmentItemProps {
  item: string;
}

export const EquipmentItem = ({ item }: EquipmentItemProps) => {
  const { theme } = useContext(ThemeContext);
  const iconColor = theme === "dark" ? "#ffffff" : "#2563eb";
  
  return (
    <Tag
      icon={<Monitor size={EQUIPMENT_ICON_SIZE} color={iconColor} />}
      text={item}
      type={Tags.empty}
      customStyle={EquipmentTagStyle}
      $theme={theme}
    />
  );
};

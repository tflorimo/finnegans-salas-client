import { Filter } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Button } from "../../../components/Button/Button";
import { ButtonVariant } from "../../../components/Button/types";
import { ThemeContext } from "../../../context/theme/themeContext";
import { ADMIN_EVENTS_MESSAGES } from "../../../pages/AdminEvents/constants/AdminEvents.constants";
import { Toolbar } from "../../../pages/AdminEvents/styles";
import { ChildrenContent, getFilterButtonStyle } from "./styles";
import type { FilterToolbarProps } from "./types";

export const FilterToolbar = ({ children, clearFilters = false }: FilterToolbarProps) => {
  const [showFilters, setShowFilters] = useState<boolean>(clearFilters);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setShowFilters(clearFilters);
  }, [clearFilters]);

  return (
    <Toolbar>
      <Button
        text={ADMIN_EVENTS_MESSAGES.FILTER_BUTTON}
        icon={<Filter size={16} />}
        variant={ButtonVariant.light}
        onClick={() => setShowFilters((prev) => !prev)}
        customStyle={getFilterButtonStyle(theme)}
      />
      <ChildrenContent>
        {showFilters && children}
      </ChildrenContent>
    </Toolbar>
  );
};

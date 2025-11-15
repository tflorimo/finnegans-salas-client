import { Filter } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../components/Button/Button";
import { ButtonVariant } from "../../../components/Button/types";
import { InputSearch } from "../../../components/InputSearch/InputSearch";
import { ADMIN_EVENTS_MESSAGES } from "../../../pages/AdminEvents/constants/AdminEvents.constants";
import { filterButtonStyle, Toolbar } from "../../../pages/AdminEvents/styles";
import type { FilterToolbarProps } from "./types";

export const FilterToolbar = ({ placeholder, onKeywordSelected }: FilterToolbarProps) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  return (
    <Toolbar>
      <Button
        text={ADMIN_EVENTS_MESSAGES.FILTER_BUTTON}
        icon={<Filter size={16} />}
        variant={ButtonVariant.light}
        onClick={() => setShowFilters((prev) => !prev)}
        customStyle={filterButtonStyle}
      />
      {showFilters && <InputSearch
        placeholder={placeholder}
        onFilter={onKeywordSelected}
      />}
    </Toolbar>
  );
};

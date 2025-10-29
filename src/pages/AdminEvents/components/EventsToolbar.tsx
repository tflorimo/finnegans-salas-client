import { Filter } from "lucide-react";
import { Button } from "../../../components/Button/Button";
import { ButtonVariant } from "../../../components/Button/types";
import { ADMIN_EVENTS_MESSAGES } from "../constants/AdminEvents.constants";
import { filterButtonStyle, Toolbar } from "../styles";

export const EventsToolbar = () => {
  return (
    <Toolbar>
      {/* TODO: Descomentar cuando se implemente el componente InputSearch*/}
      {/* <InputSearch
        placeholder="Buscar eventos..."
        value={query}
        onSearch={(term) => setEventSearched(term)}
        onChange={(e) => setEventSearched(e.target.value)}
      /> */}

      <Button
        text={ADMIN_EVENTS_MESSAGES.FILTER_BUTTON}
        icon={<Filter size={16} />}
        variant={ButtonVariant.light}
        onClick={() => { }}
        customStyle={filterButtonStyle}
      />
    </Toolbar>
  );
};

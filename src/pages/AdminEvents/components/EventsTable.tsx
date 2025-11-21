import { memo } from "react";
import { CardContainer } from "../../../components/CardContainer/CardContainer";
import { ThemeContext } from "../../../context/theme/themeContext";
import type { EventResponseDTO } from "../../../shared/types/event.types";
import { ADMIN_EVENTS_MESSAGES, TABLE_HEADERS } from "../constants/AdminEvents.constants";
import { EmptyState, Table, tableCardStyle } from "../styles";
import { EventTableRow } from "./EventTableRow";
import { useContext } from "react";

interface EventsTableProps {
  events: EventResponseDTO[];
  onView: (event: EventResponseDTO) => void;
}

export const EventsTable = memo(({ events, onView }: EventsTableProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <CardContainer customStyle={tableCardStyle}>
      <Table $theme={theme}>
        <thead>
          <tr>
            <th>{TABLE_HEADERS.EVENT}</th>
            <th>{TABLE_HEADERS.ROOM}</th>
            <th>{TABLE_HEADERS.DATE}</th>
            <th>{TABLE_HEADERS.TIME}</th>
            <th>{TABLE_HEADERS.ATTENDEES}</th>
            <th>{TABLE_HEADERS.ACTIONS}</th>
          </tr>
        </thead>

        <tbody>
          {events.length === 0 && (
            <tr>
              <td colSpan={6}>
                <EmptyState>
                  <h3>{ADMIN_EVENTS_MESSAGES.EMPTY_TITLE}</h3>
                  <p>{ADMIN_EVENTS_MESSAGES.EMPTY_DESCRIPTION}</p>
                </EmptyState>
              </td>
            </tr>
          )}

          {events.map((ev) => (
            <EventTableRow key={ev.id} event={ev} onView={() => onView(ev)} />
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
});


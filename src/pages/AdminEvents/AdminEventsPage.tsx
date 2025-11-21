import { useContext, useState } from "react";
import { SideBar } from "../../shared/components/SideBar/SideBar";
import Header from "../../shared/components/Header/Header";
import { BackButton } from "../../shared/components/BackButton/BackButton";
import { FilterToolbar } from "../../shared/components/FilterToolbar/FilterToolbar";
import { ExportButton } from "../../shared/components/ExportButton";
import type { EventResponseDTO } from "../../shared/types/event.types";
import { EventDetailsModal } from "./components/EventDetailsModal";
import { EventsTable } from "./components/EventsTable";
import { ADMIN_EVENTS_MESSAGES, EVENT_FILTER_PLACEHOLDER, EXPORT_FILE_NAME } from "./constants/AdminEvents.constants";
import { useGetAdminEvents } from "./hooks/useGetAdminEvents";
import {
  AdminEventsContainer,
  AdminEventsPageWrapper,
  AdminHeaderWrapper,
  ButtonsEventsContainer,
  HeaderContent,
  PageHeader,
  PageInner,
  PageTitle,
} from "./styles";
import { ThemeContext } from '../../context/theme/themeContext';
import { useFilteredEvents } from "./hooks/useFilteredEvents";


export const AdminEventsPage = () => {
  const {theme} = useContext(ThemeContext);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<EventResponseDTO | null>(null);
  
  const { events = [] } = useGetAdminEvents();
  const { filteredData, onKeywordSelected } = useFilteredEvents<EventResponseDTO>(events);

  return (
    <AdminEventsPageWrapper>
      <SideBar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed((prevState) => !prevState)}
      />

      <AdminHeaderWrapper $collapsed={isSidebarCollapsed}>
        <Header />
      </AdminHeaderWrapper>

      <AdminEventsContainer $collapsed={isSidebarCollapsed}>
        <PageInner>
          <BackButton />
          <PageHeader>
            <HeaderContent>
              <PageTitle $theme={theme}>{ADMIN_EVENTS_MESSAGES.PAGE_TITLE}</PageTitle>
              <ButtonsEventsContainer>
                <FilterToolbar placeholder={EVENT_FILTER_PLACEHOLDER} onKeywordSelected={onKeywordSelected} />
                <ExportButton data={events} fileName={EXPORT_FILE_NAME} disabled={events.length === 0} />
              </ButtonsEventsContainer>
            </HeaderContent>
          </PageHeader>

          <EventsTable
            events={filteredData}
            onView={(ev) => setSelectedEvent(ev)}
          />

          {selectedEvent && (
            <EventDetailsModal
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </PageInner>
      </AdminEventsContainer>
    </AdminEventsPageWrapper>
  );
};

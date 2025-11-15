import { useState } from "react";
import { BackButton } from "../../shared/components/BackButton/BackButton";
import { FilterToolbar } from "../../shared/components/FilterToolbar/FilterToolbar";
import Header from "../../shared/components/Header/Header";
import { SideBar } from "../../shared/components/SideBar/SideBar";
import type { EventResponseDTO } from "../../shared/types/event.types";
import { EventDetailsModal } from "./components/EventDetailsModal";
import { EventsTable } from "./components/EventsTable";
import { ADMIN_EVENTS_MESSAGES, EVENT_FILTER_PLACEHOLDER } from "./constants/AdminEvents.constants";
import { useFilteredEvents } from "./hooks/useFilteredEvents";
import { useGetAdminEvents } from "./hooks/useGetAdminEvents";
import {
  AdminEventsContainer,
  AdminEventsPageWrapper,
  AdminHeaderWrapper,
  HeaderContent,
  PageHeader,
  PageInner,
  PageTitle,
} from "./styles";

export const AdminEventsPage = () => {
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
              <PageTitle>{ADMIN_EVENTS_MESSAGES.PAGE_TITLE}</PageTitle>
            </HeaderContent>
          </PageHeader>

          <FilterToolbar placeholder={EVENT_FILTER_PLACEHOLDER} onKeywordSelected={onKeywordSelected} />

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

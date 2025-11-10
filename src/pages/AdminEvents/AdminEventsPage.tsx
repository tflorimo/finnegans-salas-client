import { useState } from "react";
import { SideBar } from "../../shared/components/SideBar/SideBar";
import Header from "../../shared/components/Header/Header";
import { BackButton } from "../../shared/components/BackButton/BackButton";
import { useGetAdminEvents } from "./hooks/useGetAdminEvents";
//import { useFilteredEvents } from "./hooks/useFilteredEvents";
import { EventsTable } from "./components/EventsTable";
import { EventsToolbar } from "./components/EventsToolbar";
import { ADMIN_EVENTS_MESSAGES } from "./constants/AdminEvents.constants";
import type { EventResponseDTO } from "../../shared/types/event.types";
import {
  AdminEventsContainer,
  AdminEventsPageWrapper,
  AdminHeaderWrapper,
  HeaderContent,
  PageHeader,
  PageInner,
  PageTitle,
} from "./styles";
import { EventDetailsModal } from "./components/EventDetailsModal";

// TODO: Implementar búsqueda y filtrado de eventos
export const AdminEventsPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  //const [eventSearched, setEventSearched] = useState<string>("");
  const [selectedEvent, setSelectedEvent] = useState<EventResponseDTO | null>(null);
  const { events } = useGetAdminEvents();
  //const filteredEvents = useFilteredEvents(events, eventSearched);

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

          <EventsToolbar />

          <EventsTable
            events={events}
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

import { useContext, useState } from "react";
import { SideBar } from "../../shared/components/SideBar/SideBar";
import Header from "../../shared/components/Header/Header";
import { BackButton } from "../../shared/components/BackButton/BackButton";
import { FilterToolbar } from "../../shared/components/FilterToolbar/FilterToolbar";
import { ExportButton } from "../../shared/components/ExportButton";
import { Pagination } from "../../shared/components/Pagination/Pagination";
import { EventDetailsModal } from "./components/EventDetailsModal";
import { EventsTable } from "./components/EventsTable";
import {
  ADMIN_EVENTS_MESSAGES,
  EVENT_FILTER_PLACEHOLDER,
  EXPORT_FILE_NAME,
} from "./constants/AdminEvents.constants";
import { useEventsFetch } from "./hooks/useEventsFetch";
import { useAllEventsFetch } from "./hooks/useAllEventsFetch";
import { useFilteredEvents } from "./hooks/useFilteredEvents";
import {
  AdminEventsContainer,
  AdminEventsPageWrapper,
  AdminHeaderWrapper,
  ButtonsEventsContainer,
  HeaderContent,
  PageHeader,
  PageInner,
  PageTitle,
  TableWrapper,
  LoadingContainer,
  EmptyState,
} from "./styles";
import { ThemeContext } from "../../context/theme/themeContext";
import { SidebarBackdrop } from "../../shared/components/SideBar/styles";
import type { EventListItemDTO } from "../../services/admin/audits/types";

export const AdminEventsPage = () => {
  const { theme } = useContext(ThemeContext);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<EventListItemDTO | null>(null);

  const { loading, events, pagination, currentPage, handlePageChange } = useEventsFetch();
  const { events: allEvents } = useAllEventsFetch();
  const { filteredData, onKeywordSelected } = useFilteredEvents<any>(events as any);

  const hasEvents = !loading && filteredData.length > 0;
  const isEmpty = !loading && filteredData.length === 0;

  return (
    <AdminEventsPageWrapper>
      <SideBar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed((prevState) => !prevState)}
      />

      <SidebarBackdrop
        $isOpen={!isSidebarCollapsed}
        onClick={() => setIsSidebarCollapsed(true)}
      />

      <AdminHeaderWrapper $collapsed={isSidebarCollapsed}>
        <Header />
      </AdminHeaderWrapper>

      <AdminEventsContainer $collapsed={isSidebarCollapsed}>
        <PageInner>
          <BackButton />
          <PageHeader>
            <HeaderContent>
              <PageTitle $theme={theme}>
                {ADMIN_EVENTS_MESSAGES.PAGE_TITLE}
              </PageTitle>
              <ButtonsEventsContainer>
                <FilterToolbar
                  placeholder={EVENT_FILTER_PLACEHOLDER}
                  onKeywordSelected={onKeywordSelected}
                />
                <ExportButton
                  data={allEvents}
                  fileName={EXPORT_FILE_NAME}
                  disabled={loading || allEvents.length === 0}
                />
              </ButtonsEventsContainer>
            </HeaderContent>
          </PageHeader>

          {loading && (
            <LoadingContainer>
              <p>{ADMIN_EVENTS_MESSAGES.LOADING}</p>
            </LoadingContainer>
          )}

          {isEmpty && (
            <EmptyState>
              <h3>{ADMIN_EVENTS_MESSAGES.EMPTY_TITLE}</h3>
              <p>{ADMIN_EVENTS_MESSAGES.EMPTY_DESCRIPTION}</p>
            </EmptyState>
          )}

          {hasEvents && (
            <>
              <TableWrapper>
                <EventsTable
                  events={filteredData as any}
                  onView={(ev) => setSelectedEvent(ev as unknown as EventListItemDTO)}
                />
              </TableWrapper>

              {pagination.totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={pagination.totalPages}
                  onPageChange={handlePageChange}
                  theme={theme}
                  isLoading={loading}
                />
              )}
            </>
          )}

          {selectedEvent && (
            <EventDetailsModal
              event={selectedEvent as any}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </PageInner>
      </AdminEventsContainer>
    </AdminEventsPageWrapper>
  );
};

import { Trash } from "lucide-react";
import { useCallback, useContext, useState } from "react";

import { Button } from "../../components/Button/Button";
import { ButtonVariant } from "../../components/Button/types";
import { GenericSelect } from "../../components/GenericSelect/GenericSelect";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import { ThemeContext } from "../../context/theme/themeContext";
import type { EventListItemDTO } from "../../services/admin/audits/types";
import { adminService } from "../../services/admin/admin.service";
import { BackButton } from "../../shared/components/BackButton/BackButton";
import { ExportButton } from "../../shared/components/ExportButton";
import { FilterToolbar } from "../../shared/components/FilterToolbar/FilterToolbar";
import { getFilterButtonStyle } from "../../shared/components/FilterToolbar/styles";
import Header from "../../shared/components/Header/Header";
import { Pagination } from "../../shared/components/Pagination/Pagination";
import { SideBar } from "../../shared/components/SideBar/SideBar";
import { SidebarBackdrop } from "../../shared/components/SideBar/styles";
import { AUDIT_SEARCH_TIMEOUT } from "../AdminAudits/constants/AdminAudit.constants";
import { useGetRooms } from "../HomePage/hooks/useGetRooms";
import { EventDetailsModal } from "./components/EventDetailsModal";
import { EventsTable } from "./components/EventsTable";
import {
  ADMIN_EVENTS_MESSAGES,
  EVENT_FILTER_OPTIONS
} from "./constants/AdminEvents.constants";
import { useEventsFetch } from "./hooks/useEventsFetch";
import {
  AdminEventsContainer,
  AdminEventsPageWrapper,
  AdminHeaderWrapper,
  ButtonsEventsContainer,
  EmptyState,
  HeaderContent,
  LoadingContainer,
  PageHeader,
  PageInner,
  PageTitle,
  TableWrapper,
} from "./styles";

export const AdminEventsPage = () => {
  const { theme } = useContext(ThemeContext);

  const [filterSelected, setFilterSelected] = useState<string>("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<EventListItemDTO | null>(
    null
  );
  const [selectValue, setSelectValue] = useState<
    | {
      id: string;
      value: string;
    }
    | undefined
  >(undefined);

  const { roomsData } = useGetRooms();
  const {
    loading,
    events,
    pagination,
    currentPage,
    handlePageChange,
    setSearch,
    clearFilters,
  } = useEventsFetch();

  const hasEvents = !loading && events.length > 0;
  const isEmpty = !loading && events.length === 0;

  const roomNamesData = roomsData.map((room) => ({
    id: room.email,
    value: room.name,
  }));

  const handleFilterByRoomName = useCallback(
    (text: string) => {
      if (filterSelected) {
        setSearch({ key: filterSelected, value: text });
      }
    },
    [filterSelected]
  );

  const handleChangeSelectData = useCallback(
    (value: { id: string; value: string }) => {
      setFilterSelected(value.id);
      setSelectValue(value);
    },
    []
  );

  const handlerClearFilters = useCallback(() => {
    clearFilters();
    setFilterSelected("");
    setSelectValue(undefined);
  }, []);

  const handleExportAllEvents = useCallback(async () => {
    const response = await adminService.getAllEvents();
    return response.items || [];
  }, []);

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
                <FilterToolbar>
                  <GenericSelect
                    theme={theme}
                    values={EVENT_FILTER_OPTIONS}
                    formatLabel={(value) => value.value}
                    onChange={handleChangeSelectData}
                    selected={selectValue}
                  />
                  {filterSelected === "title" && (
                    <InputSearch
                      placeholder={ADMIN_EVENTS_MESSAGES.PAGE_TITLE}
                      onFilter={handleFilterByRoomName}
                      theme={theme}
                      debounceTime={AUDIT_SEARCH_TIMEOUT}
                    />
                  )}
                  {filterSelected === "roomEmail" && (
                    <GenericSelect
                      placeholder={ADMIN_EVENTS_MESSAGES.EVENT_FILTER_PLACEHOLDER}
                      theme={theme}
                      values={roomNamesData}
                      formatLabel={(value) => value.value}
                      onChange={(value) =>
                        setSearch({ key: filterSelected, value: value.id })
                      }
                    />
                  )}
                  {filterSelected && (
                    <Button
                      text={ADMIN_EVENTS_MESSAGES.CLEAN_FILTERS}
                      icon={<Trash size={16} />}
                      variant={ButtonVariant.light}
                      onClick={handlerClearFilters}
                      customStyle={getFilterButtonStyle(theme)}
                    />
                  )}
                </FilterToolbar>
                <ExportButton
                  data={events}
                  fileName={ADMIN_EVENTS_MESSAGES.EXPORT_FILE_NAME}
                  disabled={loading}
                  onClick={handleExportAllEvents}
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
                  events={events as any}
                  onView={(ev) =>
                    setSelectedEvent(ev as unknown as EventListItemDTO)
                  }
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

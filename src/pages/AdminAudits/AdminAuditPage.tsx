import { Trash } from "lucide-react";
import { useCallback, useContext, useMemo, useState } from "react";
import { Button } from "../../components/Button/Button";
import { ButtonVariant } from "../../components/Button/types";
import { GenericSelect } from "../../components/GenericSelect/GenericSelect";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import { ThemeContext } from "../../context/theme/themeContext";
import { adminService } from "../../services/admin/admin.service";
import { roomService } from "../../services/rooms/room.service";
import { BackButton } from "../../shared/components/BackButton/BackButton";
import { ExportButton } from "../../shared/components/ExportButton";
import { FilterToolbar } from "../../shared/components/FilterToolbar/FilterToolbar";
import { getFilterButtonStyle } from "../../shared/components/FilterToolbar/styles";
import Header from "../../shared/components/Header/Header";
import { Pagination } from "../../shared/components/Pagination/Pagination";
import { SideBar } from "../../shared/components/SideBar/SideBar";
import { SidebarBackdrop } from "../../shared/components/SideBar/styles";
import { generateQRsPDF } from "../../shared/utils/qrPdfExport.utils";
import { AuditItem } from "./components/AuditItem";
import {
  ADMIN_AUDIT_MESSAGES,
  AUDIT_ACTION_LABELS,
  AUDIT_FILTER_OPTIONS,
  AUDIT_SEARCH_TIMEOUT
} from "./constants/AdminAudit.constants";
import { useAuditsFetch } from "./hooks/useAuditFetch";
import {
  AdminHeaderWrapper,
  AdminLogsContainer,
  AdminLogsPageWrapper,
  ButtonsAuditContainer,
  EmptyState,
  HeaderContent,
  LoadingContainer,
  LogsGrid,
  MainContent,
  PageHeader,
  PageInner,
  PageTitle,
} from "./styles";
import type { AuditDTO } from "../../services/admin/admin.types";

export const AdminAuditPage = () => {
  const { theme } = useContext(ThemeContext);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [filterSelected, setFilterSelected] = useState<string>("");
  const [selectValue, setSelectValue] = useState<
    | {
      id: string;
      value: string;
    }
    | undefined
  >(undefined);

  const {
    loading,
    audits,
    pagination,
    currentPage,
    handlePageChange,
    setSearch,
    clearFilters,
  } = useAuditsFetch();

  const hasAudits = !loading && audits.length > 0;
  const isEmpty = !loading && audits.length === 0;

  const actionEvents = useMemo(() => {
    return Object.keys(AUDIT_ACTION_LABELS).map((action) => ({
      id: action,
      value: AUDIT_ACTION_LABELS[action],
    }));
  }, []);

  const handleChangeSelectData = useCallback(
    (value: { id: string; value: string }) => {
      if (value) {
        setFilterSelected(value.id);
        setSelectValue(value);
      }
    },
    []
  );

  const handleFilterByDescription = useCallback(
    (text: string) => {
      if (filterSelected) {
        setSearch({ key: filterSelected, value: text });
      }
    },
    [filterSelected]
  );

  const handlerClearFilters = useCallback(() => {
    clearFilters();
    setFilterSelected("");
    setSelectValue(undefined);
  }, []);

  const handleExportAllAudits = useCallback(async () => {
    const response = await adminService.getAllAudits();
    return response.items || [];
  }, []);

  const handleDownloadQRs = useCallback(async () => {
    try {
      const rooms = await roomService.getRooms();
      await generateQRsPDF(rooms);
    } catch (error) {
      console.error("Error downloading QRs:", error);
      alert("No se pudieron descargar los códigos QR");
    }
  }, []);

  return (
    <AdminLogsPageWrapper>
      <SideBar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onDownloadQRs={handleDownloadQRs}
      />
      <SidebarBackdrop
        $isOpen={!isSidebarCollapsed}
        onClick={() => setIsSidebarCollapsed(true)}
      />
      <AdminHeaderWrapper $collapsed={isSidebarCollapsed}>
        <Header />
      </AdminHeaderWrapper>
      <AdminLogsContainer $collapsed={isSidebarCollapsed}>
        <PageInner>
          <BackButton />
          <PageHeader>
            <HeaderContent>
              <PageTitle $theme={theme}>
                {ADMIN_AUDIT_MESSAGES.PAGE_TITLE}
              </PageTitle>
              <ButtonsAuditContainer>
                <FilterToolbar>
                  <GenericSelect
                    theme={theme}
                    values={AUDIT_FILTER_OPTIONS}
                    formatLabel={(value) => value.value}
                    onChange={handleChangeSelectData}
                    selected={selectValue}
                  />
                  {filterSelected === "info" && (
                    <InputSearch
                      placeholder={ADMIN_AUDIT_MESSAGES.ADMIN_FILTER_INPUT_PLACEHOLDER}
                      onFilter={handleFilterByDescription}
                      theme={theme}
                      debounceTime={AUDIT_SEARCH_TIMEOUT}
                    />
                  )}
                  {filterSelected === "action" && (
                    <GenericSelect
                      placeholder={ADMIN_AUDIT_MESSAGES.ADMIN_FILTER_SELECT_PLACEHOLDER}
                      theme={theme}
                      values={actionEvents}
                      formatLabel={(value) => value.value}
                      onChange={(value) =>
                        setSearch({ key: filterSelected, value: value.id })
                      }
                    />
                  )}
                  {filterSelected && (
                    <Button
                      text={ADMIN_AUDIT_MESSAGES.CLEAN_FILTERS}
                      icon={<Trash />}
                      variant={ButtonVariant.light}
                      onClick={handlerClearFilters}
                      customStyle={getFilterButtonStyle(theme)}
                    />
                  )}
                </FilterToolbar>
                <ExportButton
                  data={audits}
                  fileName={ADMIN_AUDIT_MESSAGES.EXPORT_FILE_NAME}
                  disabled={loading}
                  onClick={handleExportAllAudits}
                />
              </ButtonsAuditContainer>
            </HeaderContent>
          </PageHeader>

          <MainContent>
            {loading && (
              <LoadingContainer>
                <p>{ADMIN_AUDIT_MESSAGES.LOADING}</p>
              </LoadingContainer>
            )}

            {isEmpty && (
              <EmptyState>
                <h3>{ADMIN_AUDIT_MESSAGES.EMPTY_TITLE}</h3>
                <p>{ADMIN_AUDIT_MESSAGES.EMPTY_DESCRIPTION}</p>
              </EmptyState>
            )}

            {hasAudits && (
              <LogsGrid $theme={theme}>
                {audits.map((audit: AuditDTO) => (
                  <AuditItem key={audit.id} log={audit} />
                ))}
              </LogsGrid>
            )}

            {hasAudits && pagination.totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
                theme={theme}
                isLoading={loading}
              />
            )}
          </MainContent>
        </PageInner>
      </AdminLogsContainer>
    </AdminLogsPageWrapper>
  );
};

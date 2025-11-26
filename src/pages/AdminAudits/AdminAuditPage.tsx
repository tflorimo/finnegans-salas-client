import { useContext, useState } from "react";
import { BackButton } from "../../shared/components/BackButton/BackButton";
import { FilterToolbar } from "../../shared/components/FilterToolbar/FilterToolbar";
import { ExportButton } from "../../shared/components/ExportButton";
import { Pagination } from "../../shared/components/Pagination/Pagination";
import Header from "../../shared/components/Header/Header";
import { SideBar } from "../../shared/components/SideBar/SideBar";
import { useFilteredEvents } from "../AdminEvents/hooks/useFilteredEvents";
import { AuditItem } from "./components/AuditItem";
import { ThemeContext } from "../../context/theme/themeContext";
import {
  ADMIN_FILTER_PLACEHOLDER,
  ADMIN_AUDIT_MESSAGES,
  EXPORT_FILE_NAME,
} from "./constants/AdminAudit.constants";
import { useAuditsFetch } from "./hooks/useAuditFetch";
import { useAllAuditsFetch } from "./hooks/useAllAuditsFetch";
import {
  AdminHeaderWrapper,
  AdminLogsContainer,
  AdminLogsPageWrapper,
  EmptyState,
  ButtonsAuditContainer,
  HeaderContent,
  LoadingContainer,
  LogsGrid,
  MainContent,
  PageHeader,
  PageInner,
  PageTitle,
} from "./styles";
import { SidebarBackdrop } from "../../shared/components/SideBar/styles";

export const AdminAuditPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { loading, audits, pagination, currentPage, handlePageChange } = useAuditsFetch();
  const { audits: allAudits } = useAllAuditsFetch();
  const { filteredData, onKeywordSelected } = useFilteredEvents(audits as any);

  const hasAudits = !loading && filteredData.length > 0;
  const isEmpty = !loading && filteredData.length === 0;

  const { theme } = useContext(ThemeContext);

  return (
    <AdminLogsPageWrapper>
      <SideBar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
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
                <FilterToolbar
                  placeholder={ADMIN_FILTER_PLACEHOLDER}
                  onKeywordSelected={onKeywordSelected}
                />
                <ExportButton
                  data={allAudits}
                  fileName={EXPORT_FILE_NAME}
                  disabled={loading || allAudits.length === 0}
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
                {(filteredData as any[]).map((audit: any) => (
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

import { Download } from 'lucide-react';
import { useState } from 'react';
import type { LogDTO } from '../../services/admin/logs/types';
import { BackButton } from '../../shared/components/BackButton/BackButton';
import { FilterToolbar } from '../../shared/components/FilterToolbar/FilterToolbar';
import Header from '../../shared/components/Header/Header';
import { SideBar } from '../../shared/components/SideBar/SideBar';
import { useFilteredEvents } from '../AdminEvents/hooks/useFilteredEvents';
import { LogItem } from './components/LogItem';
import { ADMIN_FILTER_PLACEHOLDER, ADMIN_LOGS_MESSAGES } from './constants/AdminLogs.constants';
import { useLogsFetch } from './hooks/useLogsFetch';
import {
  AdminHeaderWrapper,
  AdminLogsContainer,
  AdminLogsPageWrapper,
  EmptyState,
  ExportButton,
  FilterLogsContainer,
  HeaderContent,
  LoadingContainer,
  LogsGrid,
  MainContent,
  PageHeader,
  PageInner,
  PageTitle
} from './styles';

export const AdminLogsPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { loading, logs } = useLogsFetch();
  const { filteredData, onKeywordSelected } = useFilteredEvents<LogDTO>(logs);

  const hasLogs = !loading && filteredData.length > 0;
  const isEmpty = !loading && filteredData.length === 0;

  return (
    <AdminLogsPageWrapper>
      <SideBar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <AdminHeaderWrapper $collapsed={isSidebarCollapsed}>
        <Header />
      </AdminHeaderWrapper>
      <AdminLogsContainer $collapsed={isSidebarCollapsed}>
        <PageInner>
          <BackButton />
          <PageHeader>
            <HeaderContent>
              <PageTitle>{ADMIN_LOGS_MESSAGES.PAGE_TITLE}</PageTitle>
              <FilterLogsContainer>
                <FilterToolbar placeholder={ADMIN_FILTER_PLACEHOLDER} onKeywordSelected={onKeywordSelected} />
                <ExportButton onClick={() => { }}>
                  <Download />
                  {ADMIN_LOGS_MESSAGES.EXPORT_BUTTON}
                </ExportButton>
              </FilterLogsContainer>
            </HeaderContent>
          </PageHeader>

          <MainContent>
            {loading && (
              <LoadingContainer>
                <p>{ADMIN_LOGS_MESSAGES.LOADING}</p>
              </LoadingContainer>
            )}

            {isEmpty && (
              <EmptyState>
                <h3>{ADMIN_LOGS_MESSAGES.EMPTY_TITLE}</h3>
                <p>{ADMIN_LOGS_MESSAGES.EMPTY_DESCRIPTION}</p>
              </EmptyState>
            )}

            {hasLogs && (
              <LogsGrid>
                {filteredData.map((log) => (
                  <LogItem key={log.id} log={log} />
                ))}
              </LogsGrid>
            )}
          </MainContent>
        </PageInner>
      </AdminLogsContainer>
    </AdminLogsPageWrapper>
  );
};
import { useContext, useState } from 'react';
import type { LogDTO } from '../../services/admin/logs/types';
import { BackButton } from '../../shared/components/BackButton/BackButton';
import { FilterToolbar } from '../../shared/components/FilterToolbar/FilterToolbar';
import { ExportButton } from '../../shared/components/ExportButton';
import Header from '../../shared/components/Header/Header';
import { SideBar } from '../../shared/components/SideBar/SideBar';
import { useFilteredEvents } from '../AdminEvents/hooks/useFilteredEvents';
import { LogItem } from './components/LogItem';
import { ThemeContext } from '../../context/theme/themeContext';
import { ADMIN_FILTER_PLACEHOLDER, ADMIN_LOGS_MESSAGES, EXPORT_FILE_NAME } from './constants/AdminLogs.constants';
import { useLogsFetch } from './hooks/useLogsFetch';
import {
  AdminHeaderWrapper,
  AdminLogsContainer,
  AdminLogsPageWrapper,
  EmptyState,
  ButtonsLogsContainer,
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

  const {theme} = useContext(ThemeContext);

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
              <PageTitle $theme={theme}>{ADMIN_LOGS_MESSAGES.PAGE_TITLE}</PageTitle>
              <ButtonsLogsContainer>
                <FilterToolbar placeholder={ADMIN_FILTER_PLACEHOLDER} onKeywordSelected={onKeywordSelected} />
                <ExportButton data={logs} fileName={EXPORT_FILE_NAME} disabled={loading || logs.length === 0} />
              </ButtonsLogsContainer>
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
              <LogsGrid $theme={theme}>
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
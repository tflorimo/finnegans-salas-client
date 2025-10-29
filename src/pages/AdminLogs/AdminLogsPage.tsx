import { useState } from 'react';
import { Download } from 'lucide-react';
import { SideBar } from '../../shared/components/SideBar/SideBar';
import Header from '../../shared/components/Header/Header';
import { BackButton } from '../../shared/components/BackButton/BackButton';
import { useLogsFetch } from './hooks/useLogsFetch';
import { LogItem } from './components/LogItem';
import { ADMIN_LOGS_MESSAGES } from './constants/AdminLogs.constants';
import {
  AdminLogsPageWrapper,
  AdminHeaderWrapper,
  AdminLogsContainer,
  PageInner,
  PageHeader,
  HeaderContent,
  PageTitle,
  ExportButton,
  MainContent,
  LogsGrid,
  LoadingContainer,
  EmptyState
} from './styles';

export const AdminLogsPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { loading, logs } = useLogsFetch();

  const hasLogs = !loading && logs.length > 0;
  const isEmpty = !loading && logs.length === 0;

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
              <ExportButton onClick={() => {}}>
                <Download />
                {ADMIN_LOGS_MESSAGES.EXPORT_BUTTON}
              </ExportButton>
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
                {logs.map((log) => (
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
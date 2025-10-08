import { useState, useEffect } from 'react';
import { css } from 'styled-components';
import { Download } from 'lucide-react';
import { SideBar } from '../../shared/components/SideBar/SideBar';
import { CardContainer } from '../../components/CardContainer/CardContainer';
import { Tag } from '../../components/Tag/Tag';
import { adminService } from '../../services/admin/adminService';
import type { LogDTO } from '../../services/admin/logs/types';
import {
  AdminLogsPageWrapper,
  AdminLogsContainer,
  PageInner,
  PageHeader,
  HeaderContent,
  PageTitle,
  ExportButton,
  MainContent,
  LogsGrid,
  LogHeader,
  TagContainer,
  LogInfo,
  LogTitle,
  LogUser,
  LogTimestamp,
  LoadingContainer,
  EmptyState
} from './stylesAdminLogs';

export const AdminLogs = () => {
  const [logs, setLogs] = useState<LogDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const loadLogs = async () => {
      try {
        setLoading(true);
        const data = await adminService.getLogs();
        setLogs(data);
      } catch (err) {
        console.error('Error al cargar los logs:', err);
      } finally {
        setLoading(false);
      }
    };

    loadLogs();
  }, []);

  const formatTimestamp = (timestamp: string) => 
    new Date(timestamp).toLocaleString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

  const getTagType = (status: string) => 
    (status === 'warning' || status === 'error') ? 'danger' : status as 'success' | 'info' | 'danger';

  const hasLogs = !loading && logs.length > 0;
  const isEmpty = !loading && logs.length === 0;

  return (
    <AdminLogsPageWrapper>
      <SideBar 
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <AdminLogsContainer $collapsed={isSidebarCollapsed}>
        <PageInner>
          <PageHeader>
            <HeaderContent>
              <PageTitle>Logs del Sistema</PageTitle>
              <ExportButton onClick={() => { }}>
                <Download />
                Exportar Logs
              </ExportButton>
            </HeaderContent>
          </PageHeader>

          <MainContent>
            {loading && (
              <LoadingContainer>
                <p>Cargando logs del sistema...</p>
              </LoadingContainer>
            )}
            
            {isEmpty && (
              <EmptyState>
                <h3>No hay logs disponibles</h3>
                <p>No se encontraron registros de actividad en el sistema.</p>
              </EmptyState>
            )}

            {hasLogs && (
              <LogsGrid>
                {logs.map((log) => (
                  <CardContainer
                    key={log.id}
                    customStyle={css`
                      padding: 16px 20px;
                      align-items: stretch;
                    `}
                  >
                    <LogHeader>
                      <TagContainer>
                        <Tag
                          text={log.status.toUpperCase()}
                          type={getTagType(log.status)}
                        />
                      </TagContainer>
                      <LogInfo>
                        <LogTitle>{log.action}</LogTitle>
                        <LogUser>
                          {log.userName ? `por ${log.userName}` : 'Sistema'}
                          {log.roomName && ` • ${log.roomName}`}
                        </LogUser>
                      </LogInfo>
                      <LogTimestamp>
                        {formatTimestamp(log.timestamp)}
                      </LogTimestamp>
                    </LogHeader>
                  </CardContainer>
                ))}
              </LogsGrid>
            )}
          </MainContent>
        </PageInner>
      </AdminLogsContainer>
    </AdminLogsPageWrapper>
  );
};
import styled, { css } from 'styled-components';
import { SIDEBAR_WIDTH, SIDEBAR_COLLAPSED_WIDTH } from '../../shared/components/SideBar/styles';

export const AdminLogsPageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

export const AdminHeaderWrapper = styled.div<{ $collapsed: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ $collapsed }) =>
    `${$collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}px`};
  right: 0;
  width: ${({ $collapsed }) =>
    `calc(100% - ${
      $collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH
    }px)`};
  z-index: 100;
  transition: left 0.25s ease, width 0.25s ease;

  @media (max-width: 768px) {
    left: 0;
    width: 100%;
  }
`;

export const AdminLogsContainer = styled.div<{ $collapsed: boolean }>`
  flex: 1;
  max-width: ${({ $collapsed }) =>
    `calc(100vw - ${
      $collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH
    }px)`};
  margin-left: ${({ $collapsed }) =>
    `${$collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}px`};
  margin-top: 0;
  padding: 16px 56px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: margin-left 0.25s ease, max-width 0.25s ease;

  @media (max-width: 1200px) {
    padding: 16px 32px 32px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 100vw;
    padding: 16px 16px;
  }
`;

export const PageInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PageHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 750;
  color: #111827;
  margin: -20px 0 0 0;
  line-height: 1.2;
`;

export const ExportButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  color: #374151;
  font-size: 0.800rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f9fafb;
    border-color: #9ca3af;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LogsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const LogHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  min-width: 80px;
  
  button {
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 6px;
    min-height: auto;
  }
`;

export const LogInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 8px;
`;

export const LogTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  line-height: 1.5;
`;

export const LogUser = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
`;

export const LogTimestamp = styled.span`
  font-size: 12px;
  color: #9ca3af;
  font-weight: 500;
  white-space: nowrap;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  color: #64748b;
  font-size: 16px;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  text-align: center;
  color: #64748b;
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: #475569;
  }
  
  p {
    font-size: 14px;
    margin: 0;
  }
`;

export const LogItemCardStyle = css`
  padding: 16px 20px;
  align-items: stretch;
`;

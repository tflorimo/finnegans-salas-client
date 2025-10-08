import styled from "styled-components";
import { SIDEBAR_WIDTH, SIDEBAR_COLLAPSED_WIDTH } from "../../shared/components/SideBar/styles";

export const AdminLogsPageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #f1f5f9;
`;

export const AdminLogsContainer = styled.div<{ $collapsed: boolean }>`
  flex: none;
  width: ${({ $collapsed }) => 
    `calc(100vw - ${$collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}px)`};
  margin-left: ${({ $collapsed }) => 
    `${$collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}px`};
  padding: 48px 64px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 32px;
  transition: margin-left 0.25s ease, width 0.25s ease;

  @media (max-width: 1200px) {
    padding: 40px 32px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100vw;
    padding: 32px 20px;
  }
`;

export const PageInner = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const PageHeader = styled.header`
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 750;
  color: #111827;
  margin-top: -25px;
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
  margin-top: -35px;
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
  gap: 0.75rem;
  width: 100%;
`;

export const LogHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0;
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  min-width: 80px;
  
  /* Hacer los tags más pequeños */
  button {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    border-radius: 0.375rem;
    min-height: auto;
  }
`;

export const LogInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-left: 0.5rem;
`;

export const LogTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
  line-height: 1.25;
`;

export const LogUser = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.25;
`;

export const LogTimestamp = styled.span`
  font-size: 0.75rem;
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
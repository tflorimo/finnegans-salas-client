import styled from "styled-components";
import {
  SIDEBAR_WIDTH,
  SIDEBAR_COLLAPSED_WIDTH,
} from "../../shared/components/SideBar/styles";

export const AdminEventsPageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #f6f7f9;
`;

export const AdminEventsContainer = styled.div<{ $collapsed: boolean }>`
  flex: none;
  width: ${({ $collapsed }) =>
    `calc(100vw - ${$collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}px)`};
  margin-left: ${({ $collapsed }) =>
    `${$collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}px`};
  padding: 40px 56px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: margin-left 0.25s ease, width 0.25s ease;

  @media (max-width: 1200px) { padding: 32px; }
  @media (max-width: 768px)  {
    margin-left: 0;
    width: 100vw;
    padding: 24px 16px;
  }
`;

export const PageInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PageHeader = styled.header`
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  color: #0f172a;
`;

export const Toolbar = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  thead th {
    text-align: left;
    color: #64748b;
    font-weight: 600;
    padding: 14px 16px;
    border-bottom: 1px solid #eef2f7;
    background: #fafbfd;
  }

  tbody td {
    padding: 14px 16px;
    border-bottom: 1px solid #f1f5f9;
    color: #0f172a;
    vertical-align: middle;
  }

  tbody tr:hover { background: #fbfdff; }
  tbody tr:last-child td { border-bottom: none; }
`;

export const IconBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  margin-right: 6px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: #fff;
  color: #0f172a;
  cursor: pointer;

  &:hover { background: #f8fafc; }
  &:last-child { margin-right: 0; }
`;

export const EmptyState = styled.div`
  padding: 24px;
  text-align: center;
  color: #64748b;

  h3 {
    margin: 0 0 6px 0;
    font-size: 16px;
    color: #475569;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
`;
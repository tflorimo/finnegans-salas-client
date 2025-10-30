import styled, { css } from "styled-components";
import { SIDEBAR_WIDTH, SIDEBAR_COLLAPSED_WIDTH } from "../../shared/components/SideBar/styles";

export const AdminEventsPageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const AdminHeaderWrapper = styled.div<{ $collapsed: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ $collapsed }) =>
    `${$collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}px`};
  right: 0;
  width: ${({ $collapsed }) =>
    `calc(100% - ${$collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}px)`};
  z-index: 100;
  transition: left 0.25s ease, width 0.25s ease;

  @media (max-width: 768px) {
    left: 0;
    width: 100%;
  }
`;

export const AdminEventsContainer = styled.div<{ $collapsed: boolean }>`
  flex: none;
  width: ${({ $collapsed }) =>
    `calc(100vw - ${$collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}px)`};
  margin-left: ${({ $collapsed }) =>
    `${$collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}px`};
  margin-top: 0;
  padding: 16px 56px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: margin-left 0.25s ease, width 0.25s ease;

  @media (max-width: 1200px) {
    padding: 16px 32px 32px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100vw;
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
  margin: -8px 0 0 0;
  line-height: 1.2;
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

  tbody tr:hover {
    background: #fbfdff;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }
`;

export const IconBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  margin-right: 10px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: #fff;
  color: #0f172a;
  cursor: pointer;
  &:hover { background: #f8fafc; }
  &:last-child { margin-right: 0; }
  margin-left: 10px;
`;

export const EmptyState = styled.div`
  padding: 24px;
  text-align: center;
  color: #64748b;
  h3 { margin: 0 0 6px 0; font-size: 16px; color: #475569; }
  p { margin: 0; font-size: 14px; }
`;

export const filterButtonStyle = css`
  height: 40px;
  padding: 0 14px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  background: #fff;
  color: #0f172a;
  &:hover { background: #f8fafc; }
`;

export const tableCardStyle = css`
  padding: 0;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;
  align-items: stretch;
  justify-content: flex-start;
`;

export const attendeesTagStyle = css`
  min-width: 28px;
  height: 28px;
  padding: 0 8px;
  font-weight: 700;
  font-size: 12px;
`;

// EventDetailsModal styles
// TODO: Centrar información de manera correcta
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  text-align: center;
`;

export const ModalBody = styled.div`
  width: 640px;
  max-width: 95vw;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 16px 20px 0;
  text-align: center;
  margin-left: 30px;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
  }
`;

export const CloseBtn = styled.button`
  position: relative;
  right: -210px;
  top: -25px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 6px;
  border-radius: 8px;
  transition: background 0.2s ease;
  color: #000; 

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  svg {
    stroke: currentColor; 
  }
`;


export const Field = styled.div`
  margin: 8px 20px;

  label {
    display: block;
    font-size: 0.8rem;
    color: #6b7280;
    margin-bottom: 4px;
  }

  div {
    font-size: 0.95rem;
    color: #111827;
  }
`;

export const AttendeeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0 12px 0;
  text-align: right;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 20px;
    border-bottom: 1px solid #eef2f7;
    color: #111827; 
    background-color: #ffffff; 
  }
`;


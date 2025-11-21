import styled, { css } from "styled-components";
import { SIDEBAR_WIDTH, SIDEBAR_COLLAPSED_WIDTH } from "../../shared/components/SideBar/styles";
import type { ThemeType } from '../../theme/Types';
import { themes } from '../../theme/Theme';

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
  padding: 10px 56px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: margin-left 0.25s ease, width 0.25s ease;

  @media (max-width: 1200px) {
    padding: 10px 32px 32px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100vw;
    padding: 5px 16px 10px;
  }
`;

export const PageInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PageHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

export const HeaderContent = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: stretch;
  margin: 0.375rem 0 0 0;
`;

export const ButtonsEventsContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const PageTitle = styled.h1<{ $theme: ThemeType }>`
  font-size: 1.5rem;
  font-weight: 750;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  margin: 0;
  line-height: 1.2;
`;

export const Toolbar = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

export const Table = styled.table<{ $theme: ThemeType }>`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  
  thead th {
    text-align: left;
    color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
    font-weight: 600;
    padding: 14px 16px;
    border-bottom: 1px solid ${({ $theme }) => themes[$theme].BACKGROUND_COLOR};
    background: ${({ $theme }) => themes[$theme].BACKGROUND_COLOR};
  }

  tbody td {
    padding: 14px 16px;
    border-bottom: 1px solid ${({ $theme }) => themes[$theme].BACKGROUND_COLOR};
    color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
    vertical-align: middle;
  }

  /*
  tbody tr:hover {
    background: #fbfdff;
  } */

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

export const tableCardStyle = css<{ $theme: ThemeType }>`
  padding: 0;
  border: 1px solid ${({ $theme }) => themes[$theme].BACKGROUND_COLOR};
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

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  padding: 32px;
  background: rgba(15, 23, 42, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const ModalBody = styled.div`
  width: 640px;
  max-width: 100%;
  max-height: calc(100vh - 64px);
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.16);
  display: flex;
  flex-direction: column;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(148, 163, 184, 0.5);
    border-radius: 999px;
  }
`;

export const ModalCardStyle = css`
  width: 100%;
  padding: 32px 36px 36px;
  box-sizing: border-box;
  border: none;
  box-shadow: none;
  align-items: stretch;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 24px 20px 28px;
  }
`;

export const ModalHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  h3 {
    margin: 0;
    font-size: 1.35rem;
    font-weight: 600;
    color: #111827;
    text-align: center;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 6px;
  border-radius: 8px;
  color: #0f172a;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(15, 23, 42, 0.08);
  }

  svg {
    stroke: currentColor;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
`;

export const Field = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;

  label {
    font-size: 0.75rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  div {
    font-size: 1rem;
    color: #111827;
    word-break: break-word;
  }
`;

export const AttendeeList = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    padding: 12px 18px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    color: #111827;
  }
`;



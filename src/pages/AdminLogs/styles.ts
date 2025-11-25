import styled, { css } from "styled-components";
import {
  SIDEBAR_WIDTH,
  SIDEBAR_COLLAPSED_WIDTH,
} from "../../shared/components/SideBar/styles";
import type { ThemeType } from "../../theme/Types";
import { themes } from "../../theme/Theme";
import { media } from "../../shared/styles/media";

// Color Constants
const COLOR_GRAY_MEDIUM = "#9ca3af";
const COLOR_GRAY_TEXT = "#64748b";
const COLOR_GRAY_DARK_TEXT = "#475569";
const COLOR_BORDER_LIGHT = "#e2e8f0";
const COLOR_BG_DARK = "#374151";
const COLOR_BG_LIGHT = "#fff";
const COLOR_WHITE = "#ffffff";
const COLOR_TEXT_DARK = "#0f172a";
const COLOR_HOVER_DARK = "#4b5563";
const COLOR_HOVER_LIGHT = "#f8fafc";

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
    `calc(100% - ${$collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}px)`};
  z-index: 100;
  transition: left 0.25s ease, width 0.25s ease;

  ${media.md} {
    left: ${({ $collapsed }) =>
      $collapsed ? `${SIDEBAR_COLLAPSED_WIDTH}px` : "0"};
    width: ${({ $collapsed }) =>
      $collapsed
        ? `calc(100vw - ${SIDEBAR_COLLAPSED_WIDTH}px)`
        : "100vw"};
  }
`;

export const AdminLogsContainer = styled.div<{ $collapsed: boolean }>`
  flex: none;
  width: ${({ $collapsed }) =>
    `calc(100vw - ${$collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}px)`};
  margin-left: ${({ $collapsed }) =>
    `${$collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}px`};
  margin-top: 0;
  padding: 10px 56px 40px 56px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: margin-left 0.25s ease, width 0.25s ease;
  overflow-x: hidden;

  ${media.xl} {
    padding: 10px 32px 32px 32px;
  }

  ${media.md} {
    margin-left: ${({ $collapsed }) =>
      $collapsed ? `${SIDEBAR_COLLAPSED_WIDTH}px` : "0"};
    width: ${({ $collapsed }) =>
      $collapsed
        ? `calc(100% - ${SIDEBAR_COLLAPSED_WIDTH}px)`
        : "100%"};
    padding: 5px 16px 10px 16px;
  }
`;

export const PageInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
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

export const PageTitle = styled.h1<{ $theme: ThemeType }>`
  font-size: 1.5rem;
  font-weight: 750;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  margin: 0;
  line-height: 1.2;
`;

export const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LogsGrid = styled.div<{ $theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 100%;
  background-color: ${({ $theme }) => themes[$theme].BACKGROUND_COLOR};
  overflow-x: hidden;
`;

export const LogHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: calc(100vw - 400px);

  ${media.xl} {
    max-width: calc(100vw - 200px);
  }

  ${media.md} {
    max-width: calc(100vw - 80px);
  }

  ${media.sm} {
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;
  }
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
  min-width: 0;
  overflow: hidden;
`;

export const LogTitle = styled.h3<{ $theme: ThemeType }>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  margin: 0;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${media.md} {
    font-size: 14px;
    white-space: normal;
    text-overflow: clip;
  }
`;

export const LogUser = styled.p<{ $theme: ThemeType }>`
  font-size: 14px;
  font-weight: 400;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  margin: 0;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${media.md} {
    white-space: normal;
    text-overflow: clip;
  }
`;

export const LogTimestamp = styled.span`
  font-size: 12px;
  color: ${COLOR_GRAY_MEDIUM};
  font-weight: 500;
  white-space: nowrap;
  min-width: fit-content;

  ${media.md} {
    white-space: normal;
    text-align: right;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  color: ${COLOR_GRAY_TEXT};
  font-size: 16px;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  text-align: center;
  color: ${COLOR_GRAY_TEXT};
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: ${COLOR_GRAY_DARK_TEXT};
  }  p {
    font-size: 14px;
    margin: 0;
  }
`;

export const ButtonsLogsContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  ${media.md} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;

    & > * {
      width: 100%;
      max-width: 360px;
    }

    & > :last-child {
      margin-top: 0.25rem;
    }
  }
`;

export const filterButtonStyle = css<{ $theme: ThemeType }>`
  height: 40px;
  padding: 0 14px;
  border: 1px solid
    ${({ $theme }) => ($theme === "dark" ? COLOR_GRAY_MEDIUM : COLOR_BORDER_LIGHT)};
  border-radius: 10px;
  background: ${({ $theme }) => ($theme === "dark" ? COLOR_BG_DARK : COLOR_BG_LIGHT)};
  color: ${({ $theme }) => ($theme === "dark" ? COLOR_WHITE : COLOR_TEXT_DARK)};
  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  &:hover {
    background: ${({ $theme }) => ($theme === "dark" ? COLOR_HOVER_DARK : COLOR_HOVER_LIGHT)};
  }
`;

export const LogItemCardStyle = css`
  padding: 16px 20px;
  align-items: stretch;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

import styled, { css } from "styled-components";
import type { ThemeType } from "../../../theme/Types";
import { themes } from "../../../theme/Theme";

export const SIDEBAR_WIDTH = 240;
export const SIDEBAR_COLLAPSED_WIDTH = 80;

const SIDEBAR_BG_LIGHT = "#f0f4f8";
const SIDEBAR_BG_DARK = "#000000";

export const getBaseButtonStyles = (isActive: boolean, theme: ThemeType, isCollapsed: boolean) => css`
  width: 100%;
  justify-content: ${isCollapsed ? "center" : "flex-start"};
  align-items: center;
  gap: ${isCollapsed ? "0" : "12px"};
  padding: 12px ${isCollapsed ? "0" : "16px"};
  border-radius: 12px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  box-shadow: none;
  text-align: ${isCollapsed ? "center" : "left"};
  white-space: nowrap;
  overflow: hidden;
  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  svg {
    color: inherit;
  }
  ${isActive 
    ? css`
        background-color: ${theme === "dark" ? "#374151" : "#007bff"};
        color: #ffffff;
        border: 1px solid ${themes[theme].BORDER_COLOR};
        &:hover {
          background-color: ${theme === "dark" ? "#4b5563" : "#1d4ed8"};
        }
      `
    : css`
        background-color: ${theme === "dark" ? "#1f2937" : "#ffffff"};
        color: ${theme === "dark" ? "#ffffff" : "#343a40"};
        border: 1px solid transparent;
        &:hover {
          background-color: ${theme === "dark" ? "#374151" : "#d1d5db"};
        }
      `
  }
`;

export const SideBarContainer = styled.aside<{ $theme: ThemeType, $collapsed: boolean }>`
  width: ${({ $collapsed }) => ($collapsed ? `${SIDEBAR_COLLAPSED_WIDTH}px` : `${SIDEBAR_WIDTH}px`)};
  min-height: 100vh;
  background: ${({ $theme }) => ($theme === "light" ? SIDEBAR_BG_LIGHT : SIDEBAR_BG_DARK)};
  border-right: 1px solid ${({ $theme }) => themes[$theme].BORDER_COLOR};
  padding: 24px 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  transition: width 0.25s ease, background 0.3s ease;
  overflow: hidden;
`;

export const ToggleButton = styled.button<{ $collapsed: boolean, $theme: ThemeType }>`
  position: ${({ $collapsed }) => ($collapsed ? "static" : "absolute")};
  top: ${({ $collapsed }) => ($collapsed ? "auto" : "16px")};
  right: ${({ $collapsed }) => ($collapsed ? "auto" : "16px")};
  width: 32px;
  height: 32px;
  border: none;
  background: ${({ $theme }) => ($theme === "light" ? "#ffffff" : "#1f2937")};
  color: ${({ $theme }) => ($theme === "light" ? "#64748b" : "#9ca3af")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  z-index: ${({ $collapsed }) => ($collapsed ? "auto" : "10")};
  margin: ${({ $collapsed }) => ($collapsed ? "0 auto" : "0")};
  
  &:hover {
    background: ${({ $theme }) => ($theme === "light" ? "#f1f5f9" : "#374151")};
    color: ${({ $theme }) => ($theme === "light" ? "#475569" : "#d1d5db")};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const SideBarHeader = styled.div<{ $collapsed: boolean, $theme: ThemeType }>`
  padding: ${({ $collapsed }) => ($collapsed ? "0 12px 24px" : "0 24px 24px")};
  border-bottom: 1px solid ${({ $theme }) => themes[$theme].BORDER_COLOR};
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: ${({ $collapsed }) => ($collapsed ? "center" : "flex-start")};
  transition: padding 0.25s ease;
`;

export const SideBarTitle = styled.h2<{ $theme: ThemeType }>`
  font-size: 16px;
  font-weight: 700;
  color: ${({ $theme }) => ($theme === "light" ? "#0F172A" : "#ffffff")};
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SideBarSubtitle = styled.p<{ $theme: ThemeType }>`
  font-size: 12px;
  color: ${({ $theme }) => ($theme === "light" ? "#0F172A" : "#9ca3af")};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SideBarNav = styled.nav<{ $collapsed: boolean }>`
  flex: 1;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
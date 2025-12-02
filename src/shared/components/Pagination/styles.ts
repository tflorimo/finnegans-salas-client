import styled from 'styled-components';

import { themes } from '../../../theme/Theme';
import type { ThemeType } from '../../../theme/Types';

const COLOR_BORDER_LIGHT = "#e2e8f0";
const COLOR_BG_DARK = "#374151";
const COLOR_HOVER_LIGHT = "#f8fafc";
const COLOR_HOVER_DARK = "#4b5563";
const COLOR_BORDER_DARK = "#4b5563";
const COLOR_BORDER_HOVER_DARK = "#6b7280";
const COLOR_BORDER_HOVER_LIGHT = "#cbd5e1";
const COLOR_BG_ACTIVE_DARK = "#1e3a8a";
const COLOR_BG_ACTIVE_LIGHT = "#3b82f6";
const COLOR_TEXT_BUTTON_DARK = "#e2e8f0";
const COLOR_TEXT_DARK = "#0f172a";
const COLOR_WHITE = "#ffffff";

export const PaginationContainer = styled.div<{ $theme: ThemeType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 24px 0;
  margin-top: 24px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    gap: 8px;
    padding: 16px 8px;
    margin-top: 16px;
  }
`;

export const PageButton = styled.button<{ $active?: boolean; $theme: ThemeType }>`
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid ${({ $theme }) => ($theme === "dark" ? COLOR_BORDER_DARK : COLOR_BORDER_LIGHT)};
  background: ${({ $active, $theme }) =>
    $active
      ? ($theme === "dark" ? COLOR_BG_ACTIVE_DARK : COLOR_BG_ACTIVE_LIGHT)
      : ($theme === "dark" ? COLOR_BG_DARK : COLOR_HOVER_LIGHT)};
  color: ${({ $active, $theme }) =>
    $active
      ? COLOR_WHITE
      : $theme === "dark"
        ? COLOR_TEXT_BUTTON_DARK
        : COLOR_TEXT_DARK};
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-weight: ${({ $active }) => ($active ? "600" : "500")};
  transition: all 0.2s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover:not(:disabled) {
    background: ${({ $theme }) =>
    $theme === "dark" ? COLOR_HOVER_DARK : COLOR_HOVER_LIGHT};
    border-color: ${({ $theme }) =>
    $theme === "dark" ? COLOR_BORDER_HOVER_DARK : COLOR_BORDER_HOVER_LIGHT};
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 640px) {
    min-width: 36px;
    height: 36px;
    padding: 0 10px;
    font-size: 13px;
  }
`;

export const PageInfo = styled.span<{ $theme: ThemeType }>`
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 640px) {
    font-size: 12px;
    width: 100%;
    text-align: center;
    order: 1;
    margin-top: 8px;
  }
`;

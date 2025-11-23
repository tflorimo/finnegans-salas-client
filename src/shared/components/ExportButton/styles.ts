import styled, { css } from "styled-components";
import type { ThemeType } from "../../../theme/Types";
import { themes } from "../../../theme/Theme";

export const EXPORT_BUTTON_STYLE = (disabled: boolean, theme: ThemeType) => css`
  height: 40px;
  padding: 0 14px;
  border: 1px solid ${themes[theme].BORDER_COLOR};
  border-radius: 10px;
  background: ${theme === "dark" ? "#374151" : "#fff"};
  color: ${theme === "dark" ? "#ffffff" : "#0f172a"};
  gap: 0.5rem;
  margin-top: -15px;
  opacity: ${disabled ? 0.5 : 1};
  cursor: ${disabled ? "not-allowed" : "pointer"};
  pointer-events: ${disabled ? "none" : "auto"};
  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${disabled ? (theme === "dark" ? "#374151" : "#fff") : (theme === "dark" ? "#4b5563" : "#f8fafc")};
  }
`;

export const ModalOverlay = styled.div<{ $theme: ThemeType }>`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div<{ $theme: ThemeType }>`
  background: ${({ $theme }) => themes[$theme].CONTAINER_COLOR};
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;
`;

export const ModalTitle = styled.h3<{ $theme: ThemeType }>`
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  transition: color 0.3s ease;
`;

export const ModalButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ModalButton = styled.button<{ $theme: ThemeType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  background: ${({ $theme }) => $theme === "dark" ? "#1f2937" : "#fff"};
  border: 1px solid ${({ $theme }) => themes[$theme].BORDER_COLOR};
  border-radius: 8px;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ $theme }) => $theme === "dark" ? "#374151" : "#f8fafc"};
    border-color: ${({ $theme }) => $theme === "dark" ? "#9ca3af" : "#cbd5e1"};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const CancelButton = styled(ModalButton)<{ $theme: ThemeType }>`
  background: ${({ $theme }) => $theme === "dark" ? "#374151" : "#f1f5f9"};
  border-color: ${({ $theme }) => themes[$theme].BORDER_COLOR};
  
  &:hover {
    background: ${({ $theme }) => $theme === "dark" ? "#4b5563" : "#e2e8f0"};
  }
`;

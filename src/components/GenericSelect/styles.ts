import styled from "styled-components";

import { BLACK_COLOR } from "../../assets/colors/global-colors";
import type { ThemeType } from "../../theme/Types";
import { INPUT_COLORS } from "./types";

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelect = styled.select<{ $theme?: ThemeType }>`
  width: 100%;
  padding: 10px 36px 10px 12px;
  font-size: 14px;
  color: ${({ $theme }) => $theme === "dark" ? "#ffffff" : BLACK_COLOR};
  border: 1px solid ${({ $theme }) => $theme === "dark" ? "#9ca3af" : INPUT_COLORS.boder};
  border-radius: 8px;
  background-color: ${({ $theme }) => $theme === "dark" ? "#374151" : "white"};
  appearance: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  &:hover {
    border-color: ${({ $theme }) => $theme === "dark" ? "#d1d5db" : INPUT_COLORS.borderHover};
  }
  &:focus {
    border-color: ${INPUT_COLORS.borderFocus};
    box-shadow: 0 0 0 2px ${INPUT_COLORS.boxShadowFocus};
  }
  option {
    background-color: ${({ $theme }) => $theme === "dark" ? "#374151" : "white"};
    color: ${({ $theme }) => $theme === "dark" ? "#ffffff" : BLACK_COLOR};
  }
`;

export const ArrowIcon = styled.span<{ $theme?: ThemeType }>`
  position: absolute;
  top: 60%;
  right: 12px;
  transform: translateY(-60%);
  pointer-events: none;
  font-size: 18px;
  color: ${({ $theme }) => $theme === "dark" ? "#ffffff" : INPUT_COLORS.arrowColor};
  transition: color 0.3s ease;
`;

export const SelectLabel = styled.span<{ $theme?: ThemeType }>`
  font-size: 14px;
  color: ${({ $theme }) => $theme === "dark" ? "#ffffff" : BLACK_COLOR};
`

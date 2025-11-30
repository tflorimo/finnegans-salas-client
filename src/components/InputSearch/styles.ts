import styled from "styled-components";

import { SECONDARY_COLOR, WHITE_COLOR } from "../../assets/colors/global-colors";
import type { ThemeType } from "../../theme/Types";

const COLOR_WHITE = "#ffffff";
const COLOR_DARK_BG = "#374151";
const COLOR_GRAY_BORDER = "#9ca3af";
const COLOR_GRAY_LIGHT_BORDER = "#dcdcdc";
const COLOR_GRAY_HOVER_BORDER = "#c7c7c7";
const COLOR_BLUE_FOCUS = "#1a73e8";
const COLOR_BLUE_SHADOW = "rgba(26, 115, 232, 0.2)";
const COLOR_TEXT_DARK = "#374151";
const COLOR_PLACEHOLDER = "#9ca3af";
const COLOR_PLACEHOLDER_DARK = "#d1d5db";

const INPUT_SEARCH_COLORS = {
  boder: COLOR_GRAY_LIGHT_BORDER,
  borderHover: COLOR_GRAY_HOVER_BORDER,
  borderFocus: COLOR_BLUE_FOCUS,
  boxShadowFocus: COLOR_BLUE_SHADOW,
  textColor: COLOR_TEXT_DARK,
  containerColor: SECONDARY_COLOR,
  placeholderColor: COLOR_PLACEHOLDER
};

export const FormContainer = styled.form`
  width: 100%;
`

export const InputContainer = styled.div<{ $theme?: ThemeType }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ $theme }) => $theme === "dark" ? COLOR_WHITE : INPUT_SEARCH_COLORS.containerColor};
  background-color: ${({ $theme }) => $theme === "dark" ? COLOR_DARK_BG : WHITE_COLOR};
  border: 1px solid ${({ $theme }) => $theme === "dark" ? COLOR_GRAY_BORDER : INPUT_SEARCH_COLORS.boder};
  border-radius: 8px;
  padding: 8px 12px;
  transition: all 0.2s ease;
  &:focus-within {
    border-color: ${INPUT_SEARCH_COLORS.borderFocus};
    box-shadow: 0 0 0 1px ${INPUT_SEARCH_COLORS.boxShadowFocus};
  }
`;

export const SearchInput = styled.input<{ $theme?: ThemeType }>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: ${({ $theme }) => $theme === "dark" ? COLOR_WHITE : INPUT_SEARCH_COLORS.textColor};
  &::placeholder {
    color: ${({ $theme }) => $theme === "dark" ? COLOR_PLACEHOLDER_DARK : INPUT_SEARCH_COLORS.placeholderColor};
  }
`;

export const IconButton = styled.button<{ $theme?: ThemeType }>`
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $theme }) => $theme === "dark" ? COLOR_WHITE : "inherit"};
  &:hover {
    opacity: 0.8;
  }
`;
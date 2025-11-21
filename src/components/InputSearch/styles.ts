import styled from "styled-components";
import { SECONDARY_COLOR, WHITE_COLOR } from "../../assets/colors/global-colors";
import type { ThemeType } from "../../theme/Types";

const INPUT_SEARCH_COLORS = {
  boder: "#dcdcdc",
  borderHover: "#c7c7c7",
  borderFocus: "#1a73e8",
  boxShadowFocus: "rgba(26, 115, 232, 0.2)",
  textColor: "#374151",
  containerColor: SECONDARY_COLOR,
  placeholderColor: "#9ca3af"
};

export const InputContainer = styled.div<{ $theme?: ThemeType }>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  color: ${({ $theme }) => $theme === "dark" ? "#ffffff" : INPUT_SEARCH_COLORS.containerColor};
  background-color: ${({ $theme }) => $theme === "dark" ? "#374151" : WHITE_COLOR};
  border: 1px solid ${({ $theme }) => $theme === "dark" ? "#9ca3af" : INPUT_SEARCH_COLORS.boder};
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
  color: ${({ $theme }) => $theme === "dark" ? "#ffffff" : INPUT_SEARCH_COLORS.textColor};
  &::placeholder {
    color: ${({ $theme }) => $theme === "dark" ? "#d1d5db" : INPUT_SEARCH_COLORS.placeholderColor};
  }
`;

export const IconButton = styled.button<{ $theme?: ThemeType }>`
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $theme }) => $theme === "dark" ? "#ffffff" : "inherit"};
  &:hover {
    opacity: 0.8;
  }
`;
import styled from "styled-components";
import { WHITE_COLOR } from "../../assets/colors/global-colors";

const INPUT_SEARCH_COLORS = {
  boder: "#dcdcdc",
  borderHover: "#c7c7c7",
  borderFocus: "#1a73e8",
  boxShadowFocus: "rgba(26, 115, 232, 0.2)",
  textColor: "#374151",
  placeholderColor: "#9ca3af"
};

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  background-color: ${WHITE_COLOR};
  border: 1px solid ${INPUT_SEARCH_COLORS.boder};
  border-radius: 8px;
  padding: 8px 12px;
  transition: all 0.2s ease;
  &:focus-within {
    border-color: ${INPUT_SEARCH_COLORS.borderFocus};
    box-shadow: 0 0 0 1px ${INPUT_SEARCH_COLORS.boxShadowFocus};
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: ${INPUT_SEARCH_COLORS.textColor};
  &::placeholder {
    color: ${INPUT_SEARCH_COLORS.placeholderColor};
  }
`;

export const IconButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
`;
import styled from "styled-components";
import { BLACK_COLOR } from "../../assets/colors/global-colors";

const INPUT_COLORS = {
  boder: "#dcdcdc",
  borderHover: "#c7c7c7",
  borderFocus: "#1a73e8",
  boxShadowFocus: "rgba(26, 115, 232, 0.2)",
  arrowColor: "#5f6368",
};

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px 36px 10px 12px;
  font-size: 14px;
  color: ${BLACK_COLOR};
  border: 1px solid ${INPUT_COLORS.boder};
  border-radius: 8px;
  background-color: white;
  appearance: none;
  cursor: pointer;
  outline: none;
  &:hover {
    border-color: ${INPUT_COLORS.borderHover};
  }
  &:focus {
    border-color: ${INPUT_COLORS.borderFocus};
    box-shadow: 0 0 0 2px ${INPUT_COLORS.boxShadowFocus};
  }
`;

export const ArrowIcon = styled.span`
  position: absolute;
  top: 60%;
  right: 12px;
  transform: translateY(-60%);
  pointer-events: none;
  font-size: 18px;
  color: ${INPUT_COLORS.arrowColor};
`;

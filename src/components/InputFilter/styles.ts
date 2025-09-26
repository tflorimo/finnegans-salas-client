import styled from "styled-components";
import { LIGHT_COLOR, WHITE_COLOR, SECONDARY_COLOR, DARK_COLOR } from "../../assets/colors/global-colors";

export const ResultsContainer = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  right: 0;
  max-height: 250px;
  overflow-y: auto;
  background-color: ${WHITE_COLOR};
  border-radius: 0.75rem;
  box-shadow: 0 8px 28px rgba(16, 24, 40, 0.1);
  z-index: 10;
  border: 1px solid ${SECONDARY_COLOR}30;
  display: none;

  &.visible {
    display: block;
  }
`;

export const ResultItem = styled.button<{ $active?: boolean }>`
  display: block;
  padding: 0.625rem 0.875rem;
  width: 100%;
  text-align: left;
  cursor: pointer;
  border: none;
  background: ${({ $active }) => ($active ? `${LIGHT_COLOR}` : "transparent")};
  color: ${DARK_COLOR};
  transition: background-color 0.12s ease;
  border-bottom: 1px solid ${SECONDARY_COLOR}22;

  &:hover {
    background-color: ${LIGHT_COLOR};
  }

  &:last-child {
    border-bottom: none;
  }
`;

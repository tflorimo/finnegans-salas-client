import styled from "styled-components";
import { themes } from "../../../theme/Theme";
import type { ThemeType } from "../../../theme/Types";

export const BackButtonStyled = styled.button<{ $theme: ThemeType }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 0 -3px;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  background: none;
  border: none;
  cursor: pointer;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`;

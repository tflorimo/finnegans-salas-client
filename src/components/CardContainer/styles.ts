import styled from "styled-components";

import { DARK_COLOR } from "../../assets/colors/global-colors";
import { themes } from "../../theme/Theme";
import type { CardContainerStyledProps } from "./types";

export const CardContainerStyled = styled.div<CardContainerStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem;
  color: ${({ $theme }) => (themes[$theme].TEXT_COLOR)};
  background-color: ${({ $theme }) => (themes[$theme].CONTAINER_COLOR)};
  border-radius: 0.75rem;
  border: 1px solid ${({ $theme }) => themes[$theme].BORDER_COLOR};
  box-shadow: 0 0.063rem 0.125rem ${DARK_COLOR}d;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  ${({ $customStyle }) => $customStyle && $customStyle}
`;

import styled, { type CSSProp } from "styled-components";
import { BLACK_COLOR, DARK_COLOR, WHITE_COLOR, GLASS_COLOR } from "../../assets/colors/global-colors";
import type { ThemeType } from "../../theme/Types";
import { themes } from "../../theme/Theme";

const CC_BORDER_COLOR = "#e5e7eb";

type CardContainerStyledProps = {
  $customStyle?: CSSProp;
  $theme: ThemeType;
};

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
  border-width: 0.063rem;
  border-color: ${CC_BORDER_COLOR};
  box-shadow: 0 0.063rem 0.125rem ${DARK_COLOR}d;
  ${({ $customStyle }) => $customStyle && $customStyle}
`;

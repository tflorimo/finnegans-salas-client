import styled, { css, type CSSProp } from "styled-components";
import {
  DANGER_COLOR,
  DARK_COLOR,
  INFO_COLOR,
  LIGHT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SUCCESS_COLOR,
  WARNING_COLOR,
  WHITE_COLOR,
} from "../../assets/colors/global-colors";
import { ButtonVariant, type ButtonVariantType } from "./types";

interface ButtonProps {
  $variant: ButtonVariantType;
  $customStyle?: CSSProp;
  $hasIcon?: boolean;
}

export const VARIANT_STYLES = {
  [ButtonVariant.primary]: css`
    background-color: ${PRIMARY_COLOR};
    color: ${WHITE_COLOR};
    &:hover {
      background-color: #1d4ed8;
    }
  `,
  [ButtonVariant.secondary]: css`
    background-color: ${SECONDARY_COLOR};
    color: ${DARK_COLOR};
    &:hover {
      background-color: #d1d5db;
    }
  `,
  [ButtonVariant.warning]: css`
    background-color: ${WARNING_COLOR};
    color: ${WHITE_COLOR};
    &:hover {
      background-color: #d97706;
    }
  `,
  [ButtonVariant.danger]: css`
    background-color: ${DANGER_COLOR};
    color: ${WHITE_COLOR};
    &:hover {
      background-color: #b91c1c;
    }
  `,
  [ButtonVariant.success]: css`
    background-color: ${SUCCESS_COLOR};
    color: ${WHITE_COLOR};
    &:hover {
      background-color: #15803d;
    }
  `,
  [ButtonVariant.info]: css`
    background-color: ${INFO_COLOR};
    color: ${WHITE_COLOR};
    &:hover {
      background-color: #0d6efd;
    }
  `,
  [ButtonVariant.light]: css`
    background-color: ${LIGHT_COLOR};
    color: ${WHITE_COLOR};
    &:hover {
      background-color: #d1d5db;
    }
  `,
  [ButtonVariant.dark]: css`
    background-color: ${DARK_COLOR};
    color: ${WHITE_COLOR};
    &:hover {
      background-color: #111827;
    }
  `,
  [ButtonVariant.white]: css`
    background-color: ${WHITE_COLOR};
    color: ${DARK_COLOR};
    &:hover {
      background-color: #f3f4f6;
    }
  `,
};

export const ButtonStyled = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $hasIcon }) => ($hasIcon ? "0.5rem" : "0")};
  font-size: 0.95rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  ${({ $variant }) => VARIANT_STYLES[$variant]}
  ${({ $customStyle }) => $customStyle && $customStyle}
`;

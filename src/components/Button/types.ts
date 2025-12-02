import type { ReactNode } from "react";
import type { CSSProp } from "styled-components";

export type ButtonProps = {
  text?: string;
  icon?: ReactNode;
  variant?: ButtonVariantType;
  onClick: () => void;
  customStyle?: CSSProp;
};

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  danger = "danger",
  warning = "warning",
  info = "info",
  light = "light",
  dark = "dark",
  white = "white",
}

export type ButtonVariantType = keyof typeof ButtonVariant;

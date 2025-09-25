import type { ReactNode, ChangeEvent, KeyboardEvent } from "react";
import type { CSSProp } from "styled-components";

export type InputProps = {
  placeholder?: string;
  value?: string;
  icon?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  customStyle?: CSSProp;
};
import type { ReactNode } from "react";
import type { CSSProp } from "styled-components";

export type CardContainerProps = {
  children: ReactNode;
  onClick?: () => void;
  customStyle?: CSSProp;
};

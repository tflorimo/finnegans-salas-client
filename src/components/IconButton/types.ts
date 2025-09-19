import type { ReactNode } from "react";
import type { CSSProp } from "styled-components";

export type IconButtonProps = {
  children: ReactNode;
  onClick: () => void;
  customStyle?: CSSProp;
};

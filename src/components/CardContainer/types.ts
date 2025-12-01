import type { ReactNode } from "react";
import type { CSSProp } from "styled-components";

import type { ThemeType } from "../../theme/Types";

export type CardContainerProps = {
  children: ReactNode;
  onClick?: () => void;
  customStyle?: CSSProp;
};

export type CardContainerStyledProps = {
  $customStyle?: CSSProp;
  $theme: ThemeType;
};

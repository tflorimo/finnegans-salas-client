import type { ReactNode } from "react";
import type { CSSProp } from "styled-components";

export type TagProps = {
  icon?: ReactNode;
  customStyle?: CSSProp;
  type?: TagsTypes;
  text: string;
};

export enum Tags {
  success = "success",
  danger = "danger",
  info = "info",
  succesOutput = "succesOutput",
  dangerOutput = "dangerOutput"
};

export type TagsTypes = keyof typeof Tags
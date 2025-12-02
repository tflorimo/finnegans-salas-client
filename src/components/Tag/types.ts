import type { ReactNode } from "react";
import type { CSSProp } from "styled-components";

export type TagProps = {
  icon?: ReactNode;
  customStyle?: CSSProp;
  type?: TagsTypes;
  text: string;
};

export interface TagStylesProps {
  $type: TagsTypes;
  $customStyle?: CSSProp;
}

export enum Tags {
  success = "success",
  danger = "danger",
  info = "info",
  warning = "warning",
  succesOutput = "succesOutput",
  dangerOutput = "dangerOutput",
  infoOutput = "infoOutput",
  blueOutput = "blueOutput",
  empty = "empty",
}

export type TagsTypes = keyof typeof Tags;

import type { ThemeType } from "../../theme/Types";

export type Base = { id: string } | string;

export type GenericSelectProps<TValue> = {
  formatLabel: (value: TValue) => string;
  onChange: (value: TValue) => void;
  values: TValue[];
  placeholder?: string;
  selected?: TValue;
  theme?: ThemeType;
};

export const INPUT_COLORS = {
  boder: "#dcdcdc",
  borderHover: "#c7c7c7",
  borderFocus: "#1a73e8",
  boxShadowFocus: "rgba(26, 115, 232, 0.2)",
  arrowColor: "#5f6368",
};
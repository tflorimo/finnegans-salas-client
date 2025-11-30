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

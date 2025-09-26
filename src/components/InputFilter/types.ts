import type { InputHTMLAttributes } from "react";
import type { InputProps } from "../Input/types";

export type FilterOption<T = string | number> = {
  id: T;
  label: string;
  value: string;
};

export type InputFilterProps<T = string | number> = InputProps & {
  options?: FilterOption<T>[];
  onOptionSelect?: (option: FilterOption<T>) => void;
  onSearch?: (term: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

import type { InputProps } from "../Input/types";
import type { InputHTMLAttributes } from "react";

export type InputSearchProps = InputProps & InputHTMLAttributes<HTMLInputElement> & {
  onSearch?: (term: string) => void;
};

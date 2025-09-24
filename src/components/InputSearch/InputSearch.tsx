import type { JSX } from "react";
import { Input } from "../Input/Input";
import type { InputSearchProps } from "./types";
import { useSearchHandlers } from "./hooks";

/**
 * @description InputSearch component that triggers a search action on Enter or when clicking the icon.
 * @export
 * @param {InputSearchProps} {
 *   onSearch,
 *   onKeyDown,
 *   onClick,
 *   value,
 *   ...rest
 * }
 * @return {JSX.Element}
 */
export function InputSearch({
  onSearch,
  onKeyDown,
  onClick,
  value,
  ...rest
}: InputSearchProps): JSX.Element {
  const { handleKeyDown, handleIconClick } = useSearchHandlers({ value, onSearch, onKeyDown, onClick });

  return <Input value={value} onKeyDown={handleKeyDown} onClick={handleIconClick} {...rest} />;
}

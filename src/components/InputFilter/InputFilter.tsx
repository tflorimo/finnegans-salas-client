import type { JSX } from "react";
import { Input } from "../Input/Input";
import type { InputFilterProps, FilterOption } from "./types";
import { useDropdown, useAriaListboxIds, useListboxKeyboard, useResetActiveIndex } from "./hooks";
import { ResultsList } from "./ResultsList";
import { ChevronDown } from "lucide-react";

/**
 * @description InputFilter component that renders a read-only input with a listbox dropdown to select an option.
 * @export
 * @param {InputFilterProps} {
 *   placeholder,
 *   value,
 *   customStyle,
 *   onChange,
 *   onClick,
 *   options = [],
 *   onOptionSelect,
 *   onSearch,
 *   ...rest
 * }
 * @return {JSX.Element}
 */

export function InputFilter({ placeholder, value = "", customStyle, onChange, onClick, options = [], onOptionSelect, onSearch, ...rest }: InputFilterProps): JSX.Element {
  const { open, setOpen, close, containerRef, activeIndex, setActiveIndex } = useDropdown();

  const filtered = options;
  const { listboxId, getOptionId } = useAriaListboxIds(rest.id as string | undefined);
  const activeId = filtered.length > 0 && activeIndex >= 0 && activeIndex < filtered.length
    ? getOptionId(filtered[activeIndex].id)
    : undefined;

  const { handleKeyDown } = useListboxKeyboard({ open, setOpen, options: filtered, activeIndex, setActiveIndex, onOptionSelect, onSearch, value, close });
  useResetActiveIndex({ open, optionsLength: filtered.length, setActiveIndex });

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <Input
        {...rest}
        placeholder={placeholder}
        value={value}
        readOnly
        customStyle={customStyle}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        onClick={() => {
          setOpen(true);
          onClick?.();
        }}
        onFocus={() => {
          setOpen(true);
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-activedescendant={activeId}
        aria-autocomplete="list"
        icon={<ChevronDown size={16} />}
      />
      <ResultsList
        open={open}
        options={filtered}
        activeIndex={activeIndex}
        listboxId={listboxId}
        getOptionId={getOptionId}
        onSelect={(opt: FilterOption) => { onOptionSelect?.(opt); close(); }}
      />
    </div>
  );
}

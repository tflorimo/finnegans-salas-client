import type { JSX } from "react";
import { ResultsContainer, ResultItem } from "./styles";
import type { FilterOption } from "./types";

type Props<T extends string | number = string | number> = {
  open: boolean;
  options: FilterOption<T>[];
  activeIndex: number;
  listboxId: string;
  getOptionId: (id: T) => string;
  onSelect: (opt: FilterOption<T>) => void;
};

export function ResultsList<T extends string | number = string | number>({ open, options, activeIndex, listboxId, getOptionId, onSelect }: Props<T>): JSX.Element | null {
  if (!open || options.length === 0) return null;
  return (
    <ResultsContainer className="visible" role="listbox" id={listboxId} aria-expanded={open}>
      <div role="presentation" style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {options.map((opt, idx) => (
          <div
            key={opt.id}
            id={getOptionId(opt.id)}
            role="option"
            aria-selected={idx === activeIndex}
            tabIndex={-1}
            onClick={() => onSelect(opt)}
          >
            <ResultItem $active={idx === activeIndex} type="button">{opt.label}</ResultItem>
          </div>
        ))}
      </div>
    </ResultsContainer>
  );
}

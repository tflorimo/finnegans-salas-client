import { useCallback, useEffect, useId, useRef, useState, type Dispatch, type SetStateAction } from "react";
import type { FilterOption } from "./types";
import type { KeyboardEvent } from "react";

export function useDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: Event) => {
      const el = containerRef.current;
      if (!el || el.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("pointerdown", onDown as EventListener, { passive: true } as AddEventListenerOptions);
    return () => document.removeEventListener("pointerdown", onDown as EventListener);
  }, [open]);

  return { open, setOpen, close, containerRef, activeIndex, setActiveIndex } as const;
}


export function useAriaListboxIds(providedId?: string) {
  const autoId = useId();
  const base = providedId ?? autoId;
  const listboxId = `${base}-listbox`;
  const getOptionId = (id: string | number) => `${listboxId}-opt-${id}`;
  return { listboxId, getOptionId } as const;
}

export function useResetActiveIndex(params: {
  open: boolean;
  optionsLength: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}) {
  const { open, optionsLength, setActiveIndex } = params;

  useEffect(() => {
    if (open) setActiveIndex(0);
  }, [open, optionsLength, setActiveIndex]);
}

export function useListboxKeyboard(params: {
  open: boolean;
  setOpen: (v: boolean) => void;
  options: FilterOption[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  onOptionSelect?: (opt: FilterOption) => void;
  onSearch?: (term: string) => void;
  value?: string;
  close: () => void;
}) {
  const { open, setOpen, options, activeIndex, setActiveIndex, onOptionSelect, onSearch, value, close } = params;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const { key } = e; const len = options.length;
      if (key === "ArrowDown" || key === "ArrowUp" || key === "Home" || key === "End") {
        e.preventDefault(); if (!open) setOpen(true); if (!len) return;
        setActiveIndex(key === "Home" ? 0 : key === "End" ? len - 1 : (activeIndex + (key === "ArrowDown" ? 1 : -1) + len) % len);
        return;
      }
      if (key === "Enter") { if (open && len) { e.preventDefault(); onOptionSelect?.(options[activeIndex]); close(); } else onSearch?.(value ?? ""); return; }
      if (key === "Escape") { if (open) { e.preventDefault(); close(); } return; }
      if (key === "Tab") { if (open) close(); return; }
    },
    [open, setOpen, options, activeIndex, onOptionSelect, onSearch, value, close, setActiveIndex]
  );

  return { handleKeyDown } as const;
}

import type { ThemeType } from "../../theme/Types";

export interface InputSearchProps {
    onFilter: (query: string) => void;
    placeholder?: string;
    theme?: ThemeType;
    debounceTime?: number;
    showClearButton?: boolean;
}
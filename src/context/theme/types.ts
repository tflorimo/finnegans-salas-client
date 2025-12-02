import type { ThemeType } from "../../theme/Types";

export type ThemeContextProps = {
  theme: ThemeType;
  toggleTheme: () => void;
};
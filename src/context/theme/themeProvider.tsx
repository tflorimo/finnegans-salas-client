import { useCallback, useState, useEffect, type ReactNode } from "react";
import { ThemeContext } from "./themeContext";
import type { ThemeType } from "../../theme/Types";

const THEME_STORAGE_KEY = "finnegans-theme";

const getStoredTheme = (): ThemeType => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return (stored === "dark" || stored === "light") ? stored : "light";
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(getStoredTheme);

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
import { useCallback, useState, type ReactNode } from "react";
import { ThemeContext } from "./themeContext";
import type { ThemeType } from "../../theme/Types";

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

    const toggleTheme = useCallback(() => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }, []);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
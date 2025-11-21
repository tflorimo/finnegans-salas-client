import { useContext, useEffect } from "react";
import { LayoutStyles } from "./Layout.styles";
import { ThemeContext } from "../../context/theme/themeContext";
import { themes } from "../../theme/Theme";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext);
  
  useEffect(() => {
    document.body.style.transition = "background-color 0.3s ease";
    document.documentElement.style.transition = "background-color 0.3s ease";
    document.body.style.backgroundColor = themes[theme].BACKGROUND_COLOR;
    document.documentElement.style.backgroundColor = themes[theme].BACKGROUND_COLOR;
  }, [theme]);
  
    return <LayoutStyles $theme={theme}>{children}</LayoutStyles>;
}
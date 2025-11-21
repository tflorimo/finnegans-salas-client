import { useContext } from "react";
import type { ThemeType } from "../../theme/Types";
import { LayoutStyles } from "./Layout.styles";
import { ThemeContext } from "../../context/theme/themeContext";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext);
  console.log("Layout theme:", theme);
    return <LayoutStyles $theme={theme}>{children}</LayoutStyles>;
}
import { css } from "styled-components";
import type { ThemeType } from "../../../theme/Types";
import { themes } from "../../../theme/Theme";

export const getFilterButtonStyle = (theme: ThemeType) => css`
  height: 40px;
  padding: 0 14px;
  border: 1px solid ${themes[theme].BORDER_COLOR};
  border-radius: 10px;
  background: ${theme === "dark" ? "#374151" : "#fff"};
  color: ${theme === "dark" ? "#ffffff" : "#0f172a"};
  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  &:hover { background: ${theme === "dark" ? "#4b5563" : "#f8fafc"}; }
`;

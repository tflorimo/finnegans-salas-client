import styled from "styled-components";
import type { ThemeType } from "../../../theme/Types";
import { themes } from "../../../theme/Theme";

const TOPBAR_BG_LIGHT = "#a8b9e3";
const TOPBAR_BG_DARK = "#000000";

const TOPBAR_TITLE_COLOR = "#4bc3fe";
const TOPBAR_SUBTITLE_COLOR = "#ffffffff";

const TOPBAR_ICON_COLOR = "#ffffffff";
const TOPBAR_ICON_HOVER_COLOR = "#2563eb";

export const TopBar = styled.header<{ theme: ThemeType }>`
  width: 100%;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => (theme === "light" ? TOPBAR_BG_LIGHT : TOPBAR_BG_DARK)};
  border-bottom: 1px solid ${({ theme }) => {
    const themeKey = theme as ThemeType;
    return themes[themeKey].BORDER_COLOR;
  }};
  height: 64px;
  transition: background 0.3s ease, border-color 0.3s ease;
`;

export const TopBarInner = styled.div`
  max-width: auto;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
`;

export const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 16px;
    font-weight: 700;
    color: ${TOPBAR_TITLE_COLOR};
    margin: 0;
  }

  h2 {
    font-size: 12px;
    font-weight: 400;
    color: ${TOPBAR_SUBTITLE_COLOR};
    margin: 0;
  }
    margin-left: -60px;
`;

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    cursor: pointer;
    color: ${TOPBAR_ICON_COLOR};

    &:hover {
      color: ${TOPBAR_ICON_HOVER_COLOR};
    }
  }
`;

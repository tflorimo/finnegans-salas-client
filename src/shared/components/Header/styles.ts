import styled from "styled-components";

import { themes } from "../../../theme/Theme";
import type { ThemeType } from "../../../theme/Types";
import { media } from "../../styles/media";

const TOPBAR_BG_LIGHT = "#f0f4f8";
const TOPBAR_BG_DARK = "#000000";

const TOPBAR_TITLE_COLOR = "#4bc3fe";
const TOPBAR_SUBTITLE_COLOR = "#ffffffff";
const TOPBAR_SUBTITLE_COLOR_LIGHT = "#000000";

const TOPBAR_ICON_COLOR = "#ffffffff";
const TOPBAR_ICON_COLOR_LIGHT = "#000000";
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
  position: relative;
`;

export const TopBarLeft = styled.div<{ $theme: ThemeType }>`
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
    color: ${({ $theme }) => ($theme === "light" ? TOPBAR_SUBTITLE_COLOR_LIGHT : TOPBAR_SUBTITLE_COLOR)};
    margin: 0;
  }
    margin-left: -60px;

    ${media.md} {
    h1,
    h2 {
      display: none;
    }
    img {
      display: block;
    }
  }
`;

export const TopBarRight = styled.div<{ $theme: ThemeType }>`
  display: flex;
  align-items: center;
  gap: 16px;

  /* Mobile */
  ${media.md} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  /* 393px */
  @media (min-width: 380px) and (max-width: 400px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  /* 430px */
  @media (min-width: 420px) and (max-width: 440px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  /* 480px */
  @media (min-width: 470px) and (max-width: 490px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  svg {
    cursor: pointer;
    color: ${({ $theme }) => ($theme === "light" ? TOPBAR_ICON_COLOR_LIGHT : TOPBAR_ICON_COLOR)};
    &:hover {
      color: ${TOPBAR_ICON_HOVER_COLOR};
    }
  }
`;

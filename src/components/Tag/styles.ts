import styled, { css } from "styled-components";
import {
  DANGER_COLOR,
  DARK_COLOR,
  LIGHT_COLOR,
  PRIMARY_COLOR,
  WHITE_COLOR
} from "../../assets/colors/global-colors";
import type { TagStylesProps } from "./types";

export const TYPE_STYLES_COLORS = {
  // Success
  successBg: PRIMARY_COLOR,
  successColor: WHITE_COLOR,

  // Danger
  dangerBg: DANGER_COLOR,
  dangerColor: WHITE_COLOR,

  // Info
  infoBg: LIGHT_COLOR,
  infoColor: DARK_COLOR,

  // Warning
  warningBg: "#facc1519",
  warningColor: "#ca8a04ff",
  warningBorder: "#eacc16ff",

  // Success Output
  successOutputBg: "#40eb7f19",
  successOutputColor: "rgba(36, 226, 106, 1)",
  successOutputBorder: "#91d38eff",

  // Danger Output
  dangerOutputBg: "#ef43431a",
  dangerOutputColor: "#ef4343",
  dangerOutputBorder: "#e49494ff",

  // Info Output
  infoOutputBg: LIGHT_COLOR,
  infoOutputColor: DARK_COLOR,
  infoOutputBorder: "#97a0a5ff",

  // Blue Output
  blueOutputBg: "#dbeafe19",
  blueOutputColor: "#00aaffff",
  blueOutputBorder: "#7dd3fcff",

  // Empty
  emptyBg: "transparent",
  emptyColor: DARK_COLOR,
} as const;

const TYPE_STYLES = {
  success: css`
    background-color: ${TYPE_STYLES_COLORS.successBg};
    color: ${TYPE_STYLES_COLORS.successColor};
  `,
  danger: css`
    background-color: ${TYPE_STYLES_COLORS.dangerBg};
    color: ${TYPE_STYLES_COLORS.dangerColor};
  `,
  info: css`
    background-color: ${TYPE_STYLES_COLORS.infoBg};
    color: ${TYPE_STYLES_COLORS.infoColor};
  `,
  warning: css`
    background-color: ${TYPE_STYLES_COLORS.warningBg};
    color: ${TYPE_STYLES_COLORS.warningColor};
    border: 1px solid ${TYPE_STYLES_COLORS.warningBorder};
  `,
  succesOutput: css`
    background-color: ${TYPE_STYLES_COLORS.successOutputBg};
    color: ${TYPE_STYLES_COLORS.successOutputColor};
    border: 1px solid ${TYPE_STYLES_COLORS.successOutputBorder};
  `,
  dangerOutput: css`
    background-color: ${TYPE_STYLES_COLORS.dangerOutputBg};
    color: ${TYPE_STYLES_COLORS.dangerOutputColor};
    border: 1px solid ${TYPE_STYLES_COLORS.dangerOutputBorder};
  `,
  infoOutput: css`
    background-color: ${TYPE_STYLES_COLORS.infoOutputBg};
    color: ${TYPE_STYLES_COLORS.infoOutputColor};
    border: 1px solid ${TYPE_STYLES_COLORS.infoOutputBorder};
  `,
  blueOutput: css`
    background-color: ${TYPE_STYLES_COLORS.blueOutputBg};
    color: ${TYPE_STYLES_COLORS.blueOutputColor};
    border: 1px solid ${TYPE_STYLES_COLORS.blueOutputBorder};
  `,
  empty: css`
    background-color: ${TYPE_STYLES_COLORS.emptyBg};
    color: ${TYPE_STYLES_COLORS.emptyColor};
  `,
};

// Base styles for the Tag
const TagBaseStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 0.65rem;
`;

// Styled component for the Tag
export const TagStyled = styled.button<TagStylesProps>`
  ${TagBaseStyles}
  ${({ $type }) => TYPE_STYLES[$type]};
  ${({ $customStyle }) => $customStyle && $customStyle};
`;

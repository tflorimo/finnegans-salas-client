import styled, { css, type CSSProp } from "styled-components";
import {
  DANGER_COLOR,
  DARK_COLOR,
  LIGHT_COLOR,
  PRIMARY_COLOR,
  WHITE_COLOR,
} from "../../assets/colors/global-colors";
import type { TagsTypes } from "./types";

interface TagProps {
  $type: TagsTypes;
  $customStyle?: CSSProp;
}

const TYPE_STYLES = {
  success: css`
    background-color: ${PRIMARY_COLOR};
    color: ${WHITE_COLOR};
  `,
  danger: css`
    background-color: ${DANGER_COLOR};
    color: ${WHITE_COLOR};
  `,
  info: css`
    background-color: ${LIGHT_COLOR};
    color: ${DARK_COLOR};
  `,
  warning: css`
    background-color: ${"#facc1519"};
    color: ${"#ca8a04ff"};
    border: 1px solid ${"#eacc16ff"};
  `,
  succesOutput: css`
    background-color: ${"#40eb7f19"};
    color: ${"rgba(36, 226, 106, 1)"};
    border: 1px solid ${"#91d38eff"};
  `,
  dangerOutput: css`
    background-color: ${"#ef43431a"};
    color: ${"#ef4343"};
    border: 1px solid ${"#e49494ff"};
  `,
  infoOutput: css`
    background-color: ${LIGHT_COLOR};
    color: ${DARK_COLOR};
    border: 1px solid ${"#97a0a5ff"};
  `,
  blueOutput: css`
    background-color: ${"#dbeafe19"};
    color: ${"#00aaffff"};
    border: 1px solid ${"#7dd3fcff"};
  `,
  empty: css`
    background-color: transparent;
    color: ${DARK_COLOR};
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
export const TagStyled = styled.button<TagProps>`
  ${TagBaseStyles}
  ${({ $type }) => TYPE_STYLES[$type]};
  ${({ $customStyle }) => $customStyle && $customStyle};
`;

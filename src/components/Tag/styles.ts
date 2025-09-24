import styled, { css, type CSSProp } from "styled-components";
import { DANGER_COLOR, DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR, WHITE_COLOR} from "../../assets/colors/global-colors";
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
  succesOutput: css`
    background-color: ${"#edfdf3"};
    border: ${"#$16a24933"};
    color: ${"#16a249"};
    border-width: 1px;
  `,
  dangerOutput: css`
    background-color: ${"#ef43431a"};
    border: ${"#$ef434333"};
    color: ${"#ef4343"};
    border-width: 1px;
  `,
}

// Base styles for the Tag
const TagBaseStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 0.65rem;
  background-color: #ffffff;
`;

// Styled component for the Tag
export const TagStyled = styled.button<TagProps>`
  ${TagBaseStyles}
  ${({ $customStyle }) => $customStyle && $customStyle};
  ${({ $type}) => TYPE_STYLES[$type]};
`;

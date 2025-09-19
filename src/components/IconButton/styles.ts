import styled, { css, type CSSProp } from "styled-components";

// Base styles for the IconButton
const IconButtonBaseStyles = css`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 0.65rem;
  background-color: #ffffff;
  &:hover {
    background-color: #dfdfdfff;
  }
`;

// Styled component for the IconButton
export const IconButtonStyled = styled.button<{ customStyle?: CSSProp }>`
  ${IconButtonBaseStyles}
  ${({ customStyle }) => customStyle && customStyle};
`;

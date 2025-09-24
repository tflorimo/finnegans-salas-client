import styled, { type CSSProp } from "styled-components";
import { DARK_COLOR, WHITE_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "../../assets/colors/global-colors";

interface InputContainerProps {
    $customStyle?: CSSProp;
    $hasIcon?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${WHITE_COLOR};
  border-radius: 9999px;
  border: 1px solid ${SECONDARY_COLOR}33;
  padding: ${({ $hasIcon }) => ($hasIcon ? "0 0.625rem 0 1rem" : "0 1rem")};
  height: 2.5rem;
  transition: box-shadow 0.18s ease, border-color 0.18s ease;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);

  &:focus-within {
    border-color: ${PRIMARY_COLOR};
    box-shadow: 0 0 0 2px ${PRIMARY_COLOR}20;
  }

  ${({ $customStyle }) => $customStyle && $customStyle}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${SECONDARY_COLOR};
  cursor: pointer;
  margin-left: 0.5rem;
  border-radius: 9999px;
  width: 1.75rem;
  height: 1.75rem;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.95rem;
  color: ${DARK_COLOR};
  font-weight: 400;
  width: 100%;
  height: 100%;
  padding: 0 0.25rem 0 0;
  font-family: inherit;

  &::placeholder {
    color: ${SECONDARY_COLOR}99;
    font-weight: 400;
  }
`;

export const InputWrapper = styled.div<{ $customStyle?: CSSProp }>`
  position: relative;
  width: 100%;
  max-width: 100%;
  
  ${({ $customStyle }) => $customStyle && $customStyle}
`;

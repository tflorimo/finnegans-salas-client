import styled, { type CSSProp } from "styled-components";
import {
    LIGHT_COLOR,
    DARK_COLOR,
    WHITE_COLOR,
    PRIMARY_COLOR,
    SECONDARY_COLOR,
} from "../../assets/colors/global-colors";

interface InputContainerProps {
    $customStyle?: CSSProp;
    $hasIcon?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${WHITE_COLOR};
  border-radius: 0.5rem;
  border: 1px solid ${SECONDARY_COLOR}30;
  padding: ${({ $hasIcon }) => ($hasIcon ? "0 0.5rem 0 1rem" : "0 1rem")};
  height: 2.5rem;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

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
  
  &:hover {
    color: ${DARK_COLOR};
  }
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
  padding: 0;
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

export const ResultsContainer = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  right: 0;
  max-height: 250px;
  overflow-y: auto;
  background-color: ${WHITE_COLOR};
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  border: 1px solid ${SECONDARY_COLOR}30;
  display: none;

  &.visible {
    display: block;
  }
`;

export const ResultItem = styled.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${LIGHT_COLOR};
  }
`;
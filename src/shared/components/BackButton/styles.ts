import styled from "styled-components";

export const BackButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 0 -3px;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: #2563eb;
  background: none;
  border: none;
  cursor: pointer;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`;

import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to { transform: rotate(360deg); }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(3px);
`;

export const Spinner = styled.div`
  width: 64px;
  height: 64px;
  border: 6px solid #ffffff40;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: ${rotate} 0.8s linear infinite;
`;
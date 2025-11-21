import styled, { css } from "styled-components";

export const EXPORT_BUTTON_STYLE = (disabled: boolean) => css`
  height: 40px;
  padding: 0 14px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  background: #fff;
  color: #0f172a;
  gap: 0.5rem;
  margin-top: -15px;
  opacity: ${disabled ? 0.5 : 1};
  cursor: ${disabled ? "not-allowed" : "pointer"};
  pointer-events: ${disabled ? "none" : "auto"};

  &:hover {
    background: ${disabled ? "#fff" : "#f8fafc"};
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled.h3`
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
`;

export const ModalButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #0f172a;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const CancelButton = styled(ModalButton)`
  background: #f1f5f9;
  border-color: #e2e8f0;
  
  &:hover {
    background: #e2e8f0;
  }
`;

import styled from "styled-components";

export const RoomPageContainer = styled.div`
  width: 100%;
  padding: 30px 200px;
`;

export const PageInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// volver a atras
export const BackLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: #2563eb;
  background: none;
  border: none;
  cursor: pointer;

  &:hover { text-decoration: underline; }
`;
// titulos de la card principal
export const TitleRow = styled.div`
  align-items: left;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 6px;

  h1 {
    margin: 0;
    font-size: 32px;
    font-weight: 800;
    color: #0f172a;
  }
`;

export const MetaRow = styled.div`
  align-items: left;
  gap: 8px;
  color: #64748b;
  font-size: 14px;
  margin-bottom: 12px;

  .icon {
    display: inline-flex;
    align-items: left;
    justify-content: center;
  }

  .label {
    color: #0f172a;
    font-weight: 600;
  }
`;
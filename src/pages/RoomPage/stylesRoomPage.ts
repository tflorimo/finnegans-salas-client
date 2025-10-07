import styled from "styled-components";

export const RoomPageContainer = styled.div`
  width: 100%;
  padding: 30px 160px;
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

/* Grid de 2 columnas (main + sidebar) */
export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: 75px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ColumnaPrincipal = styled.main`
  display: grid;
  gap: 25px;
`;

export const ColumnaLateral = styled.aside`
  display: grid;
  gap: 25px;
  align-content: start;
`;


export const FilaEstado = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  gap: 8px;
  border-top: 1px solid #eef2f7;

  &:first-of-type { border-top: none; }

  span {
    color: #6b7280;
    font-size: 14px;
  }
  strong {
    color: #0f172a;
    font-weight: 700;
    font-size: 14px;
  }
`;

/* Caja del QR */
export const QRBox = styled.div`
  width: 160px;
  height: 160px;
  margin: 8px auto 0;
  border-radius: 12px;
  background: #eef2f7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* Card de abajo de todo con las reservas */
export const ReservasLista = styled.div`
  display: grid;
  gap: 14px;
`;

export const ReservationItem = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr auto;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  column-gap: 14px;
`;

export const ResLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
  min-width: 0;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  padding: 0 12px;
  border-radius: 999px;
  background: #0b5be7;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 14px;
`;

export const ResInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;

  span {
    color: #0f172a;
    font-weight: 700;
    font-size: 14px;
    white-space: nowrap;
  }

  small {
    color: #6b7280;
    font-size: 12px;
  }
`;

export const ResRight = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 430px;
  color: #0f172a;
  font-weight: 600;
  white-space: nowrap;

  font-variant-numeric: tabular-nums;

  svg { color: #64748b; }
`;
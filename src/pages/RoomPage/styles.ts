import styled, { css } from "styled-components";

export const RoomPageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 30px 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  @media (min-width: 768px) { padding: 30px 40px; }
  @media (min-width: 1024px) { padding: 30px 80px; }
  @media (min-width: 1440px) { padding: 30px 160px; }
`;

export const PageInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: 75px;
  @media (max-width: 1024px) { grid-template-columns: 1fr; }
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
  span { color: #6b7280; font-size: 14px; }
  strong { color: #0f172a; font-weight: 700; font-size: 14px; }
`;

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

export const ReservationList = styled.div`
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
  span { color: #0f172a; font-weight: 700; font-size: 14px; white-space: nowrap; }
  small { color: #6b7280; font-size: 12px; }
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

export const RoomInfoCardStyle = css`
  width: 100%;
  text-align: left;
  display: flow-root;
  h1, h2 { margin-top: 0; }
`;

export const ReservationsCardStyle = css`
  h1 { color: rgba(0, 0, 0, 1); margin-bottom: 8px; font-size: 24px; }
`;

export const CurrentStatusCardStyle = css`
  width: 100%;
  text-align: left;
  h3 { margin: 0 0 12px; font-size: 18px; font-weight: 700; }
`;

export const QRCardStyle = css`
  width: 100%;
  text-align: center;
  h3 { margin: 0 0 12px; font-size: 18px; font-weight: 700; }
  p { margin: 0 0 16px; color: #64748b; font-size: 14px; }
`;

export const TitleStyle = styled.h2`
  color: rgba(0, 0, 0, 1);
  margin-bottom: 8px;
  margin-top: -8px; 
  font-size: 20px; 
  font-weight: 700;
`;

export const EquipmentContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const CheckInButtonStyle = css`
  width: 100%;
  justify-content: center;
  gap: 10px;
  background: rgba(0, 66, 206, 1);
  color: rgba(255, 255, 255, 1);
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(2, 8, 23, 0.05);
  &:hover { background: rgba(92, 0, 104, 1); }
`;

export const RoomHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
`;

export const RoomHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RoomTitle = styled.h1`
  color: rgba(0, 0, 0, 1);
  margin: 0;
  font-size: 24px;
  font-weight: 700;
`;

export const RoomCapacityInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  margin-top: 6px;
`;

export const EQUIPMENT_ICON_SIZE = 18;
export const EQUIPMENT_ICON_COLOR = '#2563eb';

export const EquipmentTagStyle = css`
  background: #f9fafb;
  color: #0f172a;
  font-weight: 500;
  padding: 8px 12px;
  gap: 6px;
`;

export const CheckInSubtitle = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1rem;
  text-align: center;
`;

export const NoEquipmentMessage = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

export const CheckInModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const CheckInModalContent = styled.div<{ $isSuccess: boolean }>`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-left: 4px solid ${({ $isSuccess }) => $isSuccess ? '#28a745' : '#dc3545'};
  text-align: center;
`;

export const CheckInMessageText = styled.p`
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
  color: #343a40;
  text-align: center;
`;

export const CheckInCloseButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: #ef4444;
  padding: 2rem;
  margin: 0;
`;

export const NoReservationsMessage = styled.p`
  text-align: center;
  color: #9ca3af;
  font-size: 0.875rem;
  padding: 1rem 0;
  margin: 0;
`;

export const ReservationsSectionSeparator = styled(TitleStyle)`
  margin-top: 1.5rem;
`;

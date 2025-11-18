import styled, { css } from "styled-components";
import { FinishedEventIconWrapper, InProgressEventIconWrapper } from "../../shared/components/EventStatusIcon";
import { SUCCESS_COLOR, DANGER_COLOR, DARK_COLOR, PRIMARY_COLOR, WHITE_COLOR } from "../../assets/colors/global-colors";

export const FinishedEventIcon = FinishedEventIconWrapper;
export const InProgressEventIcon = InProgressEventIconWrapper;

export const RoomPageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 5px 20px 10px;
  box-sizing: border-box;
  overflow-x: hidden;
  @media (min-width: 768px) { padding: 10px 40px 20px; }
  @media (min-width: 1024px) { padding: 10px 80px 20px; }
  @media (min-width: 1440px) { padding: 10px 160px 20px; }
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

export const ReservationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 75%;
`;

export const ReservationItem = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr auto;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid #f3f4f6;
  width: 100%;
  box-sizing: border-box;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: #0b5be7;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 14px;
  flex-shrink: 0;
`;

export const ResInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  line-height: 1.5;
  min-width: 0;
  flex: 1;
  
  span { 
    color: #1f2937; 
    font-weight: 600; 
    font-size: 14px; 
    overflow: hidden;
    text-overflow: ellipsis;
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
  gap: 6px;
  color: #9ca3af;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
  svg { 
    color: #9ca3af;
    flex-shrink: 0;
  }
`;

export const RoomInfoCardStyle = css`
  width: 100%;
  text-align: left;
  display: flow-root;
  h1, h2 { margin-top: 0; }
`;

export const ReservationsCardStyle = css`
  width: 100%;
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
  color: #111827;
  margin-bottom: 8px;
  margin-top: -8px; 
  font-size: 1.25rem; 
  font-weight: 700;
  line-height: 1.2;
`;

export const EquipmentContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const CheckInButtonStyle = css`
  width: 75%;
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
  color: #111827;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 750;
  line-height: 1.2;
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
  background: ${WHITE_COLOR};
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-left: 4px solid ${({ $isSuccess }) => $isSuccess ? SUCCESS_COLOR : DANGER_COLOR};
  text-align: center;
`;

export const CheckInModalIconWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckInMessageText = styled.p`
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
  color: ${DARK_COLOR};
  text-align: center;
`;

export const CheckInCloseButton = styled.button`
  background: ${PRIMARY_COLOR};
  color: ${WHITE_COLOR};
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
  color: #000000;
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

export const ReservationsSectionSeparator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #111827;
  margin-bottom: 8px;
  margin-top: 1.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
  
  svg {
    width: 20px;
    height: 20px;
    color: #2563eb;
  }
`;

export const ReservationSectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #111827;
  margin-bottom: 8px;
  margin-top: -8px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
  
  svg {
    width: 20px;
    height: 20px;
    color: #2563eb;
  }
`;

// Estilos de QR
export const QRContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  margin: 8px auto 0;
  padding: 12px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const QRModalOverlay = styled.div`
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

export const QRModalCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 90%;
  text-align: center;
`;

export const QRModalIcon = styled.div<{ $isSuccess?: boolean }>`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $isSuccess }) => ($isSuccess ? "#10b981" : "#6b7280")};
  color: white;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const QRModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1rem;
`;

export const QRModalMessage = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 0 0 2rem;
  line-height: 1.5;
`;

export const QRModalButton = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #1d4ed8;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

export const QRModalLoader = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f4f6;
  border-top: 4px solid #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

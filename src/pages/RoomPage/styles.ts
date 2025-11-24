import styled, { css } from "styled-components";
import type { ThemeType } from "../../theme/Types";
import { themes } from "../../theme/Theme";
import {
  FinishedEventIconWrapper,
  InProgressEventIconWrapper,
} from "../../shared/components/EventStatusIcon";
import {
  SUCCESS_COLOR,
  DANGER_COLOR,
  PRIMARY_COLOR,
  WHITE_COLOR,
} from "../../assets/colors/global-colors";

export const FinishedEventIcon = FinishedEventIconWrapper;
export const InProgressEventIcon = InProgressEventIconWrapper;

// Color Constants
const COLOR_WHITE = "#ffffff";
const COLOR_BLACK = "#000000";
const COLOR_BLUE_PRIMARY = "#0b5be7";
const COLOR_BLUE_LIGHT = "#2563eb";
const COLOR_BLUE_HOVER = "#1d4ed8";
const COLOR_BLUE_DARK = "#0f49b4ff";
const COLOR_BLUE_DARKER = "#041755ff";
const COLOR_RED_DARK = "#470c0cff";
const COLOR_CYAN = "#06b6d4";
const COLOR_GRAY_BORDER = "#eef2f7";
const COLOR_GRAY_LIGHT_BORDER = "#e5e7eb";
const COLOR_GRAY_DARK_1 = "#1f2937";
const COLOR_GRAY_DARK_2 = "#6b7280";
const COLOR_GRAY_LIGHT_1 = "#f9fafb";
const COLOR_GRAY_LIGHT_2 = "#f3f4f6";
const COLOR_GRAY_MEDIUM = "#9ca3af";
const COLOR_GREEN = "#10b981";
const COLOR_DARK_TEXT = "#111827";
const COLOR_MODAL_OVERLAY = "rgba(0, 0, 0, 0.5)";

export const RoomPageContainer = styled.div<{ $theme: ThemeType }>`
  width: 100%;
  max-width: 100%;
  padding: 5px 20px 10px 20px;
  box-sizing: border-box;
  overflow-x: hidden;

  min-height: 100vh;
  background: ${({ $theme }) => themes[$theme].BACKGROUND_COLOR};
  padding-bottom: 80px;
  transition: background 0.3s ease;

  @media (min-width: 768px) {
    padding: 10px 40px 20px 40px;
  }
  @media (min-width: 1024px) {
    padding: 10px 80px 20px 80px;
  }
  @media (min-width: 1440px) {
    padding: 10px 160px 20px 160px;
  }
`;

export const PageInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: +2.5px auto 0;
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: 75px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const ColumnaPrincipal = styled.main`
  display: grid;
  gap: 25px;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const ColumnaLateral = styled.aside`
  display: grid;
  gap: 25px;
  align-content: start;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const FilaEstado = styled.div<{ $theme: ThemeType }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  gap: 8px;
  border-top: 1px solid ${COLOR_GRAY_BORDER};
  &:first-of-type {
    border-top: none;
  }
  span {
    color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
    font-size: 14px;
  }
  strong {
    color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
    font-weight: 700;
    font-size: 14px;
  }
`;

export const ReservationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 75%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`;

export const ReservationItem = styled.div<{ $theme: ThemeType }>`
  display: grid;
  grid-template-columns: 40px 1fr auto;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background: ${({ $theme }) => ($theme === "dark" ? COLOR_GRAY_DARK_1 : COLOR_GRAY_LIGHT_1)};
  border-radius: 8px;
  border: 1px solid ${({ $theme }) => ($theme === "dark" ? COLOR_GRAY_MEDIUM : COLOR_GRAY_LIGHT_2)};
  width: 100%;
  box-sizing: border-box;
  transition: background 0.3s ease, border-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 6px 8px;
    gap: 8px;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: ${COLOR_BLUE_PRIMARY};
  color: ${COLOR_WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 14px;
  flex-shrink: 0;
`;

export const ResInfo = styled.div<{ $theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  span {
    color: ${({ $theme }) =>
      $theme === "dark" ? COLOR_WHITE : themes[$theme].TEXT_COLOR};
    font-weight: 700;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.3s ease;
  }
  small {
    color: ${({ $theme }) =>
      $theme === "dark" ? COLOR_WHITE : themes[$theme].TEXT_COLOR};
    font-size: 12px;
    transition: color 0.3s ease;
  }
  gap: 2px;
  line-height: 1.5;
  min-width: 0;
  flex: 1;
`;

export const ResRight = styled.div<{ $theme: ThemeType }>`
  display: inline-flex;
  align-items: center;
  color: ${({ $theme }) =>
    $theme === "dark" ? COLOR_WHITE : themes[$theme].TEXT_COLOR};
  gap: 6px;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
  transition: color 0.3s ease;
  svg {
    color: ${COLOR_GRAY_MEDIUM};
    flex-shrink: 0;
  }
`;

export const RoomInfoCardStyle = css`
  width: 100%;
  text-align: left;
  display: flow-root;
  h1, h2 { margin-top: 0; }

  @media (max-width: 768px) {
    padding: 0.9rem 0.4rem;
    h1, h2 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.9rem;
    }
`;

export const ReservationsCardStyle = css<{ $theme: ThemeType }>`
  h1 {
    color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
    margin-bottom: 8px;
    font-size: 24px;
  }
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.7rem 0.4rem;
    h1 {
      font-size: 0rem;
      padding: 0.7rem 0.4rem;
      margin-bottom: 1px;
    }
      h2 {
      font-size: 0rem;
      padding: 0.7rem 0.4rem;
      margin-bottom: 0.35rem;
    }
    p,
    span {
      font-size: 0.9rem;
    }
  }
`;

export const CurrentStatusCardStyle = css`
  width: 100%;
  text-align: left;
  h3 {
    margin: 0 0 12px;
    font-size: 18px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 0.4rem;

    h3 {
      font-size: 1rem;
      margin-bottom: 0.4rem;
    }
  }
`;

export const QRCardStyle = css`
  width: 100%;
  text-align: center;
  h3 {
    margin: 0 0 12px;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    margin: 0 0 16px;
    color: ${COLOR_WHITE};
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 0.4rem;

    h3 {
      font-size: 1rem;
      margin-bottom: 0.4rem;
    }

    p {
      font-size: 0.9rem;
      margin-bottom: 0.75rem;
    }
  }
`;

export const TitleStyle = styled.h2<{ $theme: ThemeType }>`
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  margin-bottom: 8px;
  margin-top: -8px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-bottom: 4px;
  }
`;

export const CheckInTitleStyle = styled.h2<{ $theme: ThemeType }>`
  color: ${({ $theme }) =>
    $theme === "dark" ? COLOR_CYAN : themes[$theme].TEXT_COLOR};
  margin-bottom: 8px;
  margin-top: -8px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 4px;
  }
`;

export const EquipmentContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const CheckInButtonStyle = css<{ $theme: ThemeType }>`
  width: 75%;
  justify-content: center;
  gap: 10px;
  background: rgba(0, 66, 206, 1);
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(2, 8, 23, 0.05);
  &:hover {
    background: rgba(92, 0, 104, 1);
  }
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

export const RoomTitle = styled.h1<{ $theme: ThemeType }>`
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  margin: 0;
  font-size: 1.5rem;
  font-weight: 750;
  line-height: 1.2;
`;

export const RoomCapacityInfo = styled.div<{ $theme: ThemeType }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  font-size: 14px;
  margin-top: 6px;
`;

export const EQUIPMENT_ICON_SIZE = 18;
export const EQUIPMENT_ICON_COLOR = '#2563eb';

export const EquipmentTagStyle = css<{ $theme: ThemeType }>`
  background: ${({ $theme }) =>
    $theme === "dark" ? COLOR_GRAY_DARK_1 : COLOR_GRAY_LIGHT_2} !important;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR} !important;
  border: 1px solid ${({ $theme }) => themes[$theme].BORDER_COLOR} !important;
  font-weight: 500;
  padding: 8px 12px;
  gap: 6px;
`;

export const CheckInSubtitle = styled.p<{ $theme: ThemeType }>`
  font-size: 0.875rem;
  color: ${({ $theme }) => ($theme === "dark" ? COLOR_WHITE : COLOR_BLACK)};
  margin-bottom: 1rem;
  text-align: center;
`;

export const NoEquipmentMessage = styled.p<{ $theme: ThemeType }>`
  font-size: 0.875rem;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
`;

export const CheckInModalOverlay = styled.div<{ $theme: ThemeType }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ $theme }) => themes[$theme].BACKGROUND_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const CheckInModalContent = styled.div<{
  $isSuccess: boolean;
  $theme: ThemeType;
}>`
  background: ${({ $theme }) =>
    $theme === "dark" ? themes[$theme].CONTAINER_COLOR : WHITE_COLOR};
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-left: 4px solid
    ${({ $isSuccess }) => ($isSuccess ? SUCCESS_COLOR : DANGER_COLOR)};
  text-align: center;
  transition: background 0.3s ease;
`;

export const CheckInMessageText = styled.p<{ $theme: ThemeType }>`
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
  text-align: center;
  color: ${({ $theme }) => ($theme === "dark" ? COLOR_WHITE : COLOR_BLACK)};
  transition: color 0.3s ease;
`;

export const CheckInModalIconWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: ${COLOR_BLACK};
  padding: 2rem;
  margin: 0;
`;

export const NoReservationsMessage = styled.p<{ $theme: ThemeType }>`
  text-align: center;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  font-size: 0.875rem;
  padding: 1rem 0;
  margin: 0;
`;

export const ReservationsSectionSeparator = styled.div<{ $theme: ThemeType }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  margin-bottom: 8px;
  margin-top: 1.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;

  svg {
    width: 20px;
    height: 20px;
    color: ${COLOR_BLUE_LIGHT};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 4px;
  }
`;

export const ReservationSectionTitle = styled.div<{ $theme: ThemeType }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  margin-bottom: 8px;
  margin-top: -8px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;

  svg {
    width: 20px;
    height: 20px;
    color: ${COLOR_BLUE_LIGHT};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 4px;
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
  background: ${COLOR_WHITE};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const QRModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${COLOR_MODAL_OVERLAY};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const QRModalCard = styled.div`
  background: ${COLOR_WHITE};
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
  background: ${({ $isSuccess }) => ($isSuccess ? COLOR_GREEN : COLOR_GRAY_DARK_2)};
  color: ${COLOR_WHITE};

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const QRModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${COLOR_DARK_TEXT};
  margin: 0 0 1rem;
`;

export const QRModalMessage = styled.p`
  font-size: 1rem;
  color: ${COLOR_GRAY_DARK_2};
  margin: 0 0 2rem;
  line-height: 1.5;
`;

export const QRModalButton = styled.button`
  background: ${COLOR_BLUE_LIGHT};
  color: ${COLOR_WHITE};
  border: none;
  border-radius: 8px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${COLOR_BLUE_HOVER};
  }

  &:disabled {
    background: ${COLOR_GRAY_MEDIUM};
    cursor: not-allowed;
  }
`;

export const QRModalLoader = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${COLOR_GRAY_LIGHT_2};
  border-top: 4px solid ${COLOR_BLUE_LIGHT};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const getCheckInButtonStyle = (isDisabled: boolean, theme: ThemeType) =>
  css`
    width: 75%;
    justify-content: center;
    gap: 10px;
    background: ${COLOR_BLUE_DARK};
    color: ${COLOR_WHITE};
    border: 1px solid ${themes[theme].BORDER_COLOR};
    box-shadow: 0 2px 8px rgba(2, 8, 23, 0.05);
    border-radius: 8px;
    transition: background 0.3s ease, border-color 0.3s ease;
    &:hover {
      background: ${theme === "dark" ? COLOR_BLUE_DARKER : COLOR_RED_DARK};
    }
    opacity: ${isDisabled ? 0.5 : 1};
    pointer-events: ${isDisabled ? "none" : "auto"};
    margin-bottom: 12px;

    @media (max-width: 768px) {
      width: 65%;
      font-size: 0.75rem;
      padding: 5px 8px;
    }
  `;

export const CheckInSectionStyle = (theme: ThemeType) => css`
  border: 1px solid ${theme === "dark" ? themes[theme].BORDER_COLOR : COLOR_GRAY_LIGHT_BORDER} !important;
  background: ${theme === "dark"
    ? themes[theme].CONTAINER_COLOR
    : COLOR_WHITE} !important;
  transition: border-color 0.3s ease, background 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.8rem 0.4rem;
    h2 {
    text-align: left;
      font-size: 0.8rem;
      margin-bottom: 0.4rem;
    }

    p {
    text-align: left;
      font-size: 0.8rem;
      line-height: 1.35;
      margin-bottom: 0.25rem;
    }
  }
`;

export const QRDescriptionText = styled.p<{ $theme: ThemeType }>`
  color: ${({ $theme }) =>
    $theme === "dark" ? COLOR_WHITE : COLOR_BLACK} !important;
  text-align: center;
  margin: 0 0 1rem 0;
  font-size: 0.875rem;
  transition: color 0.3s ease;
`;
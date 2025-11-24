import styled, { css } from "styled-components";
import {
  EventIconWrapper as SharedEventIconWrapper,
  FinishedEventIconWrapper as SharedFinishedEventIconWrapper,
  InProgressEventIconWrapper as SharedInProgressEventIconWrapper
} from "../../shared/components/EventStatusIcon";
import { themes } from "../../theme/Theme";
import type { ThemeType } from "../../theme/Types";

// Color Constants
const COLOR_GREEN_FREE = "#16a249";
const COLOR_RED_OCCUPIED = "#ef4343";
const COLOR_HOVER_SHADOW = "rgba(0, 0, 0, 0.15)";

export const ROOM_PAGE_COLORS = {
  roomTitleFree: COLOR_GREEN_FREE,
  roomTitleOccupied: COLOR_RED_OCCUPIED,
  roomBorder: "#B6CBD5",
  roomBoxShadow: "#0000001a",
  roomText: "#64748b",
};

export const HomePageStyled = styled.section<{ $theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: ${({ $theme }) => themes[$theme].BACKGROUND_COLOR};
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    height: auto;
    overflow-x: hidden;
  }
`;

export const RoomStatusContainer = styled.section`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;
  width: 90%;
  div:has(> select) {
    width: 400px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px 0;
    div:has(> select) {
    width: 100%;
  }
  }
`;

export const RoomListContainer = styled(RoomStatusContainer)`
 flex-wrap: wrap;
`;

export const SelectFilterContainer = styled(RoomStatusContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
  justify-content: center;
  align-items: center;
  width: 90%;
  justify-content: center;
  svg {
    display: none;
  }
  width: 90%;
  padding: 0.5rem 0;
  gap: 0.5rem;
  }
`;

export const AllRoomsCardContainerStyles = ($theme: ThemeType) => css`
  border-radius: 0.75rem;
  border: 1px solid ${themes[$theme].BORDER_COLOR};
  box-shadow: 0 1px 2px ${ROOM_PAGE_COLORS.roomBoxShadow};
  padding: 1.5rem;
  transition: border-color 0.3s ease;
  h2 {
    margin: 0 0 0.5rem;
    font-weight: bold;
  }
  p {
    margin: 0;
  }
    @media (max-width: 768px) {
    padding: 0.45rem 0.56rem;
    min-height: 64px;
    h2 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.72rem;
    }
  }
`;

export const FreeRoomsCardContainerStyles = ($theme: ThemeType) => css`
  border-radius: 0.75rem;
  border: 1px solid ${themes[$theme].BORDER_COLOR};
  box-shadow: 0 1px 2px ${ROOM_PAGE_COLORS.roomBoxShadow};
  padding: 1.5rem;
  transition: border-color 0.3s ease;
  h2 {
    margin: 0 0 0.5rem;
    color: ${ROOM_PAGE_COLORS.roomTitleFree};
    font-weight: bold;
  }
  p {
    margin: 0;
  }
  @media (max-width: 768px) {
    padding: 0.45rem 0.56rem;
    min-height: 64px;
    h2 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.72rem;
    }
  }
`;

export const OccupiedRoomsCardContainerStyles = ($theme: ThemeType) => css`
  border-radius: 0.75rem;
  border: 1px solid ${themes[$theme].BORDER_COLOR};
  box-shadow: 0 1px 2px ${ROOM_PAGE_COLORS.roomBoxShadow};
  padding: 1.5rem;
  transition: border-color 0.3s ease;
  h2 {
    margin: 0 0 0.5rem;
    color: ${ROOM_PAGE_COLORS.roomTitleOccupied};
    font-weight: bold;
  }
  p {
    margin: 0;
  }
    @media (max-width: 768px) {
    padding: 0.45rem 0.56rem;
    min-height: 64px;
    h2 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.72rem;
    }
  }
`;
export const RoomListContainerStyles = ($theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 0.75rem;
  border: 1px solid ${themes[$theme].BORDER_COLOR};
  box-shadow: 0 1px 2px ${ROOM_PAGE_COLORS.roomBoxShadow};
  padding: 1.5rem;
  width: 28%;
  cursor: pointer;
  transition: box-shadow 0.2s ease, border-color 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px ${COLOR_HOVER_SHADOW};
  }

  p {
    margin: 0;
  }

  @media (max-width: 1024px) {
    width: 32%;
  }

  @media (max-width: 768px) {
    width: 90%;
     h3, h4 {
       white-space: normal;
       word-break: break-word;
     }
   }
`;

export const RoomStatusSectionStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 1.2rem;
    margin: 0 0 0.5rem;
    font-weight: bold;
  }
`;

export const RoomInfoSectionStyles = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const RoomEventsSectionStyles = styled.div`
  width: 100%;
`;

export const RoomEventItemStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  margin-top: 0rem;
  p {
    margin: 0;
    font-weight: bold;
  }
`;

export const RoomEventTimeSectionStyles = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  p {
    margin: 0;
    font-weight: normal;
  }
`;

export const EventIconWrapper = styled(SharedEventIconWrapper)`
  margin-right: 0.25rem;
`;

export const FinishedEventIconWrapper = styled(SharedFinishedEventIconWrapper)`
  margin-right: 0.25rem;
`;

export const InProgressEventIconWrapper = styled(SharedInProgressEventIconWrapper)`
  margin-right: 0.25rem;
`;
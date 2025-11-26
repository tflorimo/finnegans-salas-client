import styled, { css } from "styled-components";
import {
  EventIconWrapper as SharedEventIconWrapper,
  FinishedEventIconWrapper as SharedFinishedEventIconWrapper,
  InProgressEventIconWrapper as SharedInProgressEventIconWrapper,
} from "../../shared/components/EventStatusIcon";
import { media } from "../../shared/styles/media";
import { themes } from "../../theme/Theme";
import type { ThemeType } from "../../theme/Types";

// Color Constants
const COLOR_GREEN_FREE = "#16a249";
const COLOR_RED_OCCUPIED = "#ef4343";
const COLOR_HOVER_SHADOW = "rgba(0, 0, 0, 0.15)";
const COLOR_ROOM_BORDER = "#B6CBD5";
const COLOR_ROOM_BOX_SHADOW = "#0000001a";
const COLOR_HEATMAP_BUTTON_BG = "#ffffff";
const COLOR_HEATMAP_BUTTON_TEXT = "#333333";
const COLOR_HEATMAP_BUTTON_BORDER = "#d9d9d9";
const COLOR_HEATMAP_BUTTON_HOVER_BORDER = "#f5f5f5";
const COLOR_ROOM_TEXT = "#64748b";

export const ROOM_PAGE_COLORS = {
  roomTitleFree: COLOR_GREEN_FREE,
  roomTitleOccupied: COLOR_RED_OCCUPIED,
  roomBorder: COLOR_ROOM_BORDER,
  roomBoxShadow: COLOR_ROOM_BOX_SHADOW,
  heatmapButtonBg: COLOR_HEATMAP_BUTTON_BG,
  heatmapButtonText: COLOR_HEATMAP_BUTTON_TEXT,
  heatmapButtonBorder: COLOR_HEATMAP_BUTTON_BORDER,
  heatmapButtonHoverBorder: COLOR_HEATMAP_BUTTON_HOVER_BORDER,
  roomText: COLOR_ROOM_TEXT,
};

export const HomePageStyled = styled.section<{ $theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: ${({ $theme }) => themes[$theme].BACKGROUND_COLOR};
  transition: background 0.3s ease;

  ${media.md} {
    height: auto;
    overflow-x: hidden;
    padding: 0 1rem;
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
  ${media.xs} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
    padding: 0.5rem;
    gap: 0.5rem;
    div:has(> select) {
    width: 100%;
  }
  }
`;

export const RoomListContainer = styled(RoomStatusContainer)`
 flex-wrap: wrap;
`;

export const SelectActionsContainer = styled(RoomStatusContainer)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  width: 90%;

  ${media.md} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.0rem;
    padding: 0.5rem;
  }
`;

export const SelectFilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  ${media.md} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    svg {
      display: none;
    }
    padding: 0;
    gap: 0;
    
    > * {
      margin-bottom: 0.9rem;
    }
    
    > *:last-child {
      margin-bottom: 0;
    }
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
    ${media.md} {
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
  ${media.md} {
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
    ${media.md} {
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

  ${media.lg} {
    width: 32%;
  }

  ${media.md} {
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

export const InProgressEventIconWrapper = styled(
  SharedInProgressEventIconWrapper
)`
  margin-right: 0.25rem;
`;

export const HeatmapButtonStyle = ($theme: ThemeType) => css`
  width: 280px;
  margin-left: auto;
  margin-right: 5%;
  background: ${themes[$theme].CONTAINER_COLOR};
  color: ${themes[$theme].TEXT_COLOR};
  border: 1px solid ${ROOM_PAGE_COLORS.heatmapButtonBorder};

  &:hover {
    background: ${themes[$theme].BACKGROUND_COLOR};
  }

  ${media.md} {
    width: 90%;
    max-width: 90%;
    font-size: 0.875rem;
    margin-left: 0;
    margin-right: 0;
  }
`;
import styled, { css } from "styled-components";
import { 
  EventIconWrapper as SharedEventIconWrapper,
  FinishedEventIconWrapper as SharedFinishedEventIconWrapper, 
  InProgressEventIconWrapper as SharedInProgressEventIconWrapper 
} from "../../shared/components/EventStatusIcon";

export const ROOM_PAGE_COLORS = {
  roomTitleFree: "#16a249",
  roomTitleOccupied: "#ef4343",
  roomBorder: "#B6CBD5",
  roomBoxShadow: "#0000001a",
  roomText: "#64748b",
};

export const HomePageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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
`;

export const RoomListContainer = styled(RoomStatusContainer)`
  flex-wrap: wrap;
`;

export const SelectFilterContainer = styled(RoomStatusContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const AllRoomsCardContainerStyles = css`
  border-radius: 0.75rem;
  border-width: 1px;
  border-color: ${ROOM_PAGE_COLORS.roomBorder};
  box-shadow: 0 1px 2px ${ROOM_PAGE_COLORS.roomBoxShadow};
  padding: 1.5rem;
  h2 {
    margin: 0 0 0.5rem;
    font-weight: bold;
  }
  p {
    margin: 0;
  }
`;

export const FreeRoomsCardContainerStyles = css`
  border-radius: 0.75rem;
  border-width: 1px;
  border-color: ${ROOM_PAGE_COLORS.roomBorder};
  box-shadow: 0 1px 2px ${ROOM_PAGE_COLORS.roomBoxShadow};
  padding: 1.5rem;
  h2 {
    margin: 0 0 0.5rem;
    color: ${ROOM_PAGE_COLORS.roomTitleFree};
    font-weight: bold;
  }
  p {
    margin: 0;
  }
`;

export const OccupiedRoomsCardContainerStyles = css`
  border-radius: 0.75rem;
  border-width: 1px;
  border-color: ${ROOM_PAGE_COLORS.roomBorder};
  box-shadow: 0 1px 2px ${ROOM_PAGE_COLORS.roomBoxShadow};
  padding: 1.5rem;
  h2 {
    margin: 0 0 0.5rem;
    color: ${ROOM_PAGE_COLORS.roomTitleOccupied};
    font-weight: bold;
  }
  p {
    margin: 0;
  }
`;
export const RoomListContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 0.75rem;
  border: 1px solid ${ROOM_PAGE_COLORS.roomBorder};
  box-shadow: 0 1px 2px ${ROOM_PAGE_COLORS.roomBoxShadow};
  padding: 1.5rem;
  width: 28%;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  p {
    margin: 0;
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
    color: ${ROOM_PAGE_COLORS.roomText};
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

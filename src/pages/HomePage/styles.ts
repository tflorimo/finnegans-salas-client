import styled, { css } from "styled-components";
import { 
  EventIconWrapper as SharedEventIconWrapper,
  FinishedEventIconWrapper as SharedFinishedEventIconWrapper, 
  InProgressEventIconWrapper as SharedInProgressEventIconWrapper 
} from "../../shared/components/EventStatusIcon";
import type { ThemeType } from "../../theme/Types";
import { themes } from "../../theme/Theme";

export const ROOM_PAGE_COLORS = {
  roomTitleFree: "#16a249",
  roomTitleOccupied: "#ef4343",
  roomBorder: "#B6CBD5",
  roomBoxShadow: "#0000001a",
  roomText: "#64748b",
};

export const HomePageStyled = styled.section<{ $theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${({ $theme }) => themes[$theme].BACKGROUND_COLOR};
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    padding: 1.25rem 0.15rem 1.5rem;
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

  @media (max-width: 768px) {
-    flex-direction: column;
-    align-items: stretch;
-    width: 100%;
-    padding: 0.5rem 0.75rem;
-    gap: 0.5rem;
-
-    div:has(> select) {
-      width: 100%;
-    }
+    flex-direction: row;
+    align-items: center;
+    justify-content: space-between;
+    width: 100%;
+    padding: 0.4rem 0.6rem;
+    gap: 0.5rem;

+    & > * {
+      flex: 1 1 28%;
    min-width: 0;
    max-width: 30%;
    box-sizing: border-box;
+    }
+
+    div:has(> select) {
+      max-width: 100%;
+      width: 100%;
+    }
  }
`;

export const RoomListContainer = styled(RoomStatusContainer)`
 flex-wrap: wrap;

  @media (max-width: 768px) {
-    display: grid;
-    width: 100%;
-    padding: 0.75rem 0.75rem 2rem;
-
-    grid-template-columns: repeat(2, minmax(0, 1fr));
-
-    column-gap: 2.50rem;
-    row-gap: 1.5rem;
+    display: grid;
+    width: 100%;
+    padding: 0.6rem 0.6rem 1rem;
+
+    grid-template-columns: repeat(2, minmax(0, 1fr));
+    column-gap: 1rem;
+    row-gap: 0.9rem;
}
`;

export const SelectFilterContainer = styled(RoomStatusContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
  justify-content: center;
  align-items: stretch;
  svg {
    display: none;
  }
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0.5rem 0.75rem;
  gap: 0.5rem;
  & > * {
    width: 88%;
    margin-left: 5%;
    padding-right: 1rem;
    box-sizing: border-box;
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
  gap: 0.75rem;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 0.75rem;
  border: 1px solid ${themes[$theme].BORDER_COLOR};
  box-shadow: 0 1px 2px ${ROOM_PAGE_COLORS.roomBoxShadow};
  padding: 1.2rem;
  width: 28%;
  cursor: pointer;
  transition: box-shadow 0.2s ease, border-color 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  p {
    margin: 0;
  }

  @media (max-width: 1024px) {
    width: 32%;
  }

  @media (max-width: 768px) {
    width: 100%;
-    padding: 0.45rem;
-    gap: 0.32rem;
-    border-radius: 0.54rem;
-    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
-    min-height: 92px;
-    display: flex;
-    flex-direction: column;
-    justify-content: center;
+    padding: 0.36rem;
+    gap: 0.28rem;
+    border-radius: 0.5rem;
+    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
+    min-height: 76px;
+    max-height: 140px;
+    display: flex;
+    flex-direction: column;
+    justify-content: space-between;
+    overflow: hidden;
 
     h3, h4 {
-      font-size: 0.92rem;
-      margin: 0 0 0.18rem;
-      line-height: 1.05;
+      font-size: 0.9rem;
+      margin: 0 0 0.14rem;
+      line-height: 1.03;
       white-space: normal;
       word-break: break-word;
     }
 
     p {
-      font-size: 0.74rem;
-      line-height: 1.08;
-      margin: 0;
+      font-size: 0.72rem;
+      line-height: 1.06;
+      margin: 0;
     }
 
     .tag-badge, .tag {
-      font-size: 0.65rem;
-      padding: 0.15rem 0.36rem;
+      font-size: 0.62rem;
+      padding: 0.12rem 0.32rem;
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
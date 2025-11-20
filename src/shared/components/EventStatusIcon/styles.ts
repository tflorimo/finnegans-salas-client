import styled from "styled-components";
import {
  EVENT_STATUS_FINISHED_COLOR,
  EVENT_STATUS_IN_PROGRESS_COLOR,
  EVENT_STATUS_UPCOMING_COLOR,
} from "../../../assets/colors/global-colors";

export const EventIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const FinishedEventIconWrapper = styled(EventIconWrapper)`
  color: ${EVENT_STATUS_FINISHED_COLOR};
`;

export const InProgressEventIconWrapper = styled(EventIconWrapper)`
  color: ${EVENT_STATUS_IN_PROGRESS_COLOR};
`;

export const UpcomingEventIconWrapper = styled(EventIconWrapper)`
  color: ${EVENT_STATUS_UPCOMING_COLOR};
`;

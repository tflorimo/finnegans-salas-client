import styled from "styled-components";

export const EventIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const FinishedEventIconWrapper = styled(EventIconWrapper)`
  color: #10b981;
`;

export const InProgressEventIconWrapper = styled(EventIconWrapper)`
  color: #2563eb;
`;

export const UpcomingEventIconWrapper = styled(EventIconWrapper)`
  color: #9ca3af;
`;

import { Clock, CheckCircle } from "lucide-react";
import { getEventStatus } from "../../utils/event.utils";
import type { EventStatusIconProps } from "./types";

export const EventStatusIcon = ({
  startTime,
  endTime,
  eventId,
  currentEventId,
  size = 16,
  finishedColor = "#10b981",
  inProgressColor = "#2563eb",
  upcomingColor = "#9ca3af",
  FinishedWrapper,
  InProgressWrapper,
  UpcomingWrapper,
}: EventStatusIconProps) => {
  const eventStatus = getEventStatus(startTime, endTime);
  
  const isCurrentEvent = eventId && currentEventId && eventId === currentEventId;

  if (eventStatus === 'finished') {
    const icon = <CheckCircle size={size} color={finishedColor} />;
    return FinishedWrapper ? <FinishedWrapper>{icon}</FinishedWrapper> : icon;
  }

  if (eventStatus === 'in-progress' && isCurrentEvent) {
    const icon = <Clock size={size} color={inProgressColor} />;
    return InProgressWrapper ? <InProgressWrapper>{icon}</InProgressWrapper> : icon;
  }

  const icon = <Clock size={size} color={upcomingColor} />;
  return UpcomingWrapper ? <UpcomingWrapper>{icon}</UpcomingWrapper> : icon;
};

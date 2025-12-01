import { CheckCircle, Clock } from "lucide-react";

import {
  EVENT_STATUS_FINISHED_COLOR,
  EVENT_STATUS_IN_PROGRESS_COLOR,
  EVENT_STATUS_UPCOMING_COLOR,
} from "../../../assets/colors/global-colors";
import { getEventStatus } from "../../utils/event.utils";
import type { EventStatusIconProps } from "./types";

export const EventStatusIcon = ({
  startTime,
  endTime,
  eventId,
  currentEventId,
  size = 16,
  finishedColor = EVENT_STATUS_FINISHED_COLOR,
  inProgressColor = EVENT_STATUS_IN_PROGRESS_COLOR,
  upcomingColor = EVENT_STATUS_UPCOMING_COLOR,
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

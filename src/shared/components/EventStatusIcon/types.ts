export type EventStatus = 'finished' | 'in-progress' | 'upcoming';
export type IconWrapperComponent = React.ComponentType<{ children: React.ReactNode }>;

export interface EventStatusIconProps {
  startTime: Date | string;
  endTime: Date | string;
  eventId?: string;
  currentEventId?: string;
  size?: number;
  finishedColor?: string;
  inProgressColor?: string;
  upcomingColor?: string;
  FinishedWrapper?: IconWrapperComponent;
  InProgressWrapper?: IconWrapperComponent;
  UpcomingWrapper?: IconWrapperComponent;
}

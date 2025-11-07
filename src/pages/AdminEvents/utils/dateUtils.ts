export const formatDate = (iso: Date): string =>
  iso.toLocaleDateString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

export const formatTime = (iso: Date): string =>
  iso.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit" 
  });

export const formatTimeRange = (start: Date, end: Date): string =>
  `${formatTime(start)} - ${formatTime(end)}`;

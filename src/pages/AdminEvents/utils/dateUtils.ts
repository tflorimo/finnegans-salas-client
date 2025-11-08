export const formatDate = (iso: Date | string): string => {
  const date = typeof iso === 'string' ? new Date(iso) : iso;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
};

export const formatTime = (iso: Date | string): string => {
  const date = typeof iso === 'string' ? new Date(iso) : iso;
  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit" 
  });
};

export const formatTimeRange = (start: Date | string, end: Date | string): string =>
  `${formatTime(start)} - ${formatTime(end)}`;

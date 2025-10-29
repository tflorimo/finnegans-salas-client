export const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString(undefined, { 
    year: "numeric", 
    month: "2-digit", 
    day: "2-digit" 
  });

export const formatTime = (iso: string): string =>
  new Date(iso).toLocaleTimeString(undefined, { 
    hour: "2-digit", 
    minute: "2-digit" 
  });

export const formatTimeRange = (start: string, end: string): string =>
  `${formatTime(start)} - ${formatTime(end)}`;

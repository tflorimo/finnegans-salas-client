export const formatTimestamp = (timestamp: any): string => {
  if (!timestamp) return "N/A";
  const date = new Date(timestamp);
  return date.toLocaleString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatTimeRange = (startTime: any, endTime: any): string => {
  if (!startTime || !endTime) return "N/A";
  
  const start = new Date(startTime);
  const end = new Date(endTime);
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-AR", { 
      hour: "2-digit", 
      minute: "2-digit",
      hour12: false 
    });
  };
  
  return `${formatTime(start)} - ${formatTime(end)}`;
};

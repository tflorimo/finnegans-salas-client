export const isEventFinished = (endTime: Date | string): boolean => {
  const now = new Date();
  const eventEndTime = new Date(endTime);
  return eventEndTime <= now;
};

export const isEventInProgress = (startTime: Date | string, endTime: Date | string): boolean => {
  const now = new Date();
  const eventStartTime = new Date(startTime);
  const eventEndTime = new Date(endTime);
  return now >= eventStartTime && now <= eventEndTime;
};

export const getEventStatus = (startTime: Date | string, endTime: Date | string): 'finished' | 'in-progress' | 'upcoming' => {
  const now = new Date();
  const eventStartTime = new Date(startTime);
  const eventEndTime = new Date(endTime);
  
  if (eventEndTime <= now) {
    return 'finished';
  }
  
  if (now >= eventStartTime && now <= eventEndTime) {
    return 'in-progress';
  }
  
  return 'upcoming';
};

import type { EventResponseDTO } from "../../../shared/types/event.types";
import type { RoomResponseDTO } from "../../../shared/types/room.types";

export const isCheckInAlreadyDoneError = (errorMessage: string): boolean => {
  const lowerMessage = errorMessage.toLowerCase();
  return (
    lowerMessage.includes('ya tiene el check-in realizado') ||
    lowerMessage.includes('check-in realizado')
  );
};

export const isWithinCheckInTimeWindow = (startTime: Date | string, endTime: Date | string): boolean => {
  const now = new Date();
  const eventStartTime = new Date(startTime);
  const eventEndTime = new Date(endTime);
  const tenMinutesBefore = new Date(eventStartTime.getTime() - 10 * 60 * 1000);
  const fifteenMinutesAfter = new Date(eventStartTime.getTime() + 15 * 60 * 1000);

  return now >= tenMinutesBefore && now <= fifteenMinutesAfter && now < eventEndTime;
};

export const isUserAttendee = (event: EventResponseDTO, userEmail: string): boolean => {
  return event.attendees.some((attendee: { email: string }) => attendee.email === userEmail);
};

export const canCheckIn = (
  event: EventResponseDTO | null | undefined,
  userEmail: string | null
): boolean => {
  if (!event || !userEmail) {
    return false;
  }

  if (event.checkInStatus !== 'PENDING') {
    return false;
  }

  if (!isUserAttendee(event, userEmail)) {
    return false;
  }

  return isWithinCheckInTimeWindow(event.startTime, event.endTime);
};

export const findCheckInEligibleEvent = (
  room: RoomResponseDTO | undefined,
  userEmail: string | null
): EventResponseDTO | null => {
  if (!room || !userEmail) {
    return null;
  }

  if (room.current_event && canCheckIn(room.current_event, userEmail)) {
    return room.current_event;
  }

  const eligibleEvent = room.events?.find(event => canCheckIn(event, userEmail));
  
  return eligibleEvent || null;
};

export const findAllCheckInEligibleEvents = (
  room: RoomResponseDTO | undefined,
  userEmail: string | null
): EventResponseDTO[] => {
  if (!room || !userEmail) {
    return [];
  }

  const eligibleEvents = room.events?.filter(event => canCheckIn(event, userEmail)) ?? [];
  
  return eligibleEvents;
};


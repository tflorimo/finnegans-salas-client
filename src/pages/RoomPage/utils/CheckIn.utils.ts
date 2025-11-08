import type { EventResponseDTO } from "../../../shared/types/event.types";

export const isWithinCheckInTimeWindow = (startTime: Date | string): boolean => {
  const now = new Date();
  const eventStartTime = new Date(startTime);
  const thirtyMinutesBefore = new Date(eventStartTime.getTime() - 30 * 60 * 1000);
  const fifteenMinutesAfter = new Date(eventStartTime.getTime() + 15 * 60 * 1000);

  return now >= thirtyMinutesBefore && now <= fifteenMinutesAfter;
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

  // Verificar que el estado del check-in sea 'pending'
  if (event.checkInStatus !== 'pending') {
    return false;
  }

  // Verificar que el usuario esté en la lista de asistentes
  if (!isUserAttendee(event, userEmail)) {
    return false;
  }

  return isWithinCheckInTimeWindow(event.startTime);
};

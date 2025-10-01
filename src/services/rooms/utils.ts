import type { RoomEventDetailsDTO } from "./types";
import { isAxiosError } from "axios";

export const FIFTEEN_MINUTES_IN_MS = 15 * 60 * 1000;

export const getErrorMessage = (error: unknown, fallbackMessage: string) => {
  if (isAxiosError<{ message?: string }>(error)) {
    return error.response?.data?.message ?? fallbackMessage;
  }

  if (error instanceof Error) {
    return error.message || fallbackMessage;
  }

  return fallbackMessage;
};

export const findCurrentEvent = (events: RoomEventDetailsDTO[]) => {
  if (!events?.length) return undefined;
  
  const now = new Date().getTime();
  return events.find(event => {
    const startTime = new Date(event.start).getTime();
    const endTime = new Date(event.end).getTime();
    return startTime <= now && now <= endTime;
  });
};

export const hasInvitation = (event: RoomEventDetailsDTO, userId: string) => {
  if (!event) return false;
  return event.guests?.includes(userId) ?? false;
};

export const shouldAllowCheckIn = (events: RoomEventDetailsDTO[], userId: string) => {
  const currentEvent = findCurrentEvent(events);
  if (!currentEvent) return false;

  const isInvited = hasInvitation(currentEvent, userId);
  if (!isInvited) return false;

  const startTime = new Date(currentEvent.start).getTime();
  const canCheckIn = Date.now() - startTime <= FIFTEEN_MINUTES_IN_MS;

  return canCheckIn;
};

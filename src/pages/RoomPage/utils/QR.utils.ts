import type { EventResponseDTO } from "../../../shared/types/event.types";
import type { RoomResponseDTO } from "../../../shared/types/room.types";
import { isWithinCheckInTimeWindow, isUserAttendee, isCheckInAlreadyDoneError } from "./CheckIn.utils";
import { QR_MESSAGES } from "../constants/RoomPage.constants";

export { isCheckInAlreadyDoneError };

export const isEventOverlapping = (title: string): boolean => {
    return title.includes("[SUPERPUESTO]");
};

export const isCheckInExpired = (startTime: Date | string): boolean => {
    const now = new Date();
    const eventStartTime = new Date(startTime);
    const fifteenMinutesAfter = new Date(eventStartTime.getTime() + 15 * 60 * 1000);
    return now > fifteenMinutesAfter;
};

export const isCheckInNotYetAvailable = (startTime: Date | string): boolean => {
    const now = new Date();
    const eventStartTime = new Date(startTime);
    const tenMinutesBefore = new Date(eventStartTime.getTime() - 10 * 60 * 1000);
    return now < tenMinutesBefore;
};

export const findUserEligibleEvent = (
    room: RoomResponseDTO | undefined,
    userEmail: string
): EventResponseDTO | null => {
    if (!room?.events) return null;

    const userEvents = room.events.filter(
        (event) => isUserAttendee(event, userEmail) && event.checkInStatus === "pending"
    );

    if (userEvents.length === 0) return null;

    const now = new Date();
    const sortedEvents = userEvents.sort(
        (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    );

    for (const event of sortedEvents) {
        if (isWithinCheckInTimeWindow(event.startTime, event.endTime)) {
            return event;
        }
    }

    return sortedEvents.find((event) => new Date(event.startTime) > now) || null;
};

export const validateCheckInEligibility = (
    event: EventResponseDTO | null
): { canCheckIn: boolean; reason: string } => {
    if (!event) {
        return { canCheckIn: false, reason: QR_MESSAGES.NO_EVENT_AVAILABLE };
    }

    if (isEventOverlapping(event.title)) {
        return { canCheckIn: false, reason: QR_MESSAGES.OVERLAPPING_EVENT };
    }

    if (isCheckInExpired(event.startTime)) {
        return { canCheckIn: false, reason: QR_MESSAGES.CHECK_IN_EXPIRED };
    }

    if (isCheckInNotYetAvailable(event.startTime)) {
        return { canCheckIn: false, reason: QR_MESSAGES.CHECK_IN_NOT_AVAILABLE };
    }

    if (!isWithinCheckInTimeWindow(event.startTime, event.endTime)) {
        return { canCheckIn: false, reason: QR_MESSAGES.CHECK_IN_NOT_AVAILABLE };
    }

    return { canCheckIn: true, reason: "" };
};

import type { FormattedEventDTO } from "../../../shared/types/room.types";
import { isEventFinished } from "../../../shared/utils/event.utils";

export const selectDisplayEvents = (
    events: FormattedEventDTO[],
    currentEventId: string | undefined
): FormattedEventDTO[] => {
    if (!events || events.length === 0) return [];

    const sortedEvents = [...events].sort((a, b) => {
        const aTime = new Date(a.originalStartTime || a.startTime).getTime();
        const bTime = new Date(b.originalStartTime || b.startTime).getTime();
        return aTime - bTime;
    });

    const upcomingAndCurrentEvents = sortedEvents.filter(
        (event) => !isEventFinished(event.originalEndTime || event.endTime)
    );

    const finishedEvents = sortedEvents.filter((event) =>
        isEventFinished(event.originalEndTime || event.endTime)
    );

    const selectedEvents: FormattedEventDTO[] = [];
    const addedIds = new Set<string>();

    if (currentEventId) {
        const currentEvent = upcomingAndCurrentEvents.find(
            (event) => event.id === currentEventId
        );

        if (currentEvent) {
            selectedEvents.push(currentEvent);
            addedIds.add(currentEvent.id);

            const remainingUpcoming = upcomingAndCurrentEvents.filter(
                (event) => event.id !== currentEventId && !addedIds.has(event.id)
            );

            const additionalNeeded = Math.min(2, remainingUpcoming.length);
            const additionalEvents = remainingUpcoming.slice(0, additionalNeeded);

            additionalEvents.forEach(event => {
                if (!addedIds.has(event.id)) {
                    selectedEvents.push(event);
                    addedIds.add(event.id);
                }
            });
        }
    } else {
        const maxEvents = Math.min(3, upcomingAndCurrentEvents.length);
        const eventsToAdd = upcomingAndCurrentEvents.slice(0, maxEvents);

        eventsToAdd.forEach(event => {
            if (!addedIds.has(event.id)) {
                selectedEvents.push(event);
                addedIds.add(event.id);
            }
        });
    }

    while (selectedEvents.length < 3 && finishedEvents.length > 0) {
        const neededCount = 3 - selectedEvents.length;
        const finishedToAdd = finishedEvents.slice(-neededCount).reverse();

        finishedToAdd.forEach(event => {
            if (!addedIds.has(event.id) && selectedEvents.length < 3) {
                selectedEvents.push(event);
                addedIds.add(event.id);
            }
        });

        break;
    }

    return selectedEvents.slice(0, 3);
};

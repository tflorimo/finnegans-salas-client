import { useContext, useState, useCallback } from "react";
import { AuthContext } from "../../../context/auth/authContext";
import { roomService } from "../../../services/rooms/room.service";
import { CheckInStatus } from "../../../shared/types/event.types";
import { findAllCheckInEligibleEvents, isCheckInAlreadyDoneError } from "../utils/CheckIn.utils";
import { isEventInProgress } from "../../../shared/utils/event.utils";
import type { RoomResponseDTO } from "../../../shared/types/room.types";
import type { EventResponseDTO } from "../../../shared/types/event.types";
import type { CheckInState, CheckInValidation, UseCheckInParams } from "../types/RoomPage.types";

export const useCheckIn = ({ onSuccess }: UseCheckInParams = {}) => {
  const { userEmail } = useContext(AuthContext);
  const [state, setState] = useState<CheckInState>({
    isLoading: false,
    message: null,
    isSuccess: null,
    checkingInEventId: null,
  });

  const getEligibleEvents = useCallback(
    (room: RoomResponseDTO | undefined): EventResponseDTO[] => {
      if (!room || !userEmail) {
        return [];
      }
      return findAllCheckInEligibleEvents(room, userEmail);
    },
    [userEmail]
  );

  const validateCheckIn = useCallback(
    (room: RoomResponseDTO | undefined, eventId: string): CheckInValidation => {
      if (!room || !userEmail) {
        return {
          isValid: false,
          error: "Información del usuario o sala no disponible",
        };
      }

      const event = room.events?.find((e) => e.id === eventId);

      if (!event) {
        return {
          isValid: false,
          error: "El evento no existe en esta sala",
        };
      }

      return {
        isValid: true,
        event,
        room,
        userEmail
      };
    },
    [userEmail]
  );

  const buildUpdatedRoom = useCallback(
    (
      room: RoomResponseDTO,
      eventId: string,
      eventToCheckIn: EventResponseDTO
    ): RoomResponseDTO => {
      const updatedEvents = room.events?.map((event) =>
        event.id === eventId
          ? { ...event, checkInStatus: CheckInStatus.CHECKED_IN }
          : event
      );

      const eventIsInProgress = isEventInProgress(
        eventToCheckIn.startTime,
        eventToCheckIn.endTime
      );

      const updatedCurrentEvent = eventIsInProgress && room.current_event?.id === eventId
        ? { ...room.current_event, checkInStatus: CheckInStatus.CHECKED_IN }
        : room.current_event;

      return {
        ...room,
        is_busy: eventIsInProgress && room.current_event?.id === eventId ? true : room.is_busy,
        current_event: updatedCurrentEvent,
        events: updatedEvents,
      };
    },
    []
  );

  const handleCheckIn = useCallback(
    async (room: RoomResponseDTO | undefined, eventId: string) => {
      const validation = validateCheckIn(room, eventId);

      if (!validation.isValid) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          message: validation.error,
          isSuccess: false,
        }));
        return;
      }

      const { event, room: validatedRoom, userEmail: validatedUserEmail } = validation;

      setState((prev) => ({
        ...prev,
        isLoading: true,
        message: null,
        isSuccess: null,
        checkingInEventId: eventId,
      }));

      try {
        await roomService.checkInEvent(validatedRoom.email, eventId, validatedUserEmail);

        if (onSuccess) {
          const updatedRoom = buildUpdatedRoom(validatedRoom, eventId, event);
          onSuccess(updatedRoom);
        }

        setState((prev) => ({
          ...prev,
          isLoading: false,
          message: "¡Check-in realizado con éxito!",
          isSuccess: true,
          checkingInEventId: null,
        }));
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Error al realizar check-in";

        if (isCheckInAlreadyDoneError(errorMessage) && onSuccess && validatedRoom) {
          try {
            const refreshedRoom = await roomService.getRoom(validatedRoom.email);
            onSuccess(refreshedRoom);
          } catch (refreshError) {
            console.error('Error al actualizar sala:', refreshError);
          }
        }

        setState((prev) => ({
          ...prev,
          isLoading: false,
          message: errorMessage,
          isSuccess: false,
          checkingInEventId: null,
        }));
      }
    },
    [userEmail, onSuccess, validateCheckIn, buildUpdatedRoom]
  );


  const clearMessage = useCallback(() => {
    setState((prev) => ({ ...prev, message: null, isSuccess: null }));
  }, []);

  return {
    handleCheckIn,
    getEligibleEvents,
    clearMessage,
    isLoading: state.isLoading,
    message: state.message,
    isSuccess: state.isSuccess,
    checkingInEventId: state.checkingInEventId,
  };
};

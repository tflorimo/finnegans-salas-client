import { useContext, useState, useCallback } from "react";
import { AuthContext } from "../../../context/auth/authContext";
import { roomService } from "../../../services/rooms/room.service";
import type { RoomResponseDTO } from "../../../shared/types/room.types";
import type { EventResponseDTO } from "../../../shared/types/event.types";
import { findAllCheckInEligibleEvents } from "../utils/CheckIn.utils";
import { isEventInProgress } from "../../../shared/utils/event.utils";

interface CheckInState {
  isLoading: boolean;
  message: string | null;
  isSuccess: boolean | null;
  checkingInEventId: string | null;
}

interface UseCheckInParams {
  onSuccess?: (room: RoomResponseDTO) => void;
}

interface CheckInValidation {
  isValid: boolean;
  event?: EventResponseDTO;
  error?: string;
}

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

      const eligibleEvents = findAllCheckInEligibleEvents(room, userEmail);
      const eventToCheckIn = eligibleEvents.find((event) => event.id === eventId);

      if (!eventToCheckIn) {
        return {
          isValid: false,
          error: "El evento no está disponible para check-in",
        };
      }

      return { isValid: true, event: eventToCheckIn };
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
          ? { ...event, checkInStatus: "checked_in" as const }
          : event
      );

      const updatedCurrentEvent =
        room.current_event?.id === eventId
          ? { ...room.current_event, checkInStatus: "checked_in" as const }
          : room.current_event;

      const eventIsInProgress = isEventInProgress(
        eventToCheckIn.startTime,
        eventToCheckIn.endTime
      );

      return {
        ...room,
        is_busy: eventIsInProgress ? true : room.is_busy,
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
          message: validation.error!,
          isSuccess: false,
        }));
        return;
      }


      setState((prev) => ({
        ...prev,
        isLoading: true,
        message: null,
        isSuccess: null,
        checkingInEventId: eventId,
      }));

      try {

        await roomService.checkInEvent(room!.email, eventId, userEmail!);


        if (onSuccess) {
          const updatedRoom = buildUpdatedRoom(room!, eventId, validation.event!);
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

        setState((prev) => ({
          ...prev,
          isLoading: false,
          message: errorMessage,
          isSuccess: false,
          checkingInEventId: null,
        }));

        console.error("Check-in error:", error);
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

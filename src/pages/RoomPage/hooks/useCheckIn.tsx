import { useCallback, useContext, useState } from "react";

import { AuthContext } from "../../../context/auth/authContext";
import { roomService } from "../../../services/rooms/room.service";
import type { EventResponseDTO } from "../../../shared/types/event.types";
import type { RoomResponseDTO } from "../../../shared/types/room.types";
import type { CheckInState, CheckInValidation, UseCheckInParams } from "../types/RoomPage.types";
import { findAllCheckInEligibleEvents, isCheckInAlreadyDoneError } from "../utils/CheckIn.utils";

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

      const { room: validatedRoom } = validation;

      setState((prev) => ({
        ...prev,
        isLoading: true,
        message: null,
        isSuccess: null,
        checkingInEventId: eventId,
      }));

      try {
        const response = await roomService.checkInEvent(validatedRoom.email, eventId);


        if (onSuccess && response.room) {
          onSuccess(response.room);
        }

        setState((prev) => ({
          ...prev,
          isLoading: false,
          message: response.message || "¡Check-in realizado con éxito!",
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
    [userEmail, onSuccess, validateCheckIn]
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

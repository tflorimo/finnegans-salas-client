import { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth/authContext";
import { roomService } from "../../../services/rooms/room.service";
import type { RoomResponseDTO } from "../../../shared/types/room.types";
import type { EventResponseDTO } from "../../../shared/types/event.types";
import { findAllCheckInEligibleEvents } from "../utils/CheckIn.utils";

interface CheckInState {
  isLoading: boolean;
  message: string | null;
  isSuccess: boolean | null;
  checkingInEventId: string | null;
}

interface UseCheckInParams {
  onSuccess?: (room: RoomResponseDTO) => void;
}

export const useCheckIn = ({ onSuccess }: UseCheckInParams = {}) => {
  const { userEmail } = useContext(AuthContext);
  const [state, setState] = useState<CheckInState>({
    isLoading: false,
    message: null,
    isSuccess: null,
    checkingInEventId: null,
  });

  // Obtener todos los eventos elegibles para check-in
  const getEligibleEvents = (room: RoomResponseDTO | undefined): EventResponseDTO[] => {
    if (!room || !userEmail) {
      return [];
    }
    return findAllCheckInEligibleEvents(room, userEmail);
  };

  // Realizar check-in para un evento específico
  const handleCheckIn = async (room: RoomResponseDTO | undefined, eventId: string) => {
    if (!room || !userEmail) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        message: "Información del usuario o sala no disponible",
        isSuccess: false,
      }));
      return;
    }

    const eligibleEvents = findAllCheckInEligibleEvents(room, userEmail);
    const eventToCheckIn = eligibleEvents.find(event => event.id === eventId);
    
    if (!eventToCheckIn) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        message: "El evento no está disponible para check-in",
        isSuccess: false,
      }));
      return;
    }

    setState(prev => ({ 
      ...prev, 
      isLoading: true, 
      message: null, 
      isSuccess: null,
      checkingInEventId: eventId 
    }));

    try {
      // Enviar el eventId específico al backend
      await roomService.checkInEvent(room.email, eventId, userEmail);

      // Optimistic update: actualizar estado local inmediatamente
      if (onSuccess) {
        const updatedEvents = room.events?.map(event => 
          event.id === eventId
            ? { ...event, checkInStatus: 'checked_in' as const }
            : event
        );

        const updatedCurrentEvent = room.current_event?.id === eventId
          ? { ...room.current_event, checkInStatus: 'checked_in' as const }
          : room.current_event;

        const updatedRoom: RoomResponseDTO = {
          ...room,
          is_busy: true,
          current_event: updatedCurrentEvent,
          events: updatedEvents,
        };
        onSuccess(updatedRoom);
      }

      setState(prev => ({
        ...prev,
        isLoading: false,
        message: "¡Check-in realizado con éxito!",
        isSuccess: true,
        checkingInEventId: null,
      }));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error al realizar check-in";

      setState(prev => ({
        ...prev,
        isLoading: false,
        message: errorMessage,
        isSuccess: false,
        checkingInEventId: null,
      }));
    }
  };

  const clearMessage = () => {
    setState((prev) => ({ ...prev, message: null, isSuccess: null }));
  };

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

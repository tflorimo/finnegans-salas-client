import type { EventResponseDTO } from "../../../shared/types/event.types";
import type { RoomResponseDTO } from "../../../shared/types/room.types";

export interface CheckInMessageModalProps {
  message: string | null;
  isSuccess: boolean | null;
  onClose: () => void;
}

export interface QRCheckInModalProps {
  isProcessing: boolean;
  message: string | null;
  onClose: () => void;
}

export interface QRCodeProps {
    roomEmail: string;
}

export interface CheckInState {
  isLoading: boolean;
  message: string | null;
  isSuccess: boolean | null;
  checkingInEventId: string | null;
}

export interface UseCheckInParams {
  onSuccess?: (room: RoomResponseDTO) => void;
}

export type CheckInValidation =
  | {
      isValid: true;
      event: EventResponseDTO;
      room: RoomResponseDTO;
      userEmail: string;
    }
  | {
      isValid: false;
      error: string;
    };

export interface QRCheckInState {
    isProcessing: boolean;
    message: string | null;
    redirectPath: string | null;
    roomData: RoomResponseDTO | null;
}

export type CheckInResult =
    | { success: true; message: string; roomData: RoomResponseDTO }
    | { success: false; message: string; redirectPath: string; roomData?: RoomResponseDTO };
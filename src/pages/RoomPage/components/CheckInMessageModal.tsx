import { CheckCircle, AlertCircle } from "lucide-react";
import { useCheckInMessage } from "../hooks/useCheckInMessage";
import { EVENT_STATUS_FINISHED_COLOR, WARNING_COLOR } from "../../../assets/colors/global-colors";
import {
  CheckInModalOverlay,
  CheckInModalContent,
  CheckInMessageText,
  CheckInCloseButton,
  CheckInModalIconWrapper,
} from "../styles";

interface CheckInMessageModalProps {
  message: string | null;
  isSuccess: boolean | null;
  onClose: () => void;
}

export const CheckInMessageModal = ({ message, isSuccess, onClose }: CheckInMessageModalProps) => {
  const { shouldShowModal, handleOverlayClick, handleContentClick } = useCheckInMessage({
    message,
    isSuccess,
    onClose,
  });

  if (!shouldShowModal) return null;

  return (
    <CheckInModalOverlay onClick={handleOverlayClick}>
      <CheckInModalContent onClick={handleContentClick} $isSuccess={isSuccess ?? false}>
        <CheckInModalIconWrapper>
          {isSuccess ? (
            <CheckCircle size={48} color={EVENT_STATUS_FINISHED_COLOR} />
          ) : (
            <AlertCircle size={48} color={WARNING_COLOR} />
          )}
        </CheckInModalIconWrapper>
        <CheckInMessageText>{message}</CheckInMessageText>
        <CheckInCloseButton onClick={onClose}>Cerrar</CheckInCloseButton>
      </CheckInModalContent>
    </CheckInModalOverlay>
  );
};
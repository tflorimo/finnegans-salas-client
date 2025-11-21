import { ThemeContext } from "../../../context/theme/themeContext";
import { useContext } from "react";
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
import type { CheckInMessageModalProps } from "../types/RoomPage.types";

export const CheckInMessageModal = ({ message, isSuccess, onClose }: CheckInMessageModalProps) => {
  const {theme} = useContext(ThemeContext);
  const { shouldShowModal, handleOverlayClick, handleContentClick } = useCheckInMessage({
    message,
    isSuccess,
    onClose,
  });

  if (!shouldShowModal) return null;

  return (
    <CheckInModalOverlay $theme={theme} onClick={handleOverlayClick}>
      <CheckInModalContent onClick={handleContentClick} $isSuccess={isSuccess ?? false}>
        <CheckInMessageText $theme={theme}>{message}</CheckInMessageText>
        <CheckInModalIconWrapper>
          {isSuccess ? (
            <CheckCircle size={48} color={EVENT_STATUS_FINISHED_COLOR} />
          ) : (
            <AlertCircle size={48} color={WARNING_COLOR} />
          )}
        </CheckInModalIconWrapper>
        <CheckInMessageText $theme={theme}>{message}</CheckInMessageText>
        <CheckInCloseButton onClick={onClose}>Cerrar</CheckInCloseButton>
      </CheckInModalContent>
    </CheckInModalOverlay>
  );
};
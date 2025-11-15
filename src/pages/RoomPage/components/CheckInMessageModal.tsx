import { ThemeContext } from "../../../context/theme/themeContext";
import { useContext } from "react";
import { useCheckInMessage } from "../hooks/useCheckInMessage";
import {
  CheckInModalOverlay,
  CheckInModalContent,
  CheckInMessageText,
  CheckInCloseButton,
} from "../styles";

interface CheckInMessageModalProps {
  message: string | null;
  isSuccess: boolean | null;
  onClose: () => void;
}

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
        <CheckInCloseButton onClick={onClose}>Cerrar</CheckInCloseButton>
      </CheckInModalContent>
    </CheckInModalOverlay>
  );
};
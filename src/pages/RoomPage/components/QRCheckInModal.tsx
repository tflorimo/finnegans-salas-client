import { CheckCircle, Loader, AlertCircle } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../../context/theme/themeContext";
import {
  QRModalOverlay,
  QRModalCard,
  QRModalIcon,
  QRModalTitle,
  QRModalMessage,
  QRModalButton,
  QRModalLoader,
} from "../styles";
import { QR_MESSAGES } from "../constants/RoomPage.constants";
import type { QRCheckInModalProps } from "../types/RoomPage.types";

export const QRCheckInModal = ({ isProcessing, message, onClose }: QRCheckInModalProps) => {
  const { theme } = useContext(ThemeContext);
  
  if (!isProcessing && !message) return null;

  const isSuccess = message === QR_MESSAGES.CHECK_IN_SUCCESS;

  return (
    <QRModalOverlay $theme={theme} onClick={onClose}>
      <QRModalCard $theme={theme} onClick={(e) => e.stopPropagation()}>
        {isProcessing ? (
          <>
            <QRModalIcon>
              <Loader />
            </QRModalIcon>
            <QRModalTitle $theme={theme}>{QR_MESSAGES.PROCESSING}</QRModalTitle>
            <QRModalLoader $theme={theme} />
          </>
        ) : (
          <>
            <QRModalIcon $isSuccess={isSuccess} $theme={theme}>
              {isSuccess ? <CheckCircle /> : <AlertCircle />}
            </QRModalIcon>
            <QRModalTitle $theme={theme}>Check-in</QRModalTitle>
            <QRModalMessage $theme={theme}>{message}</QRModalMessage>
            <QRModalButton $theme={theme} onClick={onClose}>
              {isSuccess ? "Continuar" : "Entendido"}
            </QRModalButton>
          </>
        )}
      </QRModalCard>
    </QRModalOverlay>
  );
};

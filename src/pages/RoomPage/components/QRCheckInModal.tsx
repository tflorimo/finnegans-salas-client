import { CheckCircle, Loader, AlertCircle } from "lucide-react";
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

interface QRCheckInModalProps {
  isProcessing: boolean;
  message: string | null;
  onClose: () => void;
}

export const QRCheckInModal = ({ isProcessing, message, onClose }: QRCheckInModalProps) => {
  if (!isProcessing && !message) return null;

  const isSuccess = message === QR_MESSAGES.CHECK_IN_SUCCESS;

  return (
    <QRModalOverlay onClick={onClose}>
      <QRModalCard onClick={(e) => e.stopPropagation()}>
        {isProcessing ? (
          <>
            <QRModalIcon>
              <Loader />
            </QRModalIcon>
            <QRModalTitle>{QR_MESSAGES.PROCESSING}</QRModalTitle>
            <QRModalLoader />
          </>
        ) : (
          <>
            <QRModalIcon $isSuccess={isSuccess}>
              {isSuccess ? <CheckCircle /> : <AlertCircle />}
            </QRModalIcon>
            <QRModalTitle>Check-in</QRModalTitle>
            <QRModalMessage>{message}</QRModalMessage>
            <QRModalButton onClick={onClose}>
              {isSuccess ? "Continuar" : "Entendido"}
            </QRModalButton>
          </>
        )}
      </QRModalCard>
    </QRModalOverlay>
  );
};

import { useEffect } from "react";

interface UseCheckInMessageProps {
  message: string | null;
  isSuccess: boolean | null;
  onClose: () => void;
}

export const useCheckInMessage = ({ message, isSuccess, onClose }: UseCheckInMessageProps) => {
  useEffect(() => {
    if (message && isSuccess) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, isSuccess, onClose]);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const shouldShowModal = !!message;

  return {
    shouldShowModal,
    handleOverlayClick,
    handleContentClick,
  };
};

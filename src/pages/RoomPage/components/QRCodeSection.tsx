import QRCodeLib from "react-qr-code";

import { QR_CODE_CONFIG, QR_ROUTES } from "../constants/RoomPage.constants";
import { QRContainer } from "../styles";

interface QRCodeSectionProps {
  roomEmail: string;
}

export const QRCodeSection = ({ roomEmail }: QRCodeSectionProps) => {
  const baseUrl = import.meta.env.VITE_APP_URL;
  const qrUrl = `${baseUrl}${QR_ROUTES.CHECK_IN(roomEmail)}`;

  return (
    <QRContainer>
      <QRCodeLib
        value={qrUrl}
        size={QR_CODE_CONFIG.SIZE}
        level={QR_CODE_CONFIG.LEVEL}
        bgColor={QR_CODE_CONFIG.BG_COLOR}
        fgColor={QR_CODE_CONFIG.FG_COLOR}
      />
    </QRContainer>
  );
};

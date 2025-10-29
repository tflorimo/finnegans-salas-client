import { QrCode } from "lucide-react";
import { QRBox } from "../styles";

interface QRCodeSectionProps {
  qrImageUrl?: string;
  roomName?: string;
}

export const QRCodeSection = ({ qrImageUrl, roomName }: QRCodeSectionProps) => {
  return (
    <QRBox>
      {qrImageUrl ? (
        <img
          src={qrImageUrl}
          alt={`QR ${roomName}`}
          width={120}
          height={120}
          style={{ borderRadius: 8 }}
        />
      ) : (
        <QrCode size={56} />
      )}
    </QRBox>
  );
};

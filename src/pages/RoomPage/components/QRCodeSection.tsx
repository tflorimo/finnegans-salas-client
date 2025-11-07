import QRCode from "react-qr-code";
import { QRBox } from "../styles";

interface QRCodeSectionProps {
  value: string;      // aca recibimos el valor del QR
  roomName?: string;
}

export const QRCodeSection = ({ value, roomName }: QRCodeSectionProps) => {
  return (
    <QRBox>
      <QRCode value={value} size={140} />
      {roomName && <p style={{ marginTop: 8 }}>{roomName}</p>}
    </QRBox>
  );
};
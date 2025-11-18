import QRCodeLib from "react-qr-code";
import { QRContainer } from "../styles";
import { QR_CODE_CONFIG, QR_ROUTES } from "../constants/RoomPage.constants";
import type { QRCodeProps } from "../types/RoomPage.types";

export const QRCode = ({ roomEmail }: QRCodeProps) => {
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
import { BLACK_COLOR, WHITE_COLOR } from "../../assets/colors/global-colors";
import type { RoomResponseDTO } from "../types/room.types";
import { encodeRoomEmailForQR } from "./roomURL.utils";

/**
 * Genera un PDF con QRs de todas las salas.
 * Enfoque optimizado para evitar múltiples renders React y manipulación excesiva del DOM.
 */
export const generateQRsPDF = async (rooms: RoomResponseDTO[]): Promise<void> => {
  try {
    const [{ jsPDF }, html2canvas, QRCodeLib, React, { createRoot }] =
      await Promise.all([
        import("jspdf"),
        import("html2canvas").then(m => m.default),
        import("react-qr-code").then(m => m.default),
        import("react"),
        import("react-dom/client"),
      ]);

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const qrSize = 60;
    const padding = 10;
    const spacing = 10;

    const qrsPerRow = Math.floor((pageWidth - 2 * padding) / (qrSize + spacing));
    const qrsPerColumn = Math.floor(
      (pageHeight - 2 * padding - 10) / (qrSize + spacing)
    );
    const qrsPerPage = qrsPerRow * qrsPerColumn;

    const baseUrl = import.meta.env.VITE_APP_URL;
    const roomData = rooms.map((room) => ({
      name: room.name,
      url: `${baseUrl}/qr-checkin/${encodeRoomEmailForQR(room.email)}`,
    }));

    const container = document.createElement("div");
    container.style.width = "200px";
    container.style.height = "200px";
    container.style.position = "absolute";
    container.style.top = "-9999px";
    document.body.appendChild(container);

    const root = createRoot(container);

    for (let i = 0; i < roomData.length; i++) {
      if (i > 0 && i % qrsPerPage === 0) pdf.addPage();

      const indexInPage = i % qrsPerPage;
      const col = indexInPage % qrsPerRow;
      const row = Math.floor(indexInPage / qrsPerRow);

      const x = padding + col * (qrSize + spacing);
      const y = padding + 10 + row * (qrSize + spacing);

      /** Render seguro del QR */
      root.render(
        React.createElement(QRCodeLib, {
          value: roomData[i].url,
          size: 200,
          level: "M",
          bgColor: WHITE_COLOR,
          fgColor: BLACK_COLOR,
        })
      );

      await new Promise(requestAnimationFrame);

      const canvas = await html2canvas(container);

      const imgData = canvas.toDataURL("image/png");

      pdf.addImage(imgData, "PNG", x, y, qrSize, qrSize);
      pdf.setFontSize(8);
      pdf.text(roomData[i].name, x + qrSize / 2, y + qrSize + 4, {
        align: "center",
      });
    }

    root.unmount();
    document.body.removeChild(container);

    /** Guardar PDF */
    pdf.save("qr-codes-all-rooms.pdf");

  } catch (error) {
    console.error("Error generating QR PDF:", error);
    throw new Error("No se pudo generar el PDF con los códigos QR");
  }
};

import type { RoomResponseDTO } from "../types/room.types";
import { encodeRoomEmailForQR } from "./roomURL.utils";

export const generateQRsPDF = async (rooms: RoomResponseDTO[]): Promise<void> => {
  try {
    const { jsPDF } = await import("jspdf");
    const html2canvas = (await import("html2canvas")).default;
    const QRCodeLib = (await import("react-qr-code")).default;
    const React = await import("react");
    const ReactDOMServer = await import("react-dom/server");

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
    const qrsPerColumn = Math.floor((pageHeight - 2 * padding - 10) / (qrSize + spacing));
    const qrsPerPage = qrsPerRow * qrsPerColumn;

    let qrIndex = 0;

    while (qrIndex < rooms.length) {
      if (qrIndex > 0 && qrIndex % qrsPerPage === 0) {
        pdf.addPage();
      }

      const indexInPage = qrIndex % qrsPerPage;
      const col = indexInPage % qrsPerRow;
      const row = Math.floor(indexInPage / qrsPerRow);

      const x = padding + col * (qrSize + spacing);
      const y = padding + 10 + row * (qrSize + spacing);

      const room = rooms[qrIndex];
      const baseUrl = import.meta.env.VITE_APP_URL;
      const qrUrl = `${baseUrl}/qr-checkin/${encodeRoomEmailForQR(room.email)}`;

      const container = document.createElement('div');
      container.style.width = '200px';
      container.style.height = '200px';
      document.body.appendChild(container);

      const qrElement = React.createElement(QRCodeLib, {
        value: qrUrl,
        size: 200,
        level: "M",
        bgColor: "#FFFFFF",
        fgColor: "#000000",
      });

      const html = ReactDOMServer.renderToString(qrElement);
      container.innerHTML = html;

      const canvas = await html2canvas(container);
      const imgData = canvas.toDataURL('image/png');

      pdf.addImage(imgData, 'PNG', x, y, qrSize, qrSize);

      pdf.setFontSize(8);
      pdf.text(room.name, x + qrSize / 2, y + qrSize + 4, { align: "center" });

      document.body.removeChild(container);

      qrIndex++;
    }

    pdf.save("qr-codes-all-rooms.pdf");
  } catch (error) {
    console.error("Error generating QR PDF:", error);
    throw new Error("No se pudo generar el PDF con los códigos QR");
  }
};

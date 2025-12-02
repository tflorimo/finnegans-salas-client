import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { formatTimestamp, formatTimeRange } from "../../utils/format.utils";
import { actionLabels } from "./constants";

export const exportToCSV = <T extends Record<string, any>>(
  data: T[],
  fileName: string
): void => {
  if (data.length === 0) return;

  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(","),
    ...data.map((row) =>
      headers.map((header) => formatCSVCell(row[header])).join(",")
    ),
  ].join("\n");

  downloadCSV(csvContent, fileName);
};

const formatCSVCell = (value: any): string => {
  if (value === null || value === undefined) return "";
  
  const stringValue = String(value);
  
  if (stringValue.includes(",") || stringValue.includes('"') || stringValue.includes("\n")) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  
  return stringValue;
};

const downloadCSV = (content: string, fileName: string): void => {
  const blob = new Blob(["\ufeff" + content], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", `${fileName}.csv`);
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};

export const exportToPDF = <T extends Record<string, any>>(
  data: T[],
  fileName: string
): void => {
  if (data.length === 0) return;

  const isAudits = data.length > 0 && ('action' in data[0]) && ('userEmail' in data[0] || 'roomEmail' in data[0]);
  
  if (isAudits) {
    exportAuditsToPDF(data, fileName);
  } else if (data.length > 0 && 'action' in data[0]) {
    exportLogsToPDF(data, fileName);
  } else {
    exportEventsToPDF(data, fileName);
  }
};

const exportEventsToPDF = <T extends Record<string, any>>(
  data: T[],
  fileName: string
): void => {
  if (data.length === 0) return;

  const doc = new jsPDF();
  let currentY = 20;
  const pageHeight = doc.internal.pageSize.height;
  const bottomMargin = 20;

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(formatTitle(fileName), 14, currentY);
  currentY += 15;

  data.forEach((item, index) => {
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 23, 42);
    const title = item.title || `Evento ${index + 1}`;
    
    // Verificar si cabe el título
    if (currentY + 10 > pageHeight - bottomMargin) {
      doc.addPage();
      currentY = 20;
    }
    
    doc.text(`Título: ${title}`, 14, currentY);
    currentY += 10;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);

    const fields = [
      { label: "Fecha", value: formatFieldValue(item.date || item.startTime) },
      { label: "Horario", value: formatTimeRange(item.startTime, item.endTime) },
      { label: "Sala", value: item.roomName },
      { label: "ID de la sala", value: item.roomEmail },
      { label: "Mail del Responsable", value: item.creatorMail },
      { label: "Creador del evento", value: item.creatorName },
      { label: "Check-in", value: formatCheckInStatus(item.checkInStatus) },
    ];

    if (item.deletedAt) {
      fields.push({ 
        label: "Evento Eliminado", 
        value: formatFieldValue(item.deletedAt) 
      });
    }

    fields.forEach((field) => {
      if (field.value) {
        if (currentY + 14 > pageHeight - bottomMargin) {
          doc.addPage();
          currentY = 20;
        }
        
        doc.setFont("helvetica", "bold");
        doc.text(`${field.label}: `, 14, currentY);
        currentY += 6;
        doc.setFont("helvetica", "normal");
        doc.text(String(field.value), 14, currentY);
        currentY += 8;
      }
    });

    const attendees = item.attendees?.filter((a: any) => a.email !== item.roomEmail) || [];
    
    if (currentY + 7 > pageHeight - bottomMargin) {
      doc.addPage();
      currentY = 20;
    }
    
    doc.setFont("helvetica", "bold");
    doc.text("Asistentes:", 14, currentY);
    currentY += 7;

    if (attendees.length === 0) {
      doc.setFont("helvetica", "normal");
      doc.text("Sin asistentes", 20, currentY);
      currentY += 7;
    } else {
      attendees.forEach((attendee: any) => {
        if (currentY + 6 > pageHeight - bottomMargin) {
          doc.addPage();
          currentY = 20;
        }
        
        doc.setFont("helvetica", "normal");
        const attendeeText = `• ${attendee.email} - ${attendee.responseStatus}`;
        doc.text(attendeeText, 20, currentY);
        currentY += 6;
      });
    }

    if (index < data.length - 1) {
      if (currentY + 5 > pageHeight - bottomMargin) {
        doc.addPage();
        currentY = 20;
      } else {
        currentY += 5;
        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.5);
        doc.line(14, currentY, 196, currentY);
        currentY += 5;
      }
    }
  });

  doc.save(`${fileName}.pdf`);
};

const exportLogsToPDF = <T extends Record<string, any>>(
  data: T[],
  fileName: string
): void => {
  if (data.length === 0) return;

  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(formatTitle(fileName), 14, 15);

  const tableColumn = ["Acción", "Estado", "Usuario", "Timestamp"];
  const tableRows = data.map((log) => [
    log.action || "N/A",
    log.status || "N/A",
    log.userName || log.userId || "Sistema",
    formatTimestamp(log.timestamp),
  ]);

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 25,
    styles: {
      fontSize: 9,
      cellPadding: 3,
    },
    headStyles: {
      fillColor: [59, 130, 246],
      textColor: 255,
      fontStyle: "bold",
    },
    alternateRowStyles: {
      fillColor: [245, 247, 250],
    },
    margin: { top: 25, left: 14, right: 14 },
  });

  doc.save(`${fileName}.pdf`);
};

const exportAuditsToPDF = <T extends Record<string, any>>(
  data: T[],
  fileName: string
): void => {
  if (data.length === 0) return;

  const doc = new jsPDF();
  let currentY = 20;
  const pageHeight = doc.internal.pageSize.height;
  const bottomMargin = 20;

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(formatTitle(fileName), 14, currentY);
  currentY += 15;

  data.forEach((audit, index) => {
    if (currentY + 10 > pageHeight - bottomMargin) {
      doc.addPage();
      currentY = 20;
    }

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 23, 42);
    const action = actionLabels[audit.action] || audit.action;
    doc.text(`${action}`, 14, currentY);
    currentY += 10;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(107, 114, 128);
    
    const subtitle = audit.info || (audit.userEmail || "Sistema");
    if (currentY + 8 > pageHeight - bottomMargin) {
      doc.addPage();
      currentY = 20;
    }
    doc.text(subtitle, 14, currentY);
    currentY += 8;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);

    const fields = [
      { label: "ID", value: audit.id },
      { label: "Usuario", value: audit.userEmail || "Sistema" },
      { label: "Acción", value: audit.action },
      { label: "Sala", value: audit.roomEmail },
      { label: "ID del Evento", value: audit.eventId },
      { label: "Fecha", value: formatTimestamp(audit.createdAt) },
    ];

    fields.forEach((field) => {
      if (field.value) {
        if (currentY + 14 > pageHeight - bottomMargin) {
          doc.addPage();
          currentY = 20;
        }
        
        doc.setFont("helvetica", "bold");
        doc.text(`${field.label}: `, 14, currentY);
        currentY += 6;
        doc.setFont("helvetica", "normal");
        const textValue = String(field.value);
        const splitText = doc.splitTextToSize(textValue, 180);
        doc.text(splitText, 14, currentY);
        currentY += splitText.length * 6 + 2;
      }
    });

    if (index < data.length - 1) {
      if (currentY + 5 > pageHeight - bottomMargin) {
        doc.addPage();
        currentY = 20;
      } else {
        currentY += 5;
        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.5);
        doc.line(14, currentY, 196, currentY);
        currentY += 5;
      }
    }
  });

  doc.save(`${fileName}.pdf`);
};

const formatCheckInStatus = (status: string): string => {
  const statusMap: Record<string, string> = {
    CHECKED_IN: "Realizado",
    PENDING: "Pendiente",
    EXPIRED: "Expirado",
  };
  return statusMap[status] || status;
};

const formatFieldValue = (value: any): string => {
  if (value === null || value === undefined) return "N/A";
  if (value instanceof Date || !isNaN(Date.parse(value))) {
    const date = new Date(value);
    return date.toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
};

const formatTitle = (fileName: string): string => {
  return fileName
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};


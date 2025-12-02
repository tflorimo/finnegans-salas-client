export const formatTime = (dateInput?: Date | string | null): string => {
  try {
    if (!dateInput) return "-";

    if (typeof dateInput === "string" && /^\d{2}:\d{2}$/.test(dateInput)) {
      return dateInput;
    }

    const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
    if (Number.isNaN(date.getTime())) return "-";

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  } catch (error) {
    console.error("Error formateando hora:", error, "Input:", dateInput);
    return "-";
  }
};



export const ADMIN_ENDPOINTS = {
  getAllEventsAdmin: () => `/calendar/events`, 
  getLogs: () => `/logs`, 
} as const;

export const ADMIN_ERROR_MESSAGES = {
  eventsError: "No se pudo obtener la agenda de la sala.",
  unknownError: "Error desconocido",
} as const;
export const ADMIN_ENDPOINTS = {
  getAllEventsAdmin: () => `/calendar/events`, 
  getLogs: () => `/logs`, // TODO: A definir con backend endpoint correcto
} as const;

export const ADMIN_ERROR_MESSAGES = {
  eventsError: "No se pudo obtener la agenda de la sala.",
  logsError: "No se pudieron cargar los logs del sistema.",
} as const;
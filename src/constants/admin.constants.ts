export const ADMIN_ENDPOINTS = {
  getAllEventsAdmin: () => `/events`, 
  getAudits: () => `/audits`, 
} as const;

export const ADMIN_ERROR_MESSAGES = {
  eventsError: "No se pudo obtener los eventos.",
  logsError: "No se pudieron cargar los logs del sistema.",
} as const;
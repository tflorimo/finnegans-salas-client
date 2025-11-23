export const HEATMAP_ENDPOINTS = {
    getRoomsForecast: () => `/forecast/rooms`,
} as const;

const CANT_DAYS_WEEK = 5;
const CANT_HOURS_DAY = 10;

export const WEEK_DAYS_ORDER = ["lun", "mar", "mié", "jue", "vie"];

export const HOURS_RANGE = Array.from({ length: CANT_HOURS_DAY }, (_, i) => CANT_DAYS_WEEK + i);

export const HEATMAP_ERROR_MESSAGES = {
    roomsForecastError: "No se pudo obtener el forecast de las salas.",
} as const;

export const HEATMAP_TEXTS = {
    pageTitle: "Disponibilidad Semanal",
    pageSubtitle: "Mapa de calor de disponibilidad de salas por día y horario",
    loadingMessage: "Cargando mapa de calor...",
    leyendHighAvailability: "Alta",
    leyendMidHighAvailability: "Media-Alta",
    leyendMidAvailability: "Media",
    leyendLowAvailability: "Baja",
} as const;

export const HEATMAP_ENDPOINTS = {
    getRoomsForecast: () => `/forecast/fetch`,
} as const;

const INITIAL_HOUR = 9;
const CANT_HOURS_DAY = 9;

export const WEEK_DAYS_ORDER = ["lun", "mar", "mié", "jue", "vie"];

export const HOURS_RANGE = Array.from({ length: CANT_HOURS_DAY }, (_, i) => INITIAL_HOUR + i);

export const HEATMAP_ERROR_MESSAGES = {
    roomsForecastError: "No se pudo obtener el forecast de las salas.",
} as const;

export const HEATMAP_TEXTS = {
    pageTitle: "Disponibilidad Semanal",
    pageSubtitle: "Mapa de calor de disponibilidad de salas por día y horario",
    loadingMessage: "Cargando mapa de calor...",
    emptyMessage: "No hay datos para mostrar...",
    leyendHighAvailability: "Alta",
    leyendMidHighAvailability: "Media-Alta",
    leyendMidAvailability: "Media",
    leyendLowAvailability: "Baja",
} as const;

export const HEATMAP_OPTION_GRID_STYLES = { top: 10, left: 80, right: 20, bottom: 20 }

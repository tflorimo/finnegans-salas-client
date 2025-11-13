import { Tags } from "../../../components/Tag/types";
import type { CheckInStatus } from "../../../shared/types/event.types";

export const ROOM_PAGE_MESSAGES = {
  LOADING: "Cargando…",
  ROOM_DEFAULT: "Sala",
  CAPACITY_LABEL: "Capacidad:",
  CAPACITY_UNIT: "personas",
  EQUIPMENT_TITLE: "Equipamiento disponible",
  NO_EQUIPMENT: "Sin equipamiento registrado",
  QR_TITLE: "Confirmanos tu presencia escaneando el código QR",
  CHECK_IN_TITLE: "Check-in",
  CHECK_IN_SUBTITLE: "Check-in disponible desde 30 minutos antes del inicio del evento hasta 15 minutos después de haber iniciado, si el check-in no es realizado, la sala continuará visualizándose como libre.",
  CHECK_IN_BUTTON: "Hacer Check-in",
  CHECK_IN_STATUS_LABEL: "Check-in:",
  TODAY_RESERVATIONS_TITLE: "Reservas de Hoy",
  WEEK_RESERVATIONS_TITLE: "Reservas de la Semana",
  FINISHED_RESERVATIONS_TITLE: "Reservas Finalizadas",
  NO_TODAY_RESERVATIONS: "No hay reservas para hoy",
  NO_WEEK_RESERVATIONS: "No hay reservas para esta semana",
  NO_FINISHED_RESERVATIONS: "No hay reservas finalizadas",
  CURRENT_STATUS_TITLE: "Estado actual",
  STATUS_LABEL: "Estado:",
  TODAY_RESERVATIONS_COUNT_LABEL: "Reservas hoy:",
  QR_SECTION_TITLE: "Código QR",
  QR_SECTION_DESCRIPTION: "Escaneá para acceso rápido a esta sala",
};

export const ROOM_STATUS_LABELS = {
  available: "Libre",
  occupied: "Ocupada",
  loading: "…",
};

export const ROOM_STATUS_TAG_TYPES = {
  available: Tags.success,
  occupied: Tags.info,
  loading: Tags.info,
};

export const CHECK_IN_STATUS_DISPLAY: Record<CheckInStatus, { text: string; type: Tags }> = {
  pending: { text: "Pendiente", type: Tags.warning },
  checked_in: { text: "Confirmado", type: Tags.success },
  expired: { text: "Expirado", type: Tags.danger },
};

import { Tags } from "../../../components/Tag/types";

export const ROOM_PAGE_MESSAGES = {
  LOADING: "Cargando…",
  ROOM_DEFAULT: "Sala",
  CAPACITY_LABEL: "Capacidad:",
  CAPACITY_UNIT: "personas",
  EQUIPMENT_TITLE: "Equipamiento disponible",
  QR_TITLE: "Confirmanos tu presencia escaneando el código QR",
  CHECK_IN_BUTTON: "Hacer check in",
  RESERVATIONS_TITLE: "Reservas de la semana",
  CURRENT_STATUS_TITLE: "Estado actual",
  STATUS_LABEL: "Estado:",
  TODAY_RESERVATIONS_LABEL: "Reservas hoy:",
  QR_SECTION_TITLE: "Código QR",
  QR_SECTION_DESCRIPTION: "Escaneá para acceso rápido a esta sala",
};

export const ROOM_STATUS_LABELS = {
  available: "Libre",
  occupied: "Ocupada",
  maintenance: "Mantenimiento",
};

export const ROOM_STATUS_TAG_TYPES = {
  available: Tags.success,
  occupied: Tags.info,
  maintenance: Tags.danger,
};

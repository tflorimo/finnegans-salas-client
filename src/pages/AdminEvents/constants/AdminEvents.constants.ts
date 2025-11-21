import { Tags } from "../../../components/Tag/types";
import type { CheckInStatus, ResponseStatus } from "../../../shared/types/event.types";

export const ADMIN_EVENTS_MESSAGES = {
  PAGE_TITLE: "Eventos Programados",
  FILTER_BUTTON: "Filtrar",
  EMPTY_TITLE: "Sin resultados",
  EMPTY_DESCRIPTION: "Probá con otro término de búsqueda.",
};

export const TABLE_HEADERS = {
  EVENT: "Evento",
  ROOM: "Sala",
  DATE: "Fecha",
  TIME: "Horario",
  ATTENDEES: "Asistentes",
  ACTIONS: "Acciones",
};

export const EVENT_MODAL = {
  DATE: "Fecha",
  TIME: "Horario",
  ROOM: "Sala",
  ID: "ID de la sala", 
  CREATOR_MAIL: "Mail del Responsable",
  CREATOR_NAME: "Creador del evento",
  CHECK_IN: "Check-in",
  CHECK_IN_DONE: "Realizado",
  CHECK_IN_PENDING: "Pendiente",
  CHECK_IN_EXPIRED: "Expirado",
  DELETED_AT: "Evento Eliminado",
  ATTENDEES: "Asistentes",
  WITHOUT_ATTENDEES: "Sin asistentes",
};

export const ATTENDEE_STATUS_TAG_MAP: Record<ResponseStatus, Tags> = {
  accepted: Tags.success,
  declined: Tags.danger,
  tentative: Tags.warning,
  needsAction: Tags.info,
};

export const CHECK_IN_STATUS_TAG_MAP: Record<CheckInStatus, { text: string; type: Tags }> = {
  checked_in: { text: EVENT_MODAL.CHECK_IN_DONE, type: Tags.success },
  pending: { text: EVENT_MODAL.CHECK_IN_PENDING, type: Tags.warning },
  expired: { text: EVENT_MODAL.CHECK_IN_EXPIRED, type: Tags.danger },
};

export const EVENT_FILTER_PLACEHOLDER = "Buscar por nombre de Evento...";

export const EXPORT_FILE_NAME = "events-export";

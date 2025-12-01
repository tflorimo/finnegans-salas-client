import { Tags } from "../../../components/Tag/types";
import type { CheckInStatus, ResponseStatus } from "../../../shared/types/event.types";

export const ADMIN_EVENTS_MESSAGES = {
  PAGE_TITLE: "Eventos Agendados",
  FILTER_BUTTON: "Filtrar",
  LOADING: "Cargando eventos...",
  EMPTY_TITLE: "Sin resultados",
  EMPTY_DESCRIPTION: "Probá con otro término de búsqueda.",
  ID: "ID de la sala",
  EVENT_FILTER_PLACEHOLDER: "Filtrar por Nombre de Sala...",
  EXPORT_FILE_NAME: "events-export",
  CLEAN_FILTERS: 'Limpiar Filtros',
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

export const EVENT_FILTER_OPTIONS = [
  { id: 'title', value: 'Evento' },
  { id: 'roomEmail', value: 'Sala' },
]

export const ATTENDEE_STATUS_TAG_MAP: Record<ResponseStatus, Tags> = {
  accepted: Tags.blueOutput,
  declined: Tags.dangerOutput,
  tentative: Tags.warning,
  needsAction: Tags.warning,
};

export const RESPONSE_STATUS_LABELS_MAP: Record<ResponseStatus, string> = {
  accepted: "Aceptado",
  declined: "Rechazado",
  tentative: "Tentativo",
  needsAction: "Requiere acción",
};

export const CHECK_IN_STATUS_TAG_MAP: Record<CheckInStatus, { text: string; type: Tags }> = {
  CHECKED_IN: { text: EVENT_MODAL.CHECK_IN_DONE, type: Tags.succesOutput },
  PENDING: { text: EVENT_MODAL.CHECK_IN_PENDING, type: Tags.warning },
  EXPIRED: { text: EVENT_MODAL.CHECK_IN_EXPIRED, type: Tags.dangerOutput },
};

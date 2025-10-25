import type { TagsTypes } from '../../../components/Tag/types';

export const ADMIN_LOGS_MESSAGES = {
  LOADING: 'Cargando logs del sistema...',
  EMPTY_TITLE: 'No hay logs disponibles',
  EMPTY_DESCRIPTION: 'No se encontraron registros de actividad en el sistema.',
  PAGE_TITLE: 'Logs del Sistema',
  EXPORT_BUTTON: 'Exportar Logs'
};

export const LOG_STATUS_TAG_MAP: Record<string, TagsTypes> = {
  success: 'success',
  info: 'info',
  error: 'danger'
};

export const LOG_STATUS_TRANSLATIONS: Record<string, string> = {
  success: 'ÉXITO',
  info: 'INFO',
  error: 'ERROR'
};

export const TIMESTAMP_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
};

export const LOCALE_ES = 'es-ES';

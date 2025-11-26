import type { TagsTypes } from '../../../components/Tag/types';

export const ADMIN_AUDIT_MESSAGES = {
  LOADING: 'Cargando auditorías del sistema...',
  EMPTY_TITLE: 'No hay auditorías disponibles',
  EMPTY_DESCRIPTION: 'No se encontraron registros de auditoría en el sistema.',
  PAGE_TITLE: 'Auditorías del Sistema',
  EXPORT_BUTTON: 'Exportar Auditorías'
};

export const AUDIT_ACTION_LABELS: Record<string, string> = {
  LOGIN_SUCCESS: 'Login Exitoso',
  LOGIN_FAILED: 'Login Fallido',
  LOGOUT: 'Logout exitoso',
  AUTH_INVALID_TOKEN: 'Token Inválido',
  AUTH_USER_REJECTED: 'Usuario Rechazado',
  CHECKIN_SUCCESS: 'Check-in Exitoso',
  CHECKIN_FAILED: 'Check-in Fallido',
  USER_CREATED: 'Usuario Creado',
  USER_UPDATED: 'Usuario Actualizado',
  EVENT_CREATED: 'Evento Agregado',
  EVENT_UPDATED: 'Evento Actualizado',
  EVENT_DELETED: 'Evento Eliminado',
  EVENT_MARKED_OVERLAP: 'Evento Superpuesto',
  CHECKIN_EXPIRED: 'Check-in Expirado',
  ROOM_ADDED: 'Sala Agregada',
  ROOM_DELETED: 'Sala Eliminada',
  ROOM_RESTORED: 'Sala Restaurada',
  ROOM_BUSY: 'Sala Ocupada',
  ROOM_AVAILABLE: 'Sala Disponible',
};

export const AUDIT_COLOR_MAP: Record<string, TagsTypes> = {
  // Verdes (succesOutput)
  'LOGIN_SUCCESS': 'succesOutput',
  'CHECKIN_SUCCESS': 'succesOutput',
  // Rojos (dangerOutput)
  'LOGIN_FAILED': 'dangerOutput',
  'AUTH_INVALID_TOKEN': 'dangerOutput',
  'AUTH_USER_REJECTED': 'dangerOutput',
  'CHECKIN_FAILED': 'dangerOutput',
  // Amarillos (warning)
  'CHECKIN_EXPIRED': 'warning',
  'EVENT_DELETED': 'warning',
  'EVENT_MARKED_OVERLAP': 'warning',
  'EVENT_UPDATED': 'warning',
  'USER_UPDATED': 'warning',
  'ROOM_DELETED': 'warning',
  // Azules (blueOutput)
  'USER_CREATED': 'blueOutput',
  'EVENT_CREATED': 'blueOutput',
  'EVENT_RESTORED': 'blueOutput',
  'LOGOUT': 'blueOutput',
  'ROOM_BUSY': 'blueOutput',
  'ROOM_AVAILABLE': 'blueOutput',
  'ROOM_ADDED': 'blueOutput',
  'ROOM_RESTORED': 'blueOutput',
};

export const ADMIN_FILTER_PLACEHOLDER = 'Buscar por acción, email o sala...';

export const EXPORT_FILE_NAME = 'system-audits';

import type { EventResponseDTO, AttendeeDTO, CheckInStatus, OverlapStatus } from "../../shared/types/event.types";

export interface AuditDTO {
  id: number;
  userEmail: string | null;
  action: string;
  eventId: string | null;
  roomEmail: string | null;
  info: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuditListResponseDTO {
  items: AuditDTO[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface EventListItemDTO {
  id: string;
  title: string;
  creatorMail: string;
  creatorName?: string;
  roomEmail: string;
  roomName?: string;
  startTime: Date;
  endTime: Date;
  checkInStatus: CheckInStatus;
  overlapStatus: OverlapStatus;
  attendees: AttendeeDTO[];
  createdAt: Date;
  updatedAt: Date;
}

export interface EventListResponseDTO {
  items: EventListItemDTO[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export enum AuditAction {
  // ========== Autenticación ==========
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILED = "LOGIN_FAILED",
  LOGOUT = "LOGOUT",

  // ========== Check-in ==========
  CHECKIN_SUCCESS = "CHECKIN_SUCCESS",
  CHECKIN_FAILED = "CHECKIN_FAILED",

  // ========== Usuarios ==========
  USER_CREATED = "USER_CREATED",
  USER_UPDATED = "USER_UPDATED",

  // ========== Eventos ==========
  EVENT_DELETED = "EVENT_DELETED",
  EVENT_MARKED_OVERLAP = "EVENT_MARKED_OVERLAP",

  // ========== Salas ==========
  ROOM_ADDED = "ROOM_ADDED",
  ROOM_DELETED = "ROOM_DELETED",
  ROOM_BUSY = "ROOM_BUSY",
  ROOM_AVAILABLE = "ROOM_AVAILABLE",
}

export interface FlatEvent extends Pick<EventResponseDTO,
  'id' |
  'title' |
  'roomName' |
  'startTime' |
  'endTime' > {
  date: string;
  attendeesCount: number;
}

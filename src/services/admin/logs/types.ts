export type logStatusType = "success" | "info" | "error";
export type logActionType = // TODO: Definir con backend las acciones posibles
  "check-in" |
  "reservation-cancelled" |
  "room-created" |
  "event-added" |
  "room-edited" |
  "event-deleted" |
  "user-login" |
  "user-logout" |
  "system-maintenance";

// TODO: Definir con backend la información exacta
export type LogDTO = {
  id: string;
  action: string;
  description?: string;
  status: logStatusType;
  actionType?: logActionType;
  timestamp: string;
  userId?: string;
  userName?: string;
  roomId?: string;
  roomName?: string;
  eventId?: string;
  eventTitle?: string;
  metadata?: Record<string, any>;
}

export type LogsResponse = LogDTO[];
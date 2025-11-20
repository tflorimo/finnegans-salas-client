export type ResponseStatus = 'accepted' | 'declined' | 'tentative' | 'needsAction';

export enum CheckInStatus {
    PENDING = 'pending',
    CHECKED_IN = 'checked_in',
    EXPIRED = 'expired'
}

export enum OverlapStatus {
  PRIMARY = "PRIMARY",
  OVERLAPPED = "OVERLAPPED",
}
export interface AttendeeDTO {
    email: string;
    responseStatus: ResponseStatus;
    resource: boolean;
}
export type EventResponseDTO = {
    id: string;
    creatorMail: string;
    roomEmail: string;
    startTime: Date;
    title: string;
    endTime: Date;
    checkInStatus: CheckInStatus;
    attendees: AttendeeDTO[];
    overlapStatus: OverlapStatus;
    scheduleUpdatedAt?: Date | null;
    roomName: string;
    date: Date;
    creatorName: string;
    deletedAt?: Date | null;
}
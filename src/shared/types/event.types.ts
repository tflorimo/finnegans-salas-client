export type ResponseStatus = 'accepted' | 'declined' | 'tentative' | 'needsAction';
export type CheckInStatus = 'pending' | 'checked_in' | 'expired';
export interface AttendeeDTO {
    email: string;
    responseStatus: ResponseStatus;
    resource: boolean;
}
export interface EventResponseDTO {
    id: string;
    creatorMail: string;
    roomEmail: string;
    startTime: Date;
    title: string;
    endTime: Date;
    checkInStatus: CheckInStatus;
    attendees: AttendeeDTO[];
    roomName: string;
    date: Date;
    creatorName: string;
    deletedAt?: Date | null;
}
export type ResponseStatus = 'accepted' | 'declined' | 'tentative' | 'needsAction';

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
    checkedIn: boolean;
    attendees: AttendeeDTO[];
    roomName: string;
}
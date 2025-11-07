//TODO: Corregir con el modelo original del backend
/* export type FlatEvent = {
  id: string;
  title: string;
  organizer?: string;
  start: string;
  end: string;
  attendees?: number;
  guests?: string[];
  roomId?: string;
  roomName: string;
}; */

// TODO: A definir el tipado final de events.
export type ResponseStatus = 'accepted' | 'declined' | 'tentative' | 'needsAction';
//export type CheckInStatus = 'pending' | 'approved' | 'denied';

export interface AttendeeDTO {
  email: string;
  responseStatus: ResponseStatus;
}

export interface EventResponseDTO {
  id: string;
  creatorMail: string;
  title: string;
  roomEmail: string;
  roomName: string;
  startTime: Date;
  endTime: Date;
  checkedIn: boolean;
  attendees: AttendeeDTO[];
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

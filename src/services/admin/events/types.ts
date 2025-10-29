//TODO: Corregir con el modelo original del backend
export type FlatEvent = {
  id: string;
  title: string;
  organizer?: string;
  start: string;
  end: string;
  attendees?: number;
  guests?: string[];
  roomId?: string;
  roomName: string;
};

import type { RoomData } from "../../shared/types/types";

export const mockRoomData: RoomData = {
  roomDetails: {
    id: "sala-innovacion-01",
    name: "Sala Innovación",
    floor: "2do Piso",
    capacity: 12,
    status: "available",
    description: "Sala de reuniones equipada con tecnología de última generación.",
    equipment: ["Proyector 4K", "WiFi de alta velocidad", "Sistema de audio"],
    qrImageUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=sala-innovacion-01",
    nextAvailableAt: "2025-10-01T16:00:00Z",
  },
  roomEvents: [
    {
      id: "event-001",
      title: "Daily Frontend",
      organizer: "Ana García",
      guests: ["ana@company.com","carlos@company.com"],
      start: "2025-10-01T12:00:00Z",
      end: "2025-10-01T12:30:00Z",
      attendees: 5,
      status: "completed",
      roomId: "sala-innovacion-01",
      checkInStatus: true,
      description: "Sincronización diaria"
    },
    {
      id: "event-002",
      title: "Presentación ABC",
      organizer: "Roberto Martínez",
      guests: ["rob@company.com"],
      start: "2025-10-01T17:00:00Z",
      end: "2025-10-01T18:30:00Z",
      attendees: 8,
      status: "in-progress",
      roomId: "sala-innovacion-01",
      checkInStatus: false
    }
  ]
};

export const mockRoomsData: RoomData[] = [
  mockRoomData,
  {
    roomDetails: {
      id: "sala-ejecutiva-02",
      name: "Sala Ejecutiva",
      floor: "3er Piso",
      capacity: 8,
      status: "occupied",
      description: "Sala ejecutiva con tecnología premium.",
      equipment: ["Monitor 55\"", "Videoconferencia"],
      qrImageUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=sala-ejecutiva-02",
    },
    roomEvents: [
      {
        id: "event-010",
        title: "Retro Sprint",
        organizer: "Carlos López",
        guests: ["carlos@company.com"],
        start: "2025-10-02T13:00:00Z",
        end: "2025-10-02T14:00:00Z",
        attendees: 7,
        status: "booked",
        roomId: "sala-ejecutiva-02",
        checkInStatus: false
      }
    ]
  }
];
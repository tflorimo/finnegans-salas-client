export const ROOM_ENDPOINTS = {
  getRoomById: (roomId: string) => `/rooms/${roomId}`,
  getRooms: () => `/rooms`,
  checkInCurrentEvent: (roomId: string) => `/rooms/${roomId}/checkin`, // Body: { userEmail: string }
} as const;

export const ROOM_ERROR_MESSAGES = {
  roomError: "No se pudo obtener la información de la sala.",
  roomsError: "No se pudo obtener la lista de salas.",
  checkInError: "No se pudo realizar el check-in de la sala.",
  logoutError: "No se pudo cerrar la sesión correctamente.",
} as const;

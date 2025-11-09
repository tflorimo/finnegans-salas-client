import {
  ROOM_ENDPOINTS,
  ROOM_ERROR_MESSAGES,
} from "../../constants/rooms.constants";
import type { RoomResponseDTO } from "../../shared/types/room.types";
import { getErrorMessage } from "../../api/axios/axios.utils";
import axiosInstance from "../../api/axios/axios.instance";

export const roomService = {
  getRoom: async (roomEmail: string): Promise<RoomResponseDTO> => {
    try {
      const { data } = await axiosInstance.get<RoomResponseDTO>(ROOM_ENDPOINTS.getRoomById(roomEmail));
      console.log('Room data fetched:', data);
      return data;
    } catch (error) {
      const message = getErrorMessage(error, ROOM_ERROR_MESSAGES.roomError);
      throw new Error(message);
    }
  },

  getRooms: async (): Promise<RoomResponseDTO[]> => {
    try {
      const { data } = await axiosInstance.get<RoomResponseDTO[]>(ROOM_ENDPOINTS.getRooms());
      return data;
    } catch (error) {
      const message = getErrorMessage(error, ROOM_ERROR_MESSAGES.roomsError);
      throw new Error(message);
    }
  },

  checkInEvent: async (roomId: string, eventId: string, userEmail: string): Promise<void> => {
    try {
      await axiosInstance.patch(ROOM_ENDPOINTS.checkInEvent(roomId, eventId), { userEmail });
    } catch (error) {
      const message = getErrorMessage(error, ROOM_ERROR_MESSAGES.checkInError);
      throw new Error(message);
    }
  },
};

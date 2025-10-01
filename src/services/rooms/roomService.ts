import type { RoomData, RoomsResponse } from "./types";
import { ROOM_ENDPOINTS, ROOM_ERROR_MESSAGES } from "../../constants/rooms.constants";
import axiosInstance from "../axiosInstance";
import { getErrorMessage } from "./utils";

export const roomService = {
  getRoom: async (roomId: string): Promise<RoomData> => {
    try {
      const { data } = await axiosInstance.get<RoomData>(ROOM_ENDPOINTS.getRoomById(roomId));
      return data;
    } catch (error) {
      const message = getErrorMessage(error, ROOM_ERROR_MESSAGES.roomError);
      throw new Error(message);
    }
  },

  getRooms: async (): Promise<RoomsResponse> => {
    try {
      const { data } = await axiosInstance.get<RoomsResponse>(ROOM_ENDPOINTS.getRooms());
      return data;
    } catch (error) {
      const message = getErrorMessage(error, ROOM_ERROR_MESSAGES.roomsError);
      throw new Error(message);
    }
  },

  checkInEvent: async (eventId: string): Promise<void> => {
    try {
      await axiosInstance.post(ROOM_ENDPOINTS.checkInEvent(eventId));
    } catch (error) {
      const message = getErrorMessage(error, ROOM_ERROR_MESSAGES.checkInError);
      throw new Error(message);
    }
  }
};


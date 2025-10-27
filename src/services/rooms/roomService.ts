import {
  ROOM_ENDPOINTS,
  ROOM_ERROR_MESSAGES,
} from "../../constants/rooms.constants";
import type { RoomData, RoomsResponse } from "../../shared/types/types";
import { getErrorMessage } from "../../shared/utils/utils";
import axiosInstance from "../axiosInstance";
import { mockRoomData, mockRoomsData } from "./roomMocks";

export const roomService = {
  getRoom: async (/* roomId: string */): Promise<RoomData> => {
    try {
      // TODO: Implementación real (descomentar cuando se integre con Backend)
      /* const { data } = await axiosInstance.get<RoomData>(
        ROOM_ENDPOINTS.getRoomById(roomId)
      );
      return data; */
      // TODO: Eliminar cuando se integre con Backend
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return mockRoomData;
    } catch (error) {
      const message = getErrorMessage(error, ROOM_ERROR_MESSAGES.roomError);
      throw new Error(message);
    }
  },

  getRooms: async (): Promise<RoomsResponse> => {
    try {
      // TODO: Eliminar cuando se integre con Backend
      await new Promise((resolve) => setTimeout(resolve, 800));
      return mockRoomsData;
      // TODO: Implementación real (descomentar cuando se integre con Backend)
      //const { data } = await axiosInstance.get<RoomsResponse>(ROOM_ENDPOINTS.getRooms());
      //return data;
    } catch (error) {
      const message = getErrorMessage(error, ROOM_ERROR_MESSAGES.roomsError);
      throw new Error(message);
    }
  },

  checkInEvent: async (eventId: string): Promise<void> => {
    try {
      await axiosInstance.patch(ROOM_ENDPOINTS.checkInEvent(eventId));
    } catch (error) {
      const message = getErrorMessage(error, ROOM_ERROR_MESSAGES.checkInError);
      throw new Error(message);
    }
  },
};

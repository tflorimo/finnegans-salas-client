import { /*ADMIN_ENDPOINTS,*/ ADMIN_ERROR_MESSAGES } from "../../constants/admin.constants";
//import axiosInstance from "../axiosInstance";
import type { /*EventsData,*/ RoomData } from "../../shared/types/types";
import type { LogsResponse } from "./logs/types";
import { mockLogsData } from "./logs/logsMocks"; // Eliminar cuando se integre con Backend
import { getErrorMessage } from "../../shared/utils/axios.utils";
import { mockRoomsData } from "../rooms/roomMocks";

//TODO: Revisar respuesta de getAllEventsAdmin cuando se integre con Backend
export const adminService = {
  getAllEventsAdmin: async (): Promise<RoomData[]> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      return mockRoomsData;
/*       const { data } = await axiosInstance.get<EventsData>(ADMIN_ENDPOINTS.getAllEventsAdmin());
      return data; */
    } catch (error) {
      const message = getErrorMessage(error, ADMIN_ERROR_MESSAGES.eventsError);
      throw new Error(message);
    }
  },

  getLogs: async (): Promise<LogsResponse> => {
    try {
      // MOCKS (Comentar cuando se integre con Backend)
      await new Promise(resolve => setTimeout(resolve, 800));
      return mockLogsData;

      // Implementación real (descomentar cuando se integre con Backend)
      // const { data } = await axiosInstance.get<LogsResponse>(ADMIN_ENDPOINTS.getLogs());
      // return data;
    } catch (error) {
      const message = getErrorMessage(error, ADMIN_ERROR_MESSAGES.logsError);
      throw new Error(message);
    }
  },
}
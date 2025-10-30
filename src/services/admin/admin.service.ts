import { /*ADMIN_ENDPOINTS,*/ ADMIN_ENDPOINTS, ADMIN_ERROR_MESSAGES } from "../../constants/admin.constants";
//import axiosInstance from "../axiosInstance";
//import type { /*EventsData,*/ EventsData, RoomData } from "../../shared/types/types";
import type { LogsResponse } from "./logs/types";
import { mockLogsData } from "./logs/logsMocks"; // Eliminar cuando se integre con Backend
import { getErrorMessage } from "../../shared/utils/axios.utils";
//import { mockRoomsData } from "../rooms/roomMocks";
import axiosInstance from "../axiosInstance";
import type { EventResponseDTO } from "./events/types";
import axios from "axios";

export const adminService = {
  async getAllEventsAdmin(): Promise<EventResponseDTO[]> {
    try {
      const { data } = await axiosInstance.get<EventResponseDTO[]>(ADMIN_ENDPOINTS.getAllEventsAdmin());
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        localStorage.removeItem("token");
        return []; // Retorna array vacío para evitar errores en la UI
      }

      throw error;
    }
  },

  async getLogs(): Promise<LogsResponse> {
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
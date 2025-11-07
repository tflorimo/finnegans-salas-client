import { ADMIN_ENDPOINTS, ADMIN_ERROR_MESSAGES } from "../../constants/admin.constants";
import type { LogsResponse } from "./logs/types";
import { mockLogsData } from "./logs/logsMocks"; 
import { getErrorMessage } from "../../api/axios/axios.utils";
import axiosInstance from "../../api/axios/axios.instance";
import type { EventResponseDTO } from "../../shared/types/event.types";
import axios from "axios";
import { clearAuthToken } from "../../shared/utils/localStorage.utils";

export const adminService = {

  async getAllEventsAdmin(): Promise<EventResponseDTO[]> {
    try {
      const { data } = await axiosInstance.get<EventResponseDTO[]>(ADMIN_ENDPOINTS.getAllEventsAdmin());
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        clearAuthToken();
        return []; // Retorna array vacío para evitar errores en la UI
      }

      throw error;
    }
  },

  // TODO: Conectar Auditorías con backend
  async getLogs(): Promise<LogsResponse> {
    try {
      // MOCKS (Eliminar cuando se integre con Backend)
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
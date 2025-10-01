import { ADMIN_ENDPOINTS, ADMIN_ERROR_MESSAGES } from "../../constants/admin.constants";
import axiosInstance from "../axiosInstance";
import type { EventsData } from "../rooms/types";
import { getErrorMessage } from "../rooms/utils";

export const adminService = {
  getAllEventsAdmin : async (): Promise<EventsData> => {
    try {
      const { data } = await axiosInstance.get<EventsData>(ADMIN_ENDPOINTS.getAllEventsAdmin());
      return data;
    } catch (error) {
      const message = getErrorMessage(error, ADMIN_ERROR_MESSAGES.eventsError);
      throw new Error(message);
    }
  },

  getLogs: async (): Promise<void> => {
    try {
      await axiosInstance.get(ADMIN_ENDPOINTS.getLogs());
    } catch (error) {
      const message = getErrorMessage(error, ADMIN_ERROR_MESSAGES.unknownError);
      throw new Error(message);
    }
  },
}
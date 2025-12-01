import axiosInstance from "../../api/axios/axios.instance";
import { getErrorMessage } from "../../api/axios/axios.utils";
import { ADMIN_ENDPOINTS, ADMIN_ERROR_MESSAGES } from "../../constants/admin.constants";
import type { AuditListResponseDTO, EventListResponseDTO } from "./admin.types";
import { buildPaginatedUrl, fetchAllPages } from "./admin.utils";

export const adminService = {

  async getEvents(page?: number, perPage?: number, search?: { key: string, value: string }): Promise<EventListResponseDTO> {
    try {
      const url = buildPaginatedUrl(ADMIN_ENDPOINTS.getAllEvents(), page, perPage, search);
      const { data } = await axiosInstance.get<EventListResponseDTO>(url);
      return data;
    } catch (error) {
      const message = getErrorMessage(error, ADMIN_ERROR_MESSAGES.eventsError);
      throw new Error(message);
    }
  },

  async getAllEvents(): Promise<EventListResponseDTO> {
    try {
      const allItems = await fetchAllPages<EventListResponseDTO>(ADMIN_ENDPOINTS.getAllEvents());
      
      return {
        items: allItems,
        total: allItems.length,
        page: 1,
        perPage: allItems.length,
        totalPages: 1,
      };
    } catch (error) {
      const message = getErrorMessage(error, ADMIN_ERROR_MESSAGES.eventsError);
      throw new Error(message);
    }
  },

  async getAudits(page?: number, perPage?: number, search?: { key: string, value: string }): Promise<AuditListResponseDTO> {
    try {
      const url = buildPaginatedUrl(ADMIN_ENDPOINTS.getAudits(), page, perPage, search);
      const { data } = await axiosInstance.get<AuditListResponseDTO>(url);
      return data;
    } catch (error) {
      const message = getErrorMessage(error, ADMIN_ERROR_MESSAGES.logsError);
      throw new Error(message);
    }
  },

  async getAllAudits(): Promise<AuditListResponseDTO> {
    try {
      const allItems = await fetchAllPages<AuditListResponseDTO>(ADMIN_ENDPOINTS.getAudits());
      
      return {
        items: allItems,
        total: allItems.length,
        page: 1,
        perPage: allItems.length,
        totalPages: 1,
      };
    } catch (error) {
      const message = getErrorMessage(error, ADMIN_ERROR_MESSAGES.logsError);
      throw new Error(message);
    }
  },
}
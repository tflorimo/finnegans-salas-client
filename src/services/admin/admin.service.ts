import { ADMIN_ENDPOINTS, ADMIN_ERROR_MESSAGES } from "../../constants/admin.constants";
import { getErrorMessage } from "../../api/axios/axios.utils";
import axiosInstance from "../../api/axios/axios.instance";
import type { EventListResponseDTO } from "./audits/types";
import type { AuditListResponseDTO } from "./audits/types";

const buildPaginatedUrl = (baseUrl: string, page?: number, perPage?: number): string => {
  const params = new URLSearchParams();
  if (page) params.append('page', String(page));
  if (perPage) params.append('perPage', String(perPage));
  
  const query = params.toString();
  return query ? `${baseUrl}?${query}` : baseUrl;
};

export const adminService = {

  async getEvents(page?: number, perPage?: number): Promise<EventListResponseDTO> {
    try {
      const url = buildPaginatedUrl(ADMIN_ENDPOINTS.getAllEventsAdmin(), page, perPage);
      const { data } = await axiosInstance.get<EventListResponseDTO>(url);
      return data;
    } catch (error) {
      const message = getErrorMessage(error, ADMIN_ERROR_MESSAGES.eventsError);
      throw new Error(message);
    }
  },

  async getAllEvents(): Promise<EventListResponseDTO> {
    try {
      const { data } = await axiosInstance.get<EventListResponseDTO>(ADMIN_ENDPOINTS.getAllEventsAdmin());
      return data;
    } catch (error) {
      const message = getErrorMessage(error, ADMIN_ERROR_MESSAGES.eventsError);
      throw new Error(message);
    }
  },

  async getAudits(page?: number, perPage?: number): Promise<AuditListResponseDTO> {
    try {
      const url = buildPaginatedUrl(ADMIN_ENDPOINTS.getAudits(), page, perPage);
      const { data } = await axiosInstance.get<AuditListResponseDTO>(url);
      return data;
    } catch (error) {
      const message = getErrorMessage(error, ADMIN_ERROR_MESSAGES.logsError);
      throw new Error(message);
    }
  },

  async getAllAudits(): Promise<AuditListResponseDTO> {
    try {
      const { data } = await axiosInstance.get<AuditListResponseDTO>(ADMIN_ENDPOINTS.getAudits());
      return data;
    } catch (error) {
      const message = getErrorMessage(error, ADMIN_ERROR_MESSAGES.logsError);
      throw new Error(message);
    }
  },
}
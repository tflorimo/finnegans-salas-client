import { AUTH_ENDPOINTS } from "../../constants/auth.constants";
import { ROOM_ERROR_MESSAGES } from "../../constants/rooms.constants";
import { getErrorMessage } from "../../api/axios/axios.utils";
import type { AuthResponse } from "./auth.types";
import axiosInstance from "../../api/axios/axios.instance";
import type { AxiosRequestConfig } from "axios";

const AUTH_HEADER = (token: string) => `Bearer ${token}`;
const REFRESH_REQUEST_CONFIG: AxiosRequestConfig = {
  withCredentials: true,
  headers: { "x-skip-auth-refresh": "true" },
};

let isLoggedOut = false;

export const authService = {
  loginApp: async (): Promise<AuthResponse> => {
    isLoggedOut = false;
    
    try {
      const { data } = await axiosInstance.get(AUTH_ENDPOINTS.loginApp());
      return data;

    } catch (error) {
      const message = getErrorMessage(error, ROOM_ERROR_MESSAGES.roomError);
      throw new Error(message);
    }
  },

  logoutApp: async (): Promise<void> => {
    try {
      await axiosInstance.post(AUTH_ENDPOINTS.logoutApp(), {}, {
        withCredentials: true, 
      });
    } catch (error) {
      const message = getErrorMessage(error, ROOM_ERROR_MESSAGES.logoutError);
      console.error("Error en logout del servidor:", message);
    } finally {
      isLoggedOut = true;
      
      delete axiosInstance.defaults.headers.common.Authorization;
      const storedTheme = localStorage.getItem("finnegans-theme");
      
      localStorage.clear();
      sessionStorage.clear();
      
      if (storedTheme) {
        localStorage.setItem("finnegans-theme", storedTheme);
      }
    }
  },

  refreshAccessToken: async (): Promise<string | null> => {
    if (isLoggedOut) {
      return null;
    }

    try {
      const { data } = await axiosInstance.post<{ accessToken: string | null }>(
        AUTH_ENDPOINTS.refresh(),
        {},
        REFRESH_REQUEST_CONFIG,
      );

      const newToken = data.accessToken ?? null;

      if (newToken) {
        axiosInstance.defaults.headers.common.Authorization = AUTH_HEADER(newToken);
      } else {
        delete axiosInstance.defaults.headers.common.Authorization;
      }

      return newToken;
    } catch (error) {
      const isUnauthorized = error instanceof Error && 'response' in error && (error as any).response?.status === 401;
      if (!isUnauthorized) {
        console.error("Error al refrescar token:", error);
      }
      delete axiosInstance.defaults.headers.common.Authorization;
      return null;
    }
  },
};
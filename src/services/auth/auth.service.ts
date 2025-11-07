import { AUTH_ENDPOINTS } from "../../constants/auth.constants";
import { ROOM_ERROR_MESSAGES } from "../../constants/rooms.constants";
import { getErrorMessage } from "../../api/axios/axios.utils";
import type { AuthResponse } from "./types";
import axiosInstance from "../../api/axios/axios.instance";
import type { AxiosRequestConfig } from "axios";
import { clearAuthToken, clearStoredUserEmail, setAuthToken } from "../../context/auth/utils";

const AUTH_HEADER = (token: string) => `Bearer ${token}`;
const REFRESH_REQUEST_CONFIG: AxiosRequestConfig = {
  withCredentials: true,
  headers: { "x-skip-auth-refresh": "true" },
};

export const authService = {
  loginApp: async (): Promise<AuthResponse> => {
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
      await axiosInstance.post(AUTH_ENDPOINTS.logoutApp());
    } finally {
      // Aunque falle la llamada, vaciamos la sesión del front.
      clearAuthToken();
      clearStoredUserEmail();
      delete axiosInstance.defaults.headers.common.Authorization;
    }
  },
  // TODO: Se implementará para solicitar datos iniciales del usuario (Ya está implementado en)
  /* checkAuth: async (): Promise<{ user: AuthUser; authenticated: boolean }> => {
    try {
      const { data } = await axiosInstance.get<{
        user: AuthUser;
        authenticated: boolean;
      }>(AUTH_ENDPOINTS.checkAuth());
      return data;
    } catch (error) {
      const message = getErrorMessage(error, ROOM_ERROR_MESSAGES.roomError);
      throw new Error(message);
    }
  }, */

  refreshAccessToken: async (): Promise<string | null> => {
    try {
      const { data } = await axiosInstance.post<{ accessToken: string | null }>(
        AUTH_ENDPOINTS.refresh(),
        {}, 
        REFRESH_REQUEST_CONFIG, 
      );

      const newToken = data.accessToken ?? null;

      if (newToken) {
        setAuthToken(newToken);
        axiosInstance.defaults.headers.common.Authorization = AUTH_HEADER(newToken);
      } else {
        clearAuthToken();
        delete axiosInstance.defaults.headers.common.Authorization;
      }

      return newToken;
    } catch (error) {
      console.error("Error al refrescar token:", error);
      clearAuthToken();
      delete axiosInstance.defaults.headers.common.Authorization;
      return null;
    }
  },

};
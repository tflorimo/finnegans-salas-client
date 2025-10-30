import { AUTH_ENDPOINTS } from "../../constants/auth.constants";
import { ROOM_ERROR_MESSAGES } from "../../constants/rooms.constants";
import { getErrorMessage } from "../../shared/utils/axios.utils";
import type { AuthResponse } from "./types";
import axiosInstance from "../axiosInstance";

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

  async logoutApp(): Promise<void> {
    try {
      await axiosInstance.post(AUTH_ENDPOINTS.logoutApp());
      localStorage.removeItem("token");
    } catch (error) {
      const message = getErrorMessage(error, ROOM_ERROR_MESSAGES.roomError);
      throw new Error(message);
    }
  },
    // TODO: Se implementará para solicitar datos iniciales del usuario
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

  async refreshAccessToken(): Promise<string | null> {
    try {
      const { data } = await axiosInstance.post<{ accessToken: string }>(
        AUTH_ENDPOINTS.refresh(),
        {},
        {
          withCredentials: true,
          headers: { "x-skip-auth-refresh": "true" },
        }
      );

      const newToken = data.accessToken ?? null;

      if (newToken) {
        localStorage.setItem("token", newToken);
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${newToken}`;
      }

      return newToken;
    } catch (error) {
      console.error("Error al refrescar token:", error);
      localStorage.removeItem("token");
      return null;
    }
  }
};
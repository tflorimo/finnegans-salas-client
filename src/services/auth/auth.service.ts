import { AUTH_ENDPOINTS } from "../../constants/auth.constants";
import { ROOM_ERROR_MESSAGES } from "../../constants/rooms.constants";
import { getErrorMessage } from "../../shared/utils/axios.utils";
import axiosInstance from "../axiosInstance";

interface AuthTokens {
  access_token: string;
  refresh_token: string;
  expiry_date: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  picture: string;
  role: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user: AuthUser;
  appToken: string;
  tokens: AuthTokens;
  next: string;
}

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
};

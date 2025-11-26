import { isAxiosError } from "axios";
import axiosInstance from "./axios.instance";

const AUTH_HEADER = (token: string) => `Bearer ${token}`;

export const setAuthHeader = (token: string) => {
  axiosInstance.defaults.headers.common.Authorization = AUTH_HEADER(token);
};

export const clearAuthHeader = () => {
  axiosInstance.defaults.headers.common.Authorization = null;
};

export const getErrorMessage = (error: unknown, fallbackMessage: string) => {
  if (isAxiosError<{ message?: string }>(error)) {
    return error.response?.data?.message ?? fallbackMessage;
  }

  if (error instanceof Error) {
    return error.message || fallbackMessage;
  }

  return fallbackMessage;
};

export const isTokenExpiringSoon = (jwt: string, skewSeconds = 10): boolean => {
  try {
    const [, payloadB64] = jwt.split(".");
    const payload = JSON.parse(atob(payloadB64));
    const exp = Number(payload?.exp ?? 0); // en segundos
    const now = Math.floor(Date.now() / 1000);

    return !exp || exp <= now + skewSeconds;
  } catch {
    throw new Error("Invalid JWT token");
  }
};
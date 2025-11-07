import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { getAuthToken } from "../../shared/utils/localStorage.utils";
import { authService } from "../../services/auth/auth.service";
import {
  applyAuthorizationHeader,
  isRefreshCall,
  isTokenExpiringSoon,
} from "./axios.helpers";

type RetriableConfig = InternalAxiosRequestConfig & { _retry?: boolean };

const DEFAULT_BASE_URL = import.meta.env.VITE_BASE_URL;
const DEFAULT_TIMEOUT = import.meta.env.VITE_TIMEOUT || 5000;

const axiosInstance = axios.create({
  baseURL: DEFAULT_BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

let refreshPromise: Promise<string | null> | null = null;

const getOrStartRefresh = (): Promise<string | null> => {
  if (!refreshPromise) {
    refreshPromise = authService.refreshAccessToken().finally(() => {
      refreshPromise = null;
    });
  }
  return refreshPromise;
};

axiosInstance.interceptors.request.use(async (config) => {
  const token = getAuthToken();
  if (!token) return config;

  if (!isRefreshCall(config) && isTokenExpiringSoon(token, 10)) {
    const newToken = await getOrStartRefresh();
    if (newToken) {
      applyAuthorizationHeader(config, newToken);
      return config;
    }
  }

  applyAuthorizationHeader(config, token);
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalConfig = error.config as RetriableConfig | undefined;

    if (
      error.response?.status === 401 &&
      originalConfig &&
      !originalConfig._retry &&
      !isRefreshCall(originalConfig)
    ) {
      originalConfig._retry = true;
      const newToken = await getOrStartRefresh();
      if (newToken) {
        applyAuthorizationHeader(originalConfig, newToken);
        return axiosInstance(originalConfig);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;

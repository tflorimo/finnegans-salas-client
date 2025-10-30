import axios, {
  AxiosError,
  AxiosHeaders,
  type AxiosRequestHeaders,
  type InternalAxiosRequestConfig,
} from "axios";
import { getAuthToken } from "../context/auth/utils";
import { authService } from "./auth/auth.service";

const DEFAULT_BASE_URL = import.meta.env.VITE_BASE_URL;
const DEFAULT_TIMEOUT = import.meta.env.VITE_TIMEOUT || 5000;

type RetriableConfig = InternalAxiosRequestConfig & { _retry?: boolean };

const axiosInstance = axios.create({
  baseURL: DEFAULT_BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

const shouldSkipAuthRefresh = (
  headers: AxiosRequestHeaders | AxiosHeaders | undefined,
): boolean => {
  if (!headers) return false;
  if (headers instanceof AxiosHeaders) {
    return headers.get("x-skip-auth-refresh") === "true";
  }
  return headers["x-skip-auth-refresh"] === "true";
};

const withBearer = (
  headers: AxiosRequestHeaders | AxiosHeaders | undefined,
  token: string,
): AxiosRequestHeaders | AxiosHeaders => {
  if (headers instanceof AxiosHeaders) {
    headers.set("Authorization", `Bearer ${token}`);
    return headers;
  }

  const merged = AxiosHeaders.from(headers ?? {});
  merged.set("Authorization", `Bearer ${token}`);
  return merged;
};

axiosInstance.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers = withBearer(config.headers, token);
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const { response, config } = error;
    const originalConfig = config as RetriableConfig | undefined;

    if (
      response?.status === 401 &&
      originalConfig &&
      !originalConfig._retry &&
      !shouldSkipAuthRefresh(originalConfig.headers)
    ) {
      originalConfig._retry = true;

      const newToken = await authService.refreshAccessToken();

      if (newToken) {
        originalConfig.headers = withBearer(originalConfig.headers, newToken);
        return axiosInstance(originalConfig);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;

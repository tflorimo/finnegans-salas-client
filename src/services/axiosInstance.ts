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
const AUTHORIZATION_HEADER = "Authorization";
const SKIP_REFRESH_HEADER = "x-skip-auth-refresh";
const BEARER_PREFIX = "Bearer";

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
    return headers.get(SKIP_REFRESH_HEADER) === "true";
  }
  return headers[SKIP_REFRESH_HEADER] === "true";
};

const setAuthorizationHeader = (
  headers: AxiosRequestHeaders | AxiosHeaders | undefined,
  token: string,
): AxiosRequestHeaders | AxiosHeaders => {
  if (headers instanceof AxiosHeaders) {
    headers.set(AUTHORIZATION_HEADER, `${BEARER_PREFIX} ${token}`);
    return headers;
  }

  const normalizedHeaders = AxiosHeaders.from(headers ?? {});
  normalizedHeaders.set(AUTHORIZATION_HEADER, `${BEARER_PREFIX} ${token}`);
  return normalizedHeaders;
};

const attachTokenToRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = getAuthToken();
  if (token) {
    config.headers = setAuthorizationHeader(config.headers, token);
  }
  return config;
};

const handleResponseError = async (error: AxiosError) => {
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
      originalConfig.headers = setAuthorizationHeader(originalConfig.headers, newToken);
      return axiosInstance(originalConfig);
    }
  }

  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(attachTokenToRequest);
axiosInstance.interceptors.response.use((response) => response, handleResponseError);

export default axiosInstance;

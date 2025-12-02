import {
  AxiosHeaders,
  type AxiosRequestHeaders,
  type InternalAxiosRequestConfig,
} from "axios";
import { isTokenExpiringSoon } from "./axios.utils";

export const AUTHORIZATION_HEADER = "Authorization";
export const SKIP_REFRESH_HEADER = "x-skip-auth-refresh";
export const BEARER_PREFIX = "Bearer";

type HeaderInput = AxiosRequestHeaders | AxiosHeaders | undefined;

const ensureAxiosHeaders = (headers: HeaderInput): AxiosHeaders =>
  headers instanceof AxiosHeaders ? headers : AxiosHeaders.from(headers ?? {});

export const shouldSkipAuthRefresh = (headers: HeaderInput): boolean => {
  return (headers instanceof AxiosHeaders) ? Boolean(headers.get(SKIP_REFRESH_HEADER)) : false;
};

export const applyAuthorizationHeader = (
  config: InternalAxiosRequestConfig,
  token: string,
): void => {
  const headers = ensureAxiosHeaders(config.headers);
  headers.set(AUTHORIZATION_HEADER, `${BEARER_PREFIX} ${token}`);
  config.headers = headers;
};

export { isTokenExpiringSoon };

export const isRefreshCall = (config: InternalAxiosRequestConfig): boolean => {
  const url = config.url ? config.url.toLowerCase() : "";
  return url.includes("/auth/refresh") || shouldSkipAuthRefresh(config.headers);
};

import type { AuthState } from "../context/auth/types";

export const INITIAL_STATE: AuthState = {
  userEmail: null,
  authToken: null,
};

export const AUTH_ENDPOINTS = {
  loginApp: () => `/auth/google`,
  refresh: () => `/auth/refresh`,
  logoutApp: () => `/auth/logout`,
} as const;

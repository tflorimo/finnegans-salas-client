import type { AuthState } from "../context/auth/types";

export const INITIAL_STATE: AuthState = {
  logged: false,
  userEmail: null,
};

export const AUTH_ENDPOINTS = {
  loginApp: () => `/auth/google`,
} as const;

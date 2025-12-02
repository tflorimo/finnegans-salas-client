export const AUTH_ENDPOINTS = {
  loginApp: () => `/auth/google`,
  refresh: () => `/auth/refresh`,
  logoutApp: () => `/auth/logout`,
} as const;

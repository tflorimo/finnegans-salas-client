const TOKEN_STORAGE_KEY = "token";
const USER_EMAIL_STORAGE_KEY = "userEmail";

export const getAuthToken = (): string | null =>
  localStorage.getItem(TOKEN_STORAGE_KEY);

export const setAuthToken = (token: string): void => {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const clearAuthToken = (): void => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
};

export const getStoredUserEmail = (): string | null =>
  localStorage.getItem(USER_EMAIL_STORAGE_KEY);

export const setStoredUserEmail = (email: string): void => {
  localStorage.setItem(USER_EMAIL_STORAGE_KEY, email);
};

export const clearStoredUserEmail = (): void => {
  localStorage.removeItem(USER_EMAIL_STORAGE_KEY);
};


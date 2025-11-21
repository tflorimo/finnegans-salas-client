const USER_EMAIL_STORAGE_KEY = "userEmail";
const RETURN_TO_KEY = "returnTo";
const LOGIN_MESSAGE_KEY = "loginMessage";
const CURRENT_PATH_KEY = "currentPath";

export const getStoredUserEmail = (): string | null =>
  localStorage.getItem(USER_EMAIL_STORAGE_KEY);

export const setStoredUserEmail = (email: string): void => {
  localStorage.setItem(USER_EMAIL_STORAGE_KEY, email);
};

export const clearStoredUserEmail = (): void => {
  localStorage.removeItem(USER_EMAIL_STORAGE_KEY);
};

export const getCurrentPath = (): string | null =>
  sessionStorage.getItem(CURRENT_PATH_KEY);

export const setCurrentPath = (path: string): void => {
  sessionStorage.setItem(CURRENT_PATH_KEY, path);
};

export const clearCurrentPath = (): void => {
  sessionStorage.removeItem(CURRENT_PATH_KEY);
};

export const getReturnTo = (): string | null =>
  sessionStorage.getItem(RETURN_TO_KEY);

export const setReturnTo = (path: string): void => {
  sessionStorage.setItem(RETURN_TO_KEY, path);
};

export const clearReturnTo = (): void => {
  sessionStorage.removeItem(RETURN_TO_KEY);
};

export const getLoginMessage = (): string | null =>
  sessionStorage.getItem(LOGIN_MESSAGE_KEY);

export const setLoginMessage = (message: string): void => {
  sessionStorage.setItem(LOGIN_MESSAGE_KEY, message);
};

export const clearLoginMessage = (): void => {
  sessionStorage.removeItem(LOGIN_MESSAGE_KEY);
};

export const clearNavigationState = (): void => {
  clearReturnTo();
  clearLoginMessage();
  clearCurrentPath();
};


export const ACTION_TYPES = {
  login: "[Auth] Login",
  logout: "[Auth] Logout",
};

export type AuthState = {
  logged: boolean;
  userEmail: string | null;
  authToken: string | null;
};

export type AuthContextProps = AuthState & {
  login: (token: string, email: string) => void;
  logout: () => void;
};

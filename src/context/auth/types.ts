export const ACTION_TYPES = {
  login: "[Auth] Login",
  logout: "[Auth] Logout",
};

export type AuthState = {
  logged: boolean;
  userEmail: string | null;
  authToken: string | null;
};

// TODO: Se modificará cuando se defina el UserDTO
export type UserDTO = {
  id: string;
  name: string;
};

export type AuthContextProps = AuthState & {
  login: (token: string, email: string) => void;
  logout: () => void;
};

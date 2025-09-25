export const ACTION_TYPES = {
  login: "[Auth] Login",
  logout: "[Auth] Logout",
};

export type AuthState = {
  logged: boolean;
  user: UserDTO | undefined;
};

// TODO: Se modificará cuando se defina el UserDTO
export type UserDTO = {
  id: string;
  name: string;
};

export type AuthContextProps = AuthState & {
  login: (user: UserDTO) => void;
  logout: () => void;
};

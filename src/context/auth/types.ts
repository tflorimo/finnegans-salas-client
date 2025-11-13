export type AuthState = {
  userEmail: string | null;
  authToken: string | null;
};

export type AuthContextProps = AuthState & {
  login: (token: string, email: string) => void;
  logout: () => void;
};

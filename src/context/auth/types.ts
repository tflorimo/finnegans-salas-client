export type AuthState = {
  userEmail: string | null;
  authToken: string | null;
  userRole: 'admin' | 'user' | null;
};

export type AuthContextProps = AuthState & {
  login: (token: string, email: string, role: 'admin' | 'user') => void;
  logout: () => void;
};

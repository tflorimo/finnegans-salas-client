import { createContext } from "react";
import type { AuthContextProps } from "./types";

export const AuthContext = createContext<AuthContextProps>({
  userEmail: null,
  authToken: null,
  userRole: null,
  login: (token: string, email: string, role: 'admin' | 'user') => {
    void token;
    void email;
    void role;
  },
  logout: () => { },
});

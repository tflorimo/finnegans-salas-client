import { createContext } from "react";
import type { AuthContextProps } from "./types";

export const AuthContext = createContext<AuthContextProps>({
  logged: false,
  userEmail: null,
  login: (token: string, email: string) => { void token; void email; },
  logout: () => {},
});

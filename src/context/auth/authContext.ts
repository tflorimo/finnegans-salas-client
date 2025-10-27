import { createContext } from "react";
import type { AuthContextProps } from "./types";

export const AuthContext = createContext<AuthContextProps>({
  logged: false,
  login: (token: string) => void token,
  logout: () => {},
});

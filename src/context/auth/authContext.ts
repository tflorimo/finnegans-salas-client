import { createContext } from "react";
import type { AuthContextProps, UserDTO } from "./types";

export const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  logged: false,
  login: (user: UserDTO) => void user,
  logout: () => {},
});

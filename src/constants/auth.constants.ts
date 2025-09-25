import type { AuthState } from "../context/auth/types";

export const INITIAL_STATE: AuthState = {
  logged: false,
  user: undefined,
};

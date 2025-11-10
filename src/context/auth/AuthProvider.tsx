import { useState, type ReactNode } from "react";
import { AuthContext } from "./authContext";
import {
  clearAuthToken,
  clearStoredUserEmail,
  getAuthToken,
  getStoredUserEmail,
  setAuthToken,
  setStoredUserEmail,
} from "../../shared/utils/localStorage.utils";
import { authService } from "../../services/auth/auth.service";
import { useCallback } from "react";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authToken, setAuthTokenState] = useState<string | null>(getAuthToken());
  const [logged, setLogged] = useState<boolean>(() => authToken !== null);
  const [userEmail, setUserEmail] = useState<string | null>(getStoredUserEmail());

  const login = (token: string, email: string) => {
    setAuthToken(token);
    setStoredUserEmail(email);
    setAuthTokenState(token);
    setLogged(true);
    setUserEmail(email);
  };

  const logout = useCallback(async () => {
    try {
      await authService.logoutApp();
    } catch (error) {
      console.error("Error en logout:", error);
    } finally {
      clearAuthToken();
      clearStoredUserEmail();
      setAuthTokenState(null);
      setLogged(false);
      setUserEmail(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ logged, userEmail, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

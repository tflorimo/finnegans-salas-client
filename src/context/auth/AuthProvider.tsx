import { useCallback, useState, type ReactNode } from "react";
import { authService } from "../../services/auth/auth.service";
import {
  clearAuthToken,
  clearStoredUserEmail,
  getAuthToken,
  getStoredUserEmail,
  setAuthToken,
  setStoredUserEmail,
} from "../../shared/utils/localStorage.utils";
import { AuthContext } from "./authContext";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authToken, setAuthTokenState] = useState<string | null>(getAuthToken());
  const [userEmail, setUserEmail] = useState<string | null>(getStoredUserEmail());

  const login = (token: string, email: string) => {
    setAuthToken(token);
    setStoredUserEmail(email);
    setAuthTokenState(token);
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
      setUserEmail(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userEmail, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

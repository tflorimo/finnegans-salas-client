import { useCallback, useEffect, useState, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setUnauthenticatedHandler } from "../../api/axios/axios.instance";
import { clearAuthHeader, setAuthHeader } from "../../api/axios/axios.utils";
import { authService } from "../../services/auth/auth.service";
import { decodeJwt } from "../../shared/utils/decodeJwt.utils";
import {
  clearNavigationState,
  setCurrentPath,
} from "../../shared/utils/localStorage.utils";
import { AuthContext } from "./authContext";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [authToken, setAuthTokenState] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<'admin' | 'user' | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [hasRedirected] = useState(false);

  useEffect(() => {
    if (authToken && location.pathname !== "/login" &&
      location.pathname !== "/" &&
      location.pathname !== "/auth/callback") {
      setCurrentPath(location.pathname);
    }
  }, [location.pathname, authToken]);

  useEffect(() => {
    setUnauthenticatedHandler(() => {
      setAuthTokenState(null);
      setUserEmail(null);
      setUserRole(null);
      clearAuthHeader();
      clearNavigationState();
      navigate('/login', { replace: true });
    });
  }, [navigate]);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const newToken = await authService.refreshAccessToken();

        if (newToken) {
          const decoded = decodeJwt(newToken);

          if (decoded && decoded.email) {
            setAuthTokenState(newToken);
            const email = (decoded.email as string) || null;
            const role = (decoded.role as 'admin' | 'user') || 'user';
            setUserEmail(email);
            setUserRole(role);
            setAuthHeader(newToken);
          } else {
            clearAuthHeader();
            console.warn('Token refreshed pero sin datos válidos, descartando');
          }
        } else {
          clearAuthHeader();
        }
      } catch (error) {
        clearAuthHeader();
        throw new Error(`${error}`)
      } finally {
        setIsInitializing(false);
      }
    };

    initializeAuth();
  }, [navigate, hasRedirected]);

  const login = useCallback((token: string, email: string, role: 'admin' | 'user') => {
    setAuthTokenState(token);
    setUserRole(role);
    setUserEmail(email);
    setAuthHeader(token);
  }, []);

  const logout = useCallback(async () => {
    try {
      await authService.logoutApp();
    } catch (error) {
      console.error("Error en logout:", error);
    } finally {
      setAuthTokenState(null);
      setUserEmail(null);
      setUserRole(null);
      clearAuthHeader();
      clearNavigationState();
    }
  }, []);

  if (isInitializing) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ userEmail, authToken, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

import { useCallback, useState, useEffect, type ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authService } from "../../services/auth/auth.service";
import axiosInstance, { setUnauthenticatedHandler } from "../../api/axios/axios.instance";
import {
  clearStoredUserEmail,
  getStoredUserEmail,
  setStoredUserEmail,
  clearNavigationState,
  getCurrentPath,
  setCurrentPath,
  clearCurrentPath,
} from "../../shared/utils/localStorage.utils";
import { AuthContext } from "./authContext";

const AUTH_HEADER = (token: string) => `Bearer ${token}`;

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [authToken, setAuthTokenState] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(getStoredUserEmail());
  const [isInitializing, setIsInitializing] = useState(true);
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    const storedEmail = getStoredUserEmail();
    if (storedEmail && location.pathname !== "/login" && location.pathname !== "/" && location.pathname !== "/auth/callback") {
      setCurrentPath(location.pathname);
    }
  }, [location.pathname]);

  useEffect(() => {
    setUnauthenticatedHandler(() => {
      setAuthTokenState(null);
      setUserEmail(null);
      clearStoredUserEmail();
      clearNavigationState();
      navigate('/login', { replace: true });
    });
  }, [navigate]);

  useEffect(() => {
    const initializeAuth = async () => {
      const storedEmail = getStoredUserEmail();
      const savedPath = getCurrentPath();
      
      if (storedEmail) {
        try {
          const newToken = await authService.refreshAccessToken();
          if (newToken) {
            setAuthTokenState(newToken);
            setUserEmail(storedEmail);
            axiosInstance.defaults.headers.common.Authorization = AUTH_HEADER(newToken);
            
            if (savedPath && !hasRedirected) {
              navigate(savedPath, { replace: true });
              setHasRedirected(true);
              clearCurrentPath();
            }
          } else {
            clearStoredUserEmail();
            setUserEmail(null);
            clearNavigationState();
          }
        } catch (error) {
          clearStoredUserEmail();
          setUserEmail(null);
          clearNavigationState();
          console.error("Error al refrescar token:", error);
        }
      }

      setIsInitializing(false);
    };

    initializeAuth();
  }, [navigate, hasRedirected]);

  const login = (token: string, email: string) => {
    setAuthTokenState(token);
    axiosInstance.defaults.headers.common.Authorization = AUTH_HEADER(token);
    setStoredUserEmail(email);
    setUserEmail(email);
  };

  const logout = useCallback(async () => {
    try {
      await authService.logoutApp();
    } catch (error) {
      console.error("Error en logout:", error);
    } finally {
      setAuthTokenState(null);
      setUserEmail(null);
      clearStoredUserEmail();
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
    <AuthContext.Provider value={{ userEmail, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

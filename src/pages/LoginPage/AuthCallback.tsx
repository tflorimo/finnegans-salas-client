import { useContext, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/auth/authContext";
import { getReturnTo, clearReturnTo } from "../../shared/utils/localStorage.utils";
import { readAndClearTempAuthCookies } from "../../services/auth/auth.utils";
import { resolveAuthErrorMessage } from "./constants/LoginPage.constants";

export const AuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);
  const hasProcessed = useRef(false);

  useEffect(() => {

    if (!location.pathname.includes('/auth/callback') || hasProcessed.current) {
      return;
    }

    hasProcessed.current = true;

    const params = new URLSearchParams(window.location.search);
    const successParam = params.get("success");
    const errorCode = params.get("error") ?? params.get("message");

    const hasError = successParam === "false" || Boolean(errorCode);

    if (hasError) {
      const authError = resolveAuthErrorMessage(errorCode);
      navigate("/login", {
        replace: true,
        state: { authError },
      });
      return;
    }

    const authData = readAndClearTempAuthCookies();

    if (!authData) {
      navigate("/login", {
        replace: true,
        state: { authError: "No se pudo obtener el token de acceso" },
      });
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const roleFromUrl = urlParams.get("role") as 'admin' | 'user' || 'user';

    login(authData.token, authData.email, roleFromUrl);

    const returnToFromStorage = getReturnTo();
    const returnToFromState = (location.state as { returnTo?: string })?.returnTo;
    const returnTo = returnToFromStorage || returnToFromState;

    clearReturnTo();
    const redirectPath = returnTo || "/home";

    navigate(redirectPath, { replace: true });
  }, [login, navigate, location.pathname]);

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h3>Procesando autenticación...</h3>
      <p>Por favor espera un momento.</p>
    </div>
  );
};

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/authContext";

const DEFAULT_AUTH_ERROR = "El usuario no está autorizado para acceder a la aplicación.";

const AUTH_ERROR_MESSAGES: Record<string, string> = {
  oauth_domain_not_allowed: DEFAULT_AUTH_ERROR,
};

const resolveAuthErrorMessage = (code?: string | null): string =>
  AUTH_ERROR_MESSAGES[code ?? ""] ?? DEFAULT_AUTH_ERROR;

export const AuthCallback = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const successParam = params.get("success");
    const errorCode = params.get("error") ?? params.get("message");
    const token = params.get("token");
    const email = params.get("email");

    const hasError =
      successParam === "false" ||
      Boolean(errorCode) ||
      !token ||
      !email;

    if (hasError) {
      const authError = resolveAuthErrorMessage(errorCode);
      navigate("/login", {
        replace: true,
        state: { authError },
      });
      return;
    }

    login(token, email);
    navigate("/home", { replace: true });
  }, [login, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h3>Procesando autenticación...</h3>
      <p>Por favor espera un momento.</p>
    </div>
  );
};

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/authContext";
import { resolveAuthErrorMessage } from "./constants/LoginPage.constants";

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

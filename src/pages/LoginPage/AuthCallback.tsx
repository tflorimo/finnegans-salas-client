import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/authContext";

export const AuthCallback = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      navigate("/login", { replace: true })
      return;
    }
    localStorage.setItem("token", token);
    login(token);
    navigate("/home", { replace: true });
  }, [login, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h3>Procesando autenticación...</h3>
      <p>Por favor espera un momento.</p>
    </div>
  );
};
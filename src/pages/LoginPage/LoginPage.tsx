import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LogoFinnegans from "../../assets/images/FinnegansLogoMainLightblue.svg";
import { Button } from "../../components/Button/Button";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import {
  AuthErrorOverlay,
  AuthErrorModal,
  AuthErrorText,
  AuthErrorTitle,
  GoogleButtonStyle,
  ImageFinnegans,
  LoginCardStyle,
  LoginFooter,
  LoginHeader,
  LoginPageContainer,
} from "./styles";

export const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const locationError = useMemo(() => {
    const messageFromState = location.state?.authError || location.state?.loginMessage;
    const messageFromStorage = sessionStorage.getItem('loginMessage');
    const message = messageFromState || messageFromStorage;

    return typeof message === "string" && message.length > 0 ? message : null;
  }, [location.state]);

  const isAuthError = useMemo(() => {
    return Boolean(location.state?.authError);
  }, [location.state]);

  const [errorMessage, setErrorMessage] = useState<string | null>(locationError);

  useEffect(() => {
    if (locationError) {
      setErrorMessage(locationError);
      const returnToFromState = location.state?.returnTo;
      const returnToFromStorage = sessionStorage.getItem('returnTo');
      const returnTo = returnToFromState || returnToFromStorage;

      if (returnTo) {
        sessionStorage.setItem('returnTo', returnTo);
      }

      sessionStorage.removeItem('loginMessage');

      navigate(".", { replace: true, state: { returnTo } });
    }
  }, [locationError, navigate, location.state?.returnTo]);

  const handleGoogleLogin = () => {
    setErrorMessage(null);
    const returnTo = location.state?.returnTo;
    const authUrl = import.meta.env.VITE_GOOGLE_AUTH_URL;

    if (returnTo) {
      sessionStorage.setItem('returnTo', returnTo);
    }

    window.location.href = authUrl;
  };

  return (
    <>
      {errorMessage && (
        <AuthErrorOverlay role="alertdialog" aria-modal="true">
          <AuthErrorModal>
            <AuthErrorTitle>{isAuthError ? "Acceso denegado" : "Inicio de sesión requerido"}</AuthErrorTitle>
            <AuthErrorText>{errorMessage}</AuthErrorText>
            <Button text="Entendido" onClick={() => setErrorMessage(null)} />
          </AuthErrorModal>
        </AuthErrorOverlay>
      )}

      <LoginPageContainer>
        <LoginHeader>
          <div className="logo-container">
            <ImageFinnegans
              src={LogoFinnegans}
              alt="Logo Finnegans"
              width={60}
              height={60}
            />
          </div>
          <p className="subtitle">Reservas de Sala In-Situ</p>
          <p className="description">
            Gestiona y reserva salas de manera eficiente
          </p>
        </LoginHeader>

        <CardContainer customStyle={LoginCardStyle}>
          <h2 className="welcome">Bienvenido de vuelta</h2>
          <p className="instruction">Inicia sesión para acceder al sistema</p>

          <Button
            text="Ingresar con Google"
            icon={
              <img
                src="/src/assets/Images/logoGoogle.svg"
                alt="Google"
                width={20}
                height={20}
              />
            }
            onClick={handleGoogleLogin}
            customStyle={GoogleButtonStyle}
          />

          <LoginFooter>
            <p>
              Al continuar, aceptas nuestros <a href="#">términos de servicio</a>{" "}
              y <a href="#">política de privacidad</a>.
            </p>
          </LoginFooter>
        </CardContainer>
      </LoginPageContainer>
    </>
  );
};

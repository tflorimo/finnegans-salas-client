import LogoFinnegans from "../../assets/images/logoFinnegans.svg";
import { Button } from "../../components/Button/Button";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import {
  GoogleButtonStyle,
  ImageFinnegans,
  LoginCardStyle,
  LoginFooter,
  LoginHeader,
  LoginPageContainer,
} from "./styles.ts";

export const LoginPage = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/api/auth/google";
  };

  return (
    <LoginPageContainer>
      {/* Header */}
      <LoginHeader>
        <div className="logo-container">
          {/* logo */}
          <ImageFinnegans
            src={LogoFinnegans}
            alt="Logo Finnegans"
            width={60}
            height={60}
          />
        </div>
        <h1>Finnegans</h1>
        <p className="subtitle">Reservas de Sala In-Situ</p>
        <p className="description">
          Gestiona y reserva salas de manera eficiente
        </p>
      </LoginHeader>

      {/* Card */}
      <CardContainer customStyle={LoginCardStyle}>
        <h2 className="welcome">Bienvenido de vuelta</h2>
        <p className="instruction">Inicia sesión para acceder al sistema</p>

        {/* Botón de Google */}
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
          onClick={() => handleGoogleLogin()}
          customStyle={GoogleButtonStyle}
        />

        {/* Footer */}
        <LoginFooter>
          <p>
            Al continuar, aceptas nuestros <a href="#">términos de servicio</a>{" "}
            y <a href="#">política de privacidad</a>.
          </p>
        </LoginFooter>
      </CardContainer>
    </LoginPageContainer>
  );
};

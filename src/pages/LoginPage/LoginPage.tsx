import { Button } from "../../components/Button/Button";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { css } from "styled-components";
import LogoFinnegans from "../../assets/images/logoFinnegans.svg";
import {
  LoginPageContainer,
  LoginHeader,
  LoginFooter,
  ImageFinnegans,
} from "./stylesLoginPage.ts";

export const LoginPage = () => {
  console.log("LoginPage");

  return (
    <LoginPageContainer>

      {/* Header */}
      <LoginHeader>
        <div className="logo-container">

          {/* logo */}
          <ImageFinnegans
            src={LogoFinnegans}
            alt="Logo Finnegans"
            width={60} height={60}
          />

        </div>
        <h1>Finnegans</h1>
        <p className="subtitle">Reservas de Sala In-Situ</p>
        <p className="description">
          Gestiona y reserva salas de manera eficiente
        </p>
      </LoginHeader>

      {/* Card */}
      <CardContainer
        customStyle={css`
          color: #0f172a;
          h2 {
            color: #0f172a;
            margin: 0 0 0.5rem;
          }
          p.instruction {
            color: #64748b;
            font-size: 14px;
          }
        `}
      >
        <h2 className="welcome">Bienvenido de vuelta</h2>
        <p className="instruction">Inicia sesión para acceder al sistema</p>

        {/* Botón de Google */}
        <Button
    text="Ingresar con Google"
    icon={<img src="/src/assets/Images/logoGoogle.svg" alt="Google" width={20} height={20} />}
    onClick={() => console.log("Ingresar con Google")}
    customStyle={css`
      width: 100%;
      justify-content: center;
      gap: 10px;
      background: #fff;
      color: #0f172a;
      border: 1px solid #e2e8f0;
      box-shadow: 0 2px 8px rgba(2, 8, 23, 0.05);
      &:hover { background: #f8fafc; }
    `}
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

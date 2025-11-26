import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoFinnegans from "../../assets/images/finnegans-logo-main-lightblue.svg";
import logoGoogle from "../../assets/images/logo-google.svg";
import { Button } from "../../components/Button/Button";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { LOGIN_PAGE_TEXTS } from "./constants/LoginPage.constants";
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
  LogoGoogle,
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
            <AuthErrorTitle>
              {isAuthError ? LOGIN_PAGE_TEXTS.ERROR_MODAL.TITLE_AUTH_ERROR : LOGIN_PAGE_TEXTS.ERROR_MODAL.TITLE_LOGIN_REQUIRED}
            </AuthErrorTitle>
            <AuthErrorText>{errorMessage}</AuthErrorText>
            <Button text={LOGIN_PAGE_TEXTS.ERROR_MODAL.BUTTON_TEXT} onClick={() => setErrorMessage(null)} />
          </AuthErrorModal>
        </AuthErrorOverlay>
      )}

      <LoginPageContainer>
        <LoginHeader>
          <div className="logo-container">
            <ImageFinnegans
              src={logoFinnegans}
              alt={LOGIN_PAGE_TEXTS.ALT_TEXT.LOGO_FINNEGANS}
            />
          </div>
          <p className="subtitle">{LOGIN_PAGE_TEXTS.HEADER.SUBTITLE}</p>
          <p className="description">
            {LOGIN_PAGE_TEXTS.HEADER.DESCRIPTION}
          </p>
        </LoginHeader>

        <CardContainer customStyle={LoginCardStyle}>
          <h2 className="welcome">{LOGIN_PAGE_TEXTS.CARD.WELCOME_TITLE}</h2>
          <p className="instruction">{LOGIN_PAGE_TEXTS.CARD.INSTRUCTION}</p>

          <Button
            text={LOGIN_PAGE_TEXTS.CARD.GOOGLE_BUTTON}
            icon={<LogoGoogle src={logoGoogle} alt={LOGIN_PAGE_TEXTS.ALT_TEXT.LOGO_GOOGLE} />}
            onClick={handleGoogleLogin}
            customStyle={GoogleButtonStyle}
          />

          <LoginFooter>
            <p>
              {LOGIN_PAGE_TEXTS.FOOTER.DISCLAIMER} <a href="#">{LOGIN_PAGE_TEXTS.FOOTER.TERMS_LINK}</a>{" "}
              {LOGIN_PAGE_TEXTS.FOOTER.AND} <a href="#">{LOGIN_PAGE_TEXTS.FOOTER.PRIVACY_LINK}</a>.
            </p>
          </LoginFooter>
        </CardContainer>
      </LoginPageContainer>
    </>
  );
};

import styled, { css } from "styled-components";

// implemento colores constantes
const COLOR_LOGIN_BACKGROUND = "#08132f";

const COLOR_PRIMARY_BLUE = "#1d4ed8";
const COLOR_TEXT_WHITE = "#ffffffff";
const COLOR_TEXT_WHITE_SUBTLE = "#ffffffb4";

const COLOR_FOOTER_TEXT = "#ffffffff";
const COLOR_FOOTER_LINK = "#b6b6b6ff";

const COLOR_CARD_TEXT = "#0f172a";
const COLOR_CARD_BACKGROUND = "#23688a";

const COLOR_GOOGLE_BUTTON_BG = "#174d68ff";
const COLOR_GOOGLE_BUTTON_TEXT = "#ffffffd5";
const COLOR_GOOGLE_BUTTON_BORDER = "#23688a";
const COLOR_GOOGLE_BUTTON_HOVER_BG = "#68faff93";
const COLOR_GOOGLE_BUTTON_SHADOW = "rgba(2, 8, 23, 0.05)";

const COLOR_AUTH_OVERLAY_BG = "rgba(15, 23, 42, 0.55)";
const COLOR_AUTH_MODAL_BG = COLOR_CARD_BACKGROUND;
const COLOR_AUTH_MODAL_TITLE = COLOR_TEXT_WHITE;
const COLOR_AUTH_MODAL_TEXT = COLOR_TEXT_WHITE_SUBTLE;
const COLOR_AUTH_MODAL_SHADOW = "rgba(2, 8, 23, 0.25)";


export const LoginPageContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background: ${COLOR_LOGIN_BACKGROUND};
  padding: 24px;
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    position: relative;
    inset: auto;
    min-height: 100vh;
    width: 100%;
    padding: 24px 12px 32px;
    gap: 24px;
    overflow-y: auto;
    overflow-x: hidden;
    justify-content: flex-start;
  }
`;

export const ImageFinnegans = styled.img`
  width: 800px;
  height: 80px;
  margin-bottom: 16px;
`;

export const LoginHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;

  h1 {
    font-size: 32px;
    font-weight: 800;
    color: ${COLOR_PRIMARY_BLUE};
    margin: 0;
  }

  .subtitle {
    margin: 0;
    color: ${COLOR_TEXT_WHITE};
    font-size: 16px;
  }

  .description {
    margin: 0;
    color: ${COLOR_TEXT_WHITE_SUBTLE};
    font-size: 14px;
  }
`;

export const LoginFooter = styled.footer`
  margin-top: 16px;
  text-align: center;
  color: ${COLOR_FOOTER_TEXT};
  font-size: 12px;

  a {
    color: ${COLOR_FOOTER_LINK};
    text-decoration: underline;
  }
`;

export const LoginCardStyle = css`
  width: 450px;
  color: ${COLOR_CARD_TEXT};

  background-color: ${COLOR_CARD_BACKGROUND};

  h2 {
    color: ${COLOR_TEXT_WHITE};
    margin: 0 0 0.5rem;
  }

  p.instruction {
    color: ${COLOR_TEXT_WHITE};
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 330px;
    margin-left: auto;
    margin-right: auto;
    padding: 1.2rem 0.1rem;

    h2 {
      font-size: 20px;
    }

    p.instruction {
      font-size: 13px;
    }
  }
`;

export const GoogleButtonStyle = css`
  width: 100%;
  justify-content: center;
  gap: 10px;
  background: ${COLOR_GOOGLE_BUTTON_BG};
  color: ${COLOR_GOOGLE_BUTTON_TEXT};
  border: 1px solid ${COLOR_GOOGLE_BUTTON_BORDER};
  box-shadow: 0 2px 8px ${COLOR_GOOGLE_BUTTON_SHADOW};

  &:hover {
    background: ${COLOR_GOOGLE_BUTTON_HOVER_BG};
  }
`;

export const AuthErrorOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${COLOR_AUTH_OVERLAY_BG};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const AuthErrorModal = styled.div`
  background: ${COLOR_AUTH_MODAL_BG};
  border-radius: 12px;
  padding: 28px 32px;
  width: min(420px, 90vw);
  box-shadow: 0 18px 45px ${COLOR_AUTH_MODAL_SHADOW};
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-align: center;
`;

export const AuthErrorTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: ${COLOR_AUTH_MODAL_TITLE};
`;

export const AuthErrorText = styled.p`
  margin: 0;
  color: ${COLOR_AUTH_MODAL_TEXT};
  font-size: 15px;
  line-height: 1.4;
`;

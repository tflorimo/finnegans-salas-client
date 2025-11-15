import styled, { css } from "styled-components";

export const LoginPageContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background: #08132f;
  padding: 24px;
  text-align: center;
  overflow: hidden;
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
    color: #1d4ed8;
    margin: 0;
  }

  .subtitle {
    margin: 0;
    color: #ffffffff;
    font-size: 16px;
  }

  .description {
    margin: 0;
    color: #ffffffb4;
    font-size: 14px;
  }
`;

export const LoginFooter = styled.footer`
  margin-top: 16px;
  text-align: center;
  color: #ffffffff;
  font-size: 12px;

  a {
    color: #b6b6b6ff;
    text-decoration: underline;
  }
`;

export const LoginCardStyle = css`
  width: 450px;
  color: #0f172a;

  background-color: #23688a;

  h2 {
    color: #ffffffff;
    margin: 0 0 0.5rem;
  }

  p.instruction {
    color: #ffffffff;
    font-size: 14px;
  }
`;

export const GoogleButtonStyle = css`
  width: 100%;
  justify-content: center;
  gap: 10px;
  background: #174d68ff;
  color: #ffffffd5;
  border: 1px solid #23688a;
  box-shadow: 0 2px 8px rgba(2, 8, 23, 0.05);

  &:hover {
    background: #2ed0d693;
  }
`;

export const AuthErrorOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const AuthErrorModal = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 28px 32px;
  width: min(420px, 90vw);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.25);
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-align: center;
`;

export const AuthErrorTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: #000000ff;
`;

export const AuthErrorText = styled.p`
  margin: 0;
  color: #475569;
  font-size: 15px;
  line-height: 1.4;
`;

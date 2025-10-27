import styled from "styled-components";

export const LoginPageContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background: #f6f7f9;
  padding: 24px;
  text-align: center;
  overflow: hidden;
`;

export const ImageFinnegans = styled.img`
    width: 80px;
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
    color: #334155;
    font-size: 16px;
  }

  .description {
    margin: 0;
    color: #64748b;
    font-size: 14px;
  }
`;

export const LoginFooter = styled.footer`
  margin-top: 16px;
  text-align: center;
  color: #94a3b8;
  font-size: 12px;

  a {
    color: #6366f1;
    text-decoration: underline;
  }
`;
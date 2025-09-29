import styled from "styled-components";

export const LoginPageContainer = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: #f6f7f9;
  padding: 24px;
  text-align: center;
  overflow: auto;
`;

export const ImageFinnegans = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 125px;
`;

export const LoginHeader = styled.header`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 6px;

  h1 {
    font-size: 28px;
    font-weight: 800;
    color: #1d4ed8;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .subtitle {
    margin: 0;
    color: #334155;
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
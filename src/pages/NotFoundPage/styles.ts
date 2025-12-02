import styled from "styled-components";
import { themes } from "../../theme/Theme";
import type { ThemeType } from "../../theme/Types";
import { PRIMARY_COLOR, WHITE_COLOR } from "../../assets/colors/global-colors";

const GRADIENT_END_COLOR = "#06b6d4";
const BOX_SHADOW_COLOR = "rgba(0, 0, 0, 0.1)";

export const NotFoundContainer = styled.div<{ $theme: ThemeType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${({ $theme }) => themes[$theme].BACKGROUND_COLOR};
  padding: 2rem;
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const NotFoundContent = styled.div<{ $theme: ThemeType }>`
  text-align: center;
  max-width: 600px;
  padding: 3rem;
  background: ${({ $theme }) => themes[$theme].CONTAINER_COLOR};
  border-radius: 16px;
  box-shadow: 0 4px 20px ${BOX_SHADOW_COLOR};
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    max-width: 95%;
  }
`;

export const NotFoundCode = styled.h1<{ $theme: ThemeType }>`
  font-size: 8rem;
  font-weight: 900;
  margin: 0;
  background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${GRADIENT_END_COLOR} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const NotFoundTitle = styled.h2<{ $theme: ThemeType }>`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  margin: 1.5rem 0 1rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1rem 0 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin: 0.75rem 0 0.5rem;
  }
`;

export const NotFoundMessage = styled.p<{ $theme: ThemeType }>`
  font-size: 1.125rem;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  opacity: 0.8;
  margin: 0 0 2rem;
  line-height: 1.6;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 0 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    margin: 0 0 1.25rem;
  }
`;

export const HomeButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${PRIMARY_COLOR};
  color: ${WHITE_COLOR};
  border: none;
  border-radius: 8px;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }
`;

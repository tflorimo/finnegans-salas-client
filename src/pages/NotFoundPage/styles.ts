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
`;

export const NotFoundContent = styled.div<{ $theme: ThemeType }>`
  text-align: center;
  max-width: 600px;
  padding: 3rem;
  background: ${({ $theme }) => themes[$theme].CONTAINER_COLOR};
  border-radius: 16px;
  box-shadow: 0 4px 20px ${BOX_SHADOW_COLOR};
  transition: background 0.3s ease;
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
`;

export const NotFoundTitle = styled.h2<{ $theme: ThemeType }>`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  margin: 1.5rem 0 1rem;
  transition: color 0.3s ease;
`;

export const NotFoundMessage = styled.p<{ $theme: ThemeType }>`
  font-size: 1.125rem;
  color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
  opacity: 0.8;
  margin: 0 0 2rem;
  line-height: 1.6;
  transition: color 0.3s ease;
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
`;

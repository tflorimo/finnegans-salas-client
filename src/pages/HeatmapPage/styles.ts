import styled from "styled-components";
import { themes } from "../../theme/Theme";
import type { ThemeType } from "../../theme/Types";

export const HEAT_MAP_COLORS = {
    pageContainerBg: '#f5f6f8',
    pageCardBg: '#ffffff',
    pageBoxShadow: 'rgba(0,0,0,0.06)',
}


export const HeatmapContainer = styled.div<{ $theme: ThemeType }>`
    width: auto;
    height: auto;
    padding: 20px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    color: ${({ $theme }) => themes[$theme].TEXT_COLOR}
    gap: 16px;
`;

export const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${HEAT_MAP_COLORS.pageContainerBg};
    padding: 40px 50px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const HeaderSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 1rem 0;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
`;

export const Subtitle = styled.p`
    font-size: 0.95rem;
    margin: 0;
`;

export const SelectFilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
    margin-bottom: 1rem;
  width: 400px;;
`;

export const Card = styled.div<{ $theme: ThemeType }>`
    background: ${({ $theme }) => themes[$theme].CONTAINER_COLOR};
    border-radius: 16px;
    box-shadow: 0 4px 12px ${HEAT_MAP_COLORS.pageBoxShadow};
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
`;

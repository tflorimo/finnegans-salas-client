import styled from "styled-components";

export const HEAT_MAP_COLORS = {
    pageContainerBg: '#f5f6f8',
    pageTitleColor: '#222222',
    pageSubtitleColor: '#666666',
    pageCardBg: '#ffffff',
    pageBoxShadow: 'rgba(0,0,0,0.06)',
}


export const HeatmapContainer = styled.div`
    width: auto;
    height: auto;
    padding: 20px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
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
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: ${HEAT_MAP_COLORS.pageTitleColor};
    margin: 0;
`;

export const Subtitle = styled.p`
    font-size: 0.95rem;
    margin: 0;
    color: ${HEAT_MAP_COLORS.pageSubtitleColor};
`;

export const SelectFilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 400px;;
`;

export const Card = styled.div`
    background: ${HEAT_MAP_COLORS.pageCardBg};
    border-radius: 16px;
    box-shadow: 0 4px 12px ${HEAT_MAP_COLORS.pageBoxShadow};
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
`;

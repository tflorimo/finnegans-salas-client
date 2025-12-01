import styled from "styled-components";
import { themes } from "../../../../theme/Theme";
import type { ThemeType } from "../../../../theme/Types";

export const HEAT_MAP_COLORS = {
    legendColor: '#444444',
    legendBorderColor: 'rgba(0,0,0,0.1)',
    lowAvailability: "#ff0000",
    midAvailability: "#FFD600",
    midHighAvailability: "#c0ff03",
    highAvailability: "#04ff6d",
    tooltipBackground: "rgba(255,255,255,0.95)",
    tooltipBorder: "#dddddd",
};

const COLOR_GRAY_TEXT = "#64748b";

export const HeatmapContainer = styled.div`
    width: auto;
    height: auto;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ChartWrapper = styled.div`
    width: 100%;
    height: 500px;
    border-radius: 12px;
    overflow: hidden;
`;

export const LegendContainer = styled.div<{ $theme: ThemeType }>`
    display: flex;
    align-items: center;
    color: ${({ $theme }) => themes[$theme].TEXT_COLOR};
    gap: 24px;
    margin: 1rem 1rem;
`;

export const LegendItem = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.9rem;
`;

export const LegendColor = styled.div<{ color: string }>`
    width: 14px;
    height: 14px;
    border-radius: 4px;
    background: ${({ color }) => color};
    border: 1px solid ${HEAT_MAP_COLORS.legendBorderColor};
`;

export const HeatmapWrapper = styled.div`
    width: 100%;
    height: 580px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 1rem;
`;

export const ChartStyle = {
    width: "100%",
    height: "100%"
};

export const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  color: ${COLOR_GRAY_TEXT};
  font-size: 16px;
`;

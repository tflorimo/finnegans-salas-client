import styled from "styled-components";

export const HEAT_MAP_COLORS = {
    legendColor: '#444444',
    legendBorderColor: 'rgba(0,0,0,0.1)',
    lowAvailability: "#ff0000",
    midAvailability: "#FFD600",
    midHighAvailability: "#c0ff03",
    highAvailability: "#04ff6d",
    tooltipBackground: "rgba(255,255,255,0.95)",
    tooltipBorder: "#dddddd",
    heatmapTextColor: '#333333',
    heatmapSeriesBorderColor: "rgba(255,255,255,0.5)",
    heatmapItemsBorderColor: "#a3a3a3ff",
    heatmapGridLineStyleColor: "#eee",
};

export const HeatmapContainer = styled.div`
    width: auto;
    height: auto;
    padding: 20px;
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

export const LegendContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const LegendItem = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.9rem;
    color: ${HEAT_MAP_COLORS.legendColor};
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
`;

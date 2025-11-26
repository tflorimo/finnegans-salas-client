import ReactECharts from "echarts-for-react";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../../../context/theme/themeContext";
import { themes } from "../../../../theme/Theme";
import { HEATMAP_OPTION_GRID_STYLES, HEATMAP_TEXTS } from "../../constants/Heatmap.constants";
import { useHourlyForecastHeatmap } from "../../hooks/useHourlyForecastHeatmap";
import type { HeatmapPoint } from "../../types/HeatmapPage.types";
import {
    ChartStyle,
    HEAT_MAP_COLORS,
    HeatmapContainer,
    HeatmapWrapper,
    LegendColor,
    LegendContainer,
    LegendItem,
    LoadingBox,
} from "./styles";

// @TODO CHECK
const escapeHtml = (text: string | number): string => {
    const div = document.createElement('div');
    div.textContent = String(text);
    return div.innerHTML;
};

export const ForecastHeatmap = ({
    roomSelected,
}: {
    roomSelected?: string;
}) => {

    const { theme } = useContext(ThemeContext);

    const { rooms, yAxisLabels, data, loading } =
        useHourlyForecastHeatmap(roomSelected);

    const option = useMemo(
        () => ({
            tooltip: {
                backgroundColor: themes[theme].BACKGROUND_COLOR,
                borderColor: themes[theme].BORDER_COLOR,
                borderWidth: 1,
                textStyle: { color: themes[theme].TEXT_COLOR },
                formatter: ({ data }: { data: HeatmapPoint }) => {

                    if (!data?.info) return "";
                    const { roomName, date, hour, percentage, } = data.info;
                    
                    const safeRoomName = escapeHtml(roomName);
                    const safeDate = escapeHtml(date);
                    const safeHour = escapeHtml(hour);
                    const safePercentage = escapeHtml(percentage);
                    
                    return `
            <b>${safeRoomName}</b><br/>
            ${safeDate} - ${safeHour}:00<br/>
            Disponibilidad: ${safePercentage}%
        `;
                },
            },
            grid: HEATMAP_OPTION_GRID_STYLES,
            xAxis: {
                type: "category",
                data: rooms,
                axisLabel: {
                    color: themes[theme].TEXT_COLOR,
                    fontSize: 13,
                },
                axisLine: { lineStyle: { color: themes[theme].TEXT_COLOR } },
            },
            yAxis: {
                type: "category",
                data: yAxisLabels,
                axisLabel: {
                    color: themes[theme].TEXT_COLOR,
                    fontSize: 13,
                },
                axisLine: { lineStyle: { color: themes[theme].TEXT_COLOR } },
            },
            visualMap: {
                show: false,
                min: 0,
                max: 100,
                inRange: {
                    color: [
                        HEAT_MAP_COLORS.lowAvailability,
                        HEAT_MAP_COLORS.midAvailability,
                        HEAT_MAP_COLORS.midHighAvailability,
                        HEAT_MAP_COLORS.highAvailability,
                    ],
                },
            },
            series: [
                {
                    type: "heatmap",
                    data,
                    borderColor: themes[theme].LIGHT_COLOR,
                    borderWidth: 2,
                    itemStyle: {
                        borderWidth: 2,
                        borderRadius: 6,
                        borderColor: themes[theme].SECONDARY_COLOR,
                    },
                },
            ],
        }),
        [rooms, yAxisLabels, data, theme]
    );

    if (loading || rooms.length === 0 || yAxisLabels.length === 0) {
        return <LoadingBox>
            <p>{HEATMAP_TEXTS.loadingMessage}</p>
        </LoadingBox>;
    }

    return (
        <HeatmapContainer>
            <LegendContainer $theme={theme}>
                <LegendItem>
                    <LegendColor color={HEAT_MAP_COLORS.highAvailability} />
                    {HEATMAP_TEXTS.leyendHighAvailability}
                </LegendItem>
                <LegendItem>
                    <LegendColor color={HEAT_MAP_COLORS.midHighAvailability} />
                    {HEATMAP_TEXTS.leyendMidHighAvailability}
                </LegendItem>
                <LegendItem>
                    <LegendColor color={HEAT_MAP_COLORS.midAvailability} />
                    {HEATMAP_TEXTS.leyendMidAvailability}
                </LegendItem>
                <LegendItem>
                    <LegendColor color={HEAT_MAP_COLORS.lowAvailability} />
                    {HEATMAP_TEXTS.leyendLowAvailability}
                </LegendItem>
            </LegendContainer>

            <HeatmapWrapper>
                <ReactECharts
                    option={option}
                    notMerge
                    lazyUpdate
                    style={ChartStyle}
                />
            </HeatmapWrapper>
        </HeatmapContainer>
    );
};

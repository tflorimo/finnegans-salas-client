import ReactECharts from "echarts-for-react";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../../../context/theme/themeContext";
import { themes } from "../../../../theme/Theme";
import { LoadingContainer } from "../../../AdminLogs/styles";
import { HEATMAP_TEXTS } from "../../constants/Heatmap.constants";
import { useHourlyForecastHeatmap } from "../../hooks/useHourlyForecastHeatmap";
import type { HeatmapPoint } from "../../types/HeatmapPage.types";
import {
    HEAT_MAP_COLORS,
    HeatmapContainer,
    HeatmapWrapper,
    LegendColor,
    LegendContainer,
    LegendItem,
} from "./styles";

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
                    return `
            <b>${roomName}</b><br/>
            ${date} - ${hour}:00<br/>
            Disponibilidad: ${percentage}%
        `;
                },
            },
            grid: { top: 10, left: 80, right: 20, bottom: 20 },
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
        return <LoadingContainer>
            <p>{HEATMAP_TEXTS.loadingMessage}</p>
        </LoadingContainer>;
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
                    style={{ width: "100%", height: "100%" }}
                />
            </HeatmapWrapper>
        </HeatmapContainer>
    );
};

import { HOURS_RANGE, WEEK_DAYS_ORDER } from "../../constants/Heatmap.constants";
import type { HeatmapPoint, HeatmapStructure, RoomHourlyForecastDTO } from "../../types/HeatmapPage.types";
import { parseDatetime } from "../date.utils";



export const hourlyForecastAdapter = {
    toHeatmapStructure(roomForecasts: RoomHourlyForecastDTO[]): HeatmapStructure {
        if (!roomForecasts || roomForecasts.length === 0) {
            return { rooms: [], yAxisLabels: [], data: [] };
        }

        const xAxisDays = WEEK_DAYS_ORDER.map(
            (day) => day.charAt(0).toUpperCase() + day.slice(1)
        );

        const yAxisLabels = HOURS_RANGE.map(
            (hour) => `${hour.toString().padStart(2, "0")}:00`
        );

        const data: HeatmapPoint[] = [];

        roomForecasts.forEach((room) => {
            room.forecasts.forEach((forecast) => {
                const parsed = parseDatetime(forecast.date);

                const day = parsed.dayLabel.toLowerCase().slice(0, 3);
                const hour = parsed.hour;

                const xIndex = WEEK_DAYS_ORDER.indexOf(day);
                if (xIndex === -1) return;

                if (!HOURS_RANGE.includes(hour)) return;

                const yIndex = HOURS_RANGE.indexOf(hour);

                const percentage = Math.round(forecast.occupancyPredicted * 100);

                if (
                    xIndex === -1 ||
                    yIndex === -1 ||
                    isNaN(percentage)
                ) {
                    return;
                }

                data.push({
                    value: [xIndex, yIndex, percentage],
                    info: {
                        roomEmail: room.roomEmail,
                        date: parsed.dateISO,
                        hour,
                        percentage,
                        upper: Math.round(forecast.upper * 100),
                        lower: Math.round(forecast.lower * 100),
                    },
                });
            });
        });

        return {
            rooms: xAxisDays,
            yAxisLabels,
            data,
        };
    },
};

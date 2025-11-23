import type { ForecastPointDTO, RoomHourlyForecastDTO } from "../../pages/HeatmapPage/types/HeatmapPage.types";

export function generateHourlyMock(rooms = 3, days = 5): RoomHourlyForecastDTO[] {
    const result: RoomHourlyForecastDTO[] = [];
    const start = new Date();

    start.setDate(start.getDate() - (start.getDay() - 1));

    for (let r = 1; r <= rooms; r++) {
        const roomEmail = `sala${r}@finnegans.com`;
        const forecasts: ForecastPointDTO[] = [];

        for (let d = 0; d < days; d++) {
            const currentDay = new Date(start);
            currentDay.setDate(start.getDate() + d);

            for (let hour = 9; hour <= 18; hour++) {
                const dt = new Date(currentDay);
                dt.setHours(hour, 0, 0, 0);

                const occupancy = +(Math.random()).toFixed(2);

                forecasts.push({
                    date: dt.toISOString(),
                    occupancyPredicted: occupancy,
                    lower: +(occupancy * Math.random()).toFixed(2),
                    upper: +(Math.min(1, occupancy + Math.random() * 0.3)).toFixed(2),
                });
            }
        }

        result.push({ roomEmail, forecasts });
    }

    return result;
}

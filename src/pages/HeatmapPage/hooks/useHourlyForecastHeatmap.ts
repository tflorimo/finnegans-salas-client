import { useEffect, useState } from "react";
import { heatmapService } from "../../../services/heatmap/heatmap.service";
import type { HeatmapStructure, RoomHourlyForecastDTO } from "../types/HeatmapPage.types";
import { hourlyForecastAdapter } from "../utils/adapters/hourlyForecast.adapter";

export const useHourlyForecastHeatmap = (selectedRoom?: string) => {
    const [loading, setLoading] = useState(true);
    const [rawForecasts, setRawForecasts] = useState<RoomHourlyForecastDTO[]>([]);
    const [heatmapData, setHeatmapData] = useState<HeatmapStructure>({
        rooms: [],
        yAxisLabels: [],
        data: [],
    });

    useEffect(() => {
        const load = async () => {
            try {
                const raw = await heatmapService.getRoomsForecast();
                setRawForecasts(raw);
            } catch (error) {
                throw new Error(`Error fetching room forecasts: ${error}`)
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    useEffect(() => {
        if (loading || rawForecasts.length === 0) return;

        const filteredData = selectedRoom
            ? rawForecasts.filter((room) => room.roomEmail === selectedRoom)
            : rawForecasts;

        const adapted = hourlyForecastAdapter.toHeatmapStructure(filteredData);

        setHeatmapData(adapted);
    }, [rawForecasts, selectedRoom, loading]);

    const allRooms = rawForecasts?.map((room) => ({ id: room.roomEmail, roomEmail: room.roomEmail, roomName: room.roomName })) || [];

    return {
        allRooms,
        loading,
        ...heatmapData,
    };
};

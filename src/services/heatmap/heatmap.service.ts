import axiosInstance from "../../api/axios/axios.instance";
import { getErrorMessage } from "../../api/axios/axios.utils";
import { HEATMAP_ENDPOINTS, HEATMAP_ERROR_MESSAGES } from "../../pages/HeatmapPage/constants/Heatmap.constants";
import type { ForecastResponseDTO, RoomHourlyForecastDTO } from "../../pages/HeatmapPage/types/HeatmapPage.types";

export const heatmapService = {
    getRoomsForecast: async (): Promise<RoomHourlyForecastDTO[]> => {
        try {
            const { data } = await axiosInstance.get<ForecastResponseDTO>(HEATMAP_ENDPOINTS.getRoomsForecast());
            return data.data;
        } catch (error) {
            const message = getErrorMessage(error, HEATMAP_ERROR_MESSAGES.roomsForecastError);
            throw new Error(message);
        }
    },
}

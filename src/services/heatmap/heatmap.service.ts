import { getErrorMessage } from "../../api/axios/axios.utils";
import { HEATMAP_ERROR_MESSAGES } from "../../pages/HeatmapPage/constants/Heatmap.constants";
import type { RoomHourlyForecastDTO } from "../../pages/HeatmapPage/types/HeatmapPage.types";
import { generateHourlyMock } from "./roomForecastMock";

export const heatmapService = {
    getRoomsForecast: async (): Promise<RoomHourlyForecastDTO[]> => {
        try {
            await new Promise(res => setTimeout(res, 500));

            return generateHourlyMock(5, 5);
            // TODO: Descomentar cuando se encuentre disponible el endpoint
            /* const { data } = await axiosInstance.get<RoomHourlyForecastDTO[]>(HEATMAP_ENDPOINTS.getRoomsForecast());
            return data; */
        } catch (error) {
            const message = getErrorMessage(error, HEATMAP_ERROR_MESSAGES.roomsForecastError);
            throw new Error(message);
        }
    },
}

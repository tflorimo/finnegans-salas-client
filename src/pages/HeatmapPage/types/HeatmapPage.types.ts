export interface ForecastPointDTO {
  date: string | Date;
  occupancyPredicted: number;
  upper: number;
  lower: number;
}

export interface RoomHourlyForecastDTO {
  roomEmail: string;
  roomName: string;
  forecasts: ForecastPointDTO[];
}

export interface ForecastResponseDTO {
  data: RoomHourlyForecastDTO[];
  success: boolean;
}

export interface HeatmapPoint {
  value: [number, number, number];
  info: {
    roomName: string;
    roomEmail: string;
    percentage: number;
    upper: number;
    lower: number;
    date: string;
    hour: number;
  };
}

export interface HeatmapStructure {
  rooms: string[];
  yAxisLabels: string[];
  data: HeatmapPoint[];
}
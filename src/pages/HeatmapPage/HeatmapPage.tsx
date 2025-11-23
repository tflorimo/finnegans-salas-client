import { useEffect, useState } from "react";
import { GenericSelect } from "../../components/GenericSelect/GenericSelect";
import { ForecastHeatmap } from "./components/ForecastHeatmap/ForecastHeatmap";
import { HEATMAP_TEXTS } from "./constants/Heatmap.constants";
import { useHourlyForecastHeatmap } from "./hooks/useHourlyForecastHeatmap";
import { Card, HeaderSection, HeatmapContainer, SelectFilterContainer, Subtitle, Title } from "./styles";

export const HeatmapPage = () => {

    const { allRooms, loading } = useHourlyForecastHeatmap();

    const [roomSelected, setRoomSelected] = useState<string>();

    useEffect(() => {
        if (!loading && allRooms.length > 0 && !roomSelected) {
            setRoomSelected(allRooms[0].roomEmail);
        }
    }, [loading, allRooms]);

    return (
        <HeatmapContainer>
            <HeaderSection>
                <Title>{HEATMAP_TEXTS.pageTitle}</Title>
                <Subtitle>{HEATMAP_TEXTS.pageSubtitle}</Subtitle>
            </HeaderSection>
            <SelectFilterContainer>
                <GenericSelect values={allRooms} formatLabel={(value) => value.roomEmail} onChange={(value) => setRoomSelected(value.roomEmail)} />
            </SelectFilterContainer>
            <Card>
                <ForecastHeatmap roomSelected={roomSelected} />
            </Card>
        </HeatmapContainer>
    );
};
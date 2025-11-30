import { useContext, useEffect, useState } from "react";
import { GenericSelect } from "../../components/GenericSelect/GenericSelect";
import { ThemeContext } from "../../context/theme/themeContext";
import { BackButton } from "../../shared/components/BackButton/BackButton";
import { ForecastHeatmap } from "./components/ForecastHeatmap/ForecastHeatmap";
import { HEATMAP_TEXTS } from "./constants/Heatmap.constants";
import { useHourlyForecastHeatmap } from "./hooks/useHourlyForecastHeatmap";
import { Card, HeaderSection, HeatmapContainer, SelectFilterContainer, Subtitle, Title } from "./styles";

export const HeatmapPage = () => {

    const { theme } = useContext(ThemeContext);

    const { allRooms, loading } = useHourlyForecastHeatmap();

    const [roomSelected, setRoomSelected] = useState<string>();

    useEffect(() => {
        if (!loading && allRooms.length > 0 && !roomSelected) {
            setRoomSelected(allRooms[0].roomEmail);
        }
    }, [loading, allRooms, roomSelected]);

    return (
        <HeatmapContainer $theme={theme}>
            <HeaderSection>
                <BackButton />
                <Title>{HEATMAP_TEXTS.pageTitle}</Title>
                <Subtitle>{HEATMAP_TEXTS.pageSubtitle}</Subtitle>
            </HeaderSection>
            {allRooms.length ? <SelectFilterContainer>
                <GenericSelect theme={theme} values={allRooms} formatLabel={(value) => value.roomName} onChange={(value) => setRoomSelected(value.roomEmail)} />
            </SelectFilterContainer> : undefined}
            <Card $theme={theme}>
                <ForecastHeatmap roomSelected={roomSelected} />
            </Card>
        </HeatmapContainer>
    );
};
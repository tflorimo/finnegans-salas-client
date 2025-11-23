import { BarChart2, Funnel } from "lucide-react";
import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { ButtonVariant } from "../../components/Button/types";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { GenericSelect } from "../../components/GenericSelect/GenericSelect";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import { FullScreenLoader } from "../../components/Loaders/FullScreenLoader/FullScreenLoader";
import { ThemeContext } from "../../context/theme/themeContext";
import { RoomItem } from "./components/RoomItem";
import { ROOM_SELECT_OPTIONS } from "./constants/HomePage.constants";
import { useGetRooms } from "./hooks/useGetRooms";
import { useRoomFilters } from "./hooks/useRoomFilters";
import {
  AllRoomsCardContainerStyles,
  FreeRoomsCardContainerStyles,
  HeatmapButtonStyle,
  HomePageStyled,
  OccupiedRoomsCardContainerStyles,
  ROOM_PAGE_COLORS,
  RoomListContainer,
  RoomStatusContainer,
  SelectActionsContainer,
  SelectFilterContainer,
} from "./styles";

export const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const [roomStatusSelected, setRoomStatusSelected] = useState<string>("all");
  const [roomKeywordSelected, setRoomKeywordSelected] = useState<string>("");

  const navigate = useNavigate();

  const { roomsData, loading } = useGetRooms();

  const { countRoomsByStatus, filterRooms } = useRoomFilters({
    roomsData,
    roomStatusSelected,
    roomKeywordSelected,
  });

  const handleGoToHeatmap = () => {
    const roomEmails = roomsData.map((room) => room.email);
    navigate("/heatmap", { state: { roomEmails } });
  }

  const filteredRooms = useMemo(() => filterRooms(), [filterRooms]);

  return (
    <>
      <FullScreenLoader isLoading={loading} />

      <HomePageStyled $theme={theme}>
        {/* Contadores de salas */}
        <RoomStatusContainer>
          <CardContainer customStyle={AllRoomsCardContainerStyles(theme)}>
            <h2>{countRoomsByStatus().total}</h2>
            <p>Total de Salas</p>
          </CardContainer>

          <CardContainer customStyle={FreeRoomsCardContainerStyles(theme)}>
            <h2>{countRoomsByStatus().available}</h2>
            <p>Salas libres</p>
          </CardContainer>

          <CardContainer customStyle={OccupiedRoomsCardContainerStyles(theme)}>
            <h2>{countRoomsByStatus().occupied}</h2>
            <p>Salas ocupadas</p>
          </CardContainer>
        </RoomStatusContainer>

        {/* Filtros */}
        <SelectActionsContainer>
          <SelectFilterContainer>
            <Funnel size={20} color={theme === "dark" ? "#ffffff" : ROOM_PAGE_COLORS.roomBoxShadow} />

            <GenericSelect
              values={ROOM_SELECT_OPTIONS}
              formatLabel={(value) => value.description}
              onChange={(value) => setRoomStatusSelected(value.status)}
              theme={theme}
            />

            <InputSearch
              placeholder="Buscar por nombre..."
              onFilter={setRoomKeywordSelected}
              theme={theme}
            />
          </SelectFilterContainer>

          <Button
            icon={<BarChart2 size={18} />}
            text="Ver Mapa de Disponibilidad"
            variant={ButtonVariant.white}
            onClick={handleGoToHeatmap}
            customStyle={HeatmapButtonStyle}
          />

        </SelectActionsContainer>

        {/* Listado de salas */}
        <RoomListContainer>
          {filteredRooms.map((room) => (
            <RoomItem key={room.email} room={room} />
          ))}
        </RoomListContainer>
      </HomePageStyled>
    </>
  );
};

export default HomePage;
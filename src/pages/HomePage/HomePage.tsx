import { Funnel } from "lucide-react";
import { useMemo, useState } from "react";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { GenericSelect } from "../../components/GenericSelect/GenericSelect";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import { RoomItem } from "./components/RoomItem";
import { ROOM_SELECT_OPTIONS } from "./constants/HomePage.constants";
import { useGetRooms } from "./hooks/useGetRooms";
import { useRoomFilters } from "./hooks/useRoomFilters";
import {
  AllRoomsCardContainerStyles,
  FreeRoomsCardContainerStyles,
  HomePageStyled,
  OccupiedRoomsCardContainerStyles,
  ROOM_PAGE_COLORS,
  RoomListContainer,
  RoomStatusContainer,
  SelectFilterContainer,
} from "./styles";
import { FullScreenLoader } from "../../components/Loaders/FullScreenLoader/FullScreenLoader";

export const HomePage = () => {
  const [roomStatusSelected, setRoomStatusSelected] = useState<string>("all");
  const [roomKeywordSelected, setRoomKeywordSelected] = useState<string>("");


  const { roomsData, loading } = useGetRooms();

  const { countRoomsByStatus, filterRooms } = useRoomFilters({
    roomsData,
    roomStatusSelected,
    roomKeywordSelected,
  });

  const filteredRooms = useMemo(() => filterRooms(), [filterRooms]);

  return (
    <>
    <FullScreenLoader isLoading={loading} />

    <HomePageStyled>
      {/* Contadores de salas */}
      <RoomStatusContainer>
        <CardContainer customStyle={AllRoomsCardContainerStyles}>
          <h2>{countRoomsByStatus().total}</h2>
          <p>Total de Salas</p>
        </CardContainer>

        <CardContainer customStyle={FreeRoomsCardContainerStyles}>
          <h2>{countRoomsByStatus().available}</h2>
          <p>Salas libres</p>
        </CardContainer>

        <CardContainer customStyle={OccupiedRoomsCardContainerStyles}>
          <h2>{countRoomsByStatus().occupied}</h2>
          <p>Salas ocupadas</p>
        </CardContainer>
      </RoomStatusContainer>

      {/* Filtros */}
      <SelectFilterContainer>
        <Funnel size={20} color={ROOM_PAGE_COLORS.roomBoxShadow} />

        <GenericSelect
          values={ROOM_SELECT_OPTIONS}
          formatLabel={(value) => value.description}
          onChange={(value) => setRoomStatusSelected(value.status)}
        />

        <InputSearch
          placeholder="Buscar por nombre..."
          onFilter={setRoomKeywordSelected}
        />
      </SelectFilterContainer>

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
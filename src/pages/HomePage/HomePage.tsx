import { Funnel } from "lucide-react";
import { useCallback, useState } from "react";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { GenericSelect } from "../../components/GenericSelect/GenericSelect";
import { RoomItem } from "./components/RoomItem";
import { ROOM_SELECT_OPTIONS } from "./constants/HomePage.constants";
import { useGetRooms } from "./hooks/useGetRooms";
import { AllRoomsCardContainerStyles, FreeRoomsCardContainerStyles, HomePageStyled, OccupiedRoomsCardContainerStyles, ROOM_PAGE_COLORS, RoomListContainer, RoomStatusContainer, SelectFilterContainer } from "./styles";
import { RoomStatusOptionsEnum } from "./types/RoomPage.types";

export const HomePage = () => {

  const [roomStatusSelected, setRoomStatusSelected] = useState<string>('all');
  const { roomsData, loading } = useGetRooms();

const countRoomsByStatus = useCallback(() => {
  const occupiedCount = roomsData.filter(room => room.is_busy).length;
  const availableCount = roomsData.length - occupiedCount;

  return [
    { title: 'Total de Salas', number: roomsData.length },
    { title: 'Salas libres', number: availableCount },
    { title: 'Salas ocupadas', number: occupiedCount },
  ];
}, [roomsData]);

const calculateRoomsByStatus = useCallback(() => {
  const roomsByStatus = [
    { id: RoomStatusOptionsEnum.all, rooms: roomsData },
    { id: RoomStatusOptionsEnum.available, rooms: roomsData.filter(room => !room.is_busy) },
    { id: RoomStatusOptionsEnum.occupied, rooms: roomsData.filter(room => room.is_busy) },
  ];

  return roomsByStatus.find(roomStatus => roomStatus.id === roomStatusSelected);
}, [roomStatusSelected, roomsData]);

  if (loading) {
    // TODO: Reemplazar por loader o spinner cuando se implemente el componente
    return <p>Cargando salas...</p>;
  }

  return (
    <HomePageStyled>
      {/* Salas por status de Salas */}
      <RoomStatusContainer>

        <CardContainer
          customStyle={AllRoomsCardContainerStyles}
        >
          <h2>{countRoomsByStatus()[0].number}</h2>
          <p>Total de Salas</p>
        </CardContainer>
        <CardContainer
          customStyle={FreeRoomsCardContainerStyles}
        >
          <h2>{countRoomsByStatus()[1].number}</h2>
          <p>Salas libres</p>
        </CardContainer>
        <CardContainer
          customStyle={OccupiedRoomsCardContainerStyles}
        >
          <h2>{countRoomsByStatus()[2].number}</h2>
          <p>Salas ocupadas</p>
        </CardContainer>
      </RoomStatusContainer>
      <SelectFilterContainer>
        <Funnel size={20} color={ROOM_PAGE_COLORS.roomText} />
        <GenericSelect
          values={ROOM_SELECT_OPTIONS}
          formatLabel={(value) => value.description}
          onChange={(value) => setRoomStatusSelected(value.status)}
        />
      </SelectFilterContainer>
      <RoomListContainer>
        {calculateRoomsByStatus()?.rooms.map((room) => (
          <RoomItem key={room.email} room={room} />
        ))}

      </RoomListContainer>
    </HomePageStyled>
  );
};

export default HomePage;

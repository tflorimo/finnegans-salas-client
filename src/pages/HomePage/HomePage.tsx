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
    const roomsByStatus = [{
      title: 'Total de Salas',
      number: roomsData.length,
    },
    {
      title: 'Salas libres',
      number: 0,
    },
    {
      title: 'Salas ocupadas',
      number: 0,
    }];

    roomsData?.forEach((room) => {
      switch (room.roomDetails.status) {
        case RoomStatusOptionsEnum.available:
          roomsByStatus[1].number += 1;
          break;
        case RoomStatusOptionsEnum.occupied:
          roomsByStatus[2].number += 1;
          break;
        default:
          break;
      }
    });
    return roomsByStatus;
  }, [roomsData]);

  const calculateRoomsByStatus = useCallback(() => {
    const roomsByStatus = [
      { id: RoomStatusOptionsEnum.all, rooms: roomsData },
      { id: RoomStatusOptionsEnum.available, rooms: [...roomsData].filter(room => room.roomDetails.status === RoomStatusOptionsEnum.available) },
      { id: RoomStatusOptionsEnum.occupied, rooms: [...roomsData].filter(room => room.roomDetails.status === RoomStatusOptionsEnum.occupied) },
    ]

    const filterRoomsByStatus = roomsByStatus.find(roomStatus => roomStatus.id === roomStatusSelected);
    return filterRoomsByStatus;
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
          <RoomItem key={room.roomDetails.id} room={room} />
        ))}

      </RoomListContainer>
    </HomePageStyled>
  );
};

export default HomePage;

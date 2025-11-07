import { css } from "styled-components";
import { Button } from "../../components/Button/Button";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { BackButton } from "../../shared/components/BackButton/BackButton";
import { EquipmentItem } from "./components/EquipmentItem";
import { QRCodeSection } from "./components/QRCodeSection";
import { ReservationItemComponent } from "./components/ReservationItemComponent";
import { RoomHeader } from "./components/RoomHeader";
import { ROOM_PAGE_MESSAGES } from "./constants/RoomPage.constants";
import { useCheckIn } from "./hooks/useCheckIn";
import { useGetRoom } from "./hooks/useGetRoom";
import { renderStatusTag } from "./utils/roomUtils";
import {
  CheckInButtonStyle,
  CheckInTitle,
  ColumnaLateral,
  ColumnaPrincipal,
  ContentGrid,
  CurrentStatusCardStyle,
  EquipmentContainer,
  EquipmentTitle,
  FilaEstado,
  PageInner,
  QRCardStyle,
  ReservationsCardStyle,
  ReservasLista,
  RoomInfoCardStyle,
  RoomPageContainer,
} from "./styles";

export const RoomPage = () => {
  const { loading, roomData } = useGetRoom();
  const { handleCheckIn, isCheckInAvailable } = useCheckIn();

  const getCheckInButtonStyle = (isAvailable: boolean) => css`
    ${CheckInButtonStyle}
    opacity: ${isAvailable ? 1 : 0.5};
    pointer-events: ${isAvailable ? "auto" : "none"};
  `;

  return (
    <RoomPageContainer>
      <BackButton />
      <PageInner>
        <ContentGrid>
          <ColumnaPrincipal>
            <CardContainer customStyle={RoomInfoCardStyle}>
              <RoomHeader
                name={roomData?.name}
                capacity={roomData?.capacity}
                status={roomData?.is_busy}
                loading={loading}
              />

              <EquipmentTitle>{ROOM_PAGE_MESSAGES.EQUIPMENT_TITLE}</EquipmentTitle>

              <EquipmentContainer>
                {(roomData?.resources ?? []).map((item) => (
                  <EquipmentItem key={item} item={item} />
                ))}
              </EquipmentContainer>
            </CardContainer>

            <CardContainer>
              <CheckInTitle>{ROOM_PAGE_MESSAGES.QR_TITLE}</CheckInTitle>
              <Button
                text={ROOM_PAGE_MESSAGES.CHECK_IN_BUTTON}
                onClick={() => handleCheckIn(roomData)}
                customStyle={getCheckInButtonStyle(isCheckInAvailable(roomData))}
              />
            </CardContainer>

            <CardContainer customStyle={ReservationsCardStyle}>
              <h1>{ROOM_PAGE_MESSAGES.RESERVATIONS_TITLE}</h1>
              <ReservasLista>
                {(roomData?.events ?? []).map((event) => (
                  <ReservationItemComponent
                    key={event.id}
                    organizer={event.creatorMail}
                    start={event.startTime}
                    end={event.endTime}
                  />
                ))}
              </ReservasLista>
            </CardContainer>
          </ColumnaPrincipal>

          <ColumnaLateral>
            <CardContainer customStyle={CurrentStatusCardStyle}>
              <h3>{ROOM_PAGE_MESSAGES.CURRENT_STATUS_TITLE}</h3>
              <FilaEstado>
                <span>{ROOM_PAGE_MESSAGES.STATUS_LABEL}</span>
                {renderStatusTag(loading, roomData?.is_busy)}
              </FilaEstado>
              <FilaEstado>
                <span>{ROOM_PAGE_MESSAGES.CAPACITY_LABEL}</span>
                <strong>
                  {loading ? ROOM_PAGE_MESSAGES.LOADING : roomData?.capacity ?? "-"}{" "}
                  {ROOM_PAGE_MESSAGES.CAPACITY_UNIT}
                </strong>
              </FilaEstado>
              <FilaEstado>
                <span>{ROOM_PAGE_MESSAGES.TODAY_RESERVATIONS_LABEL}</span>
                <strong>
                  {
                    (roomData?.events ?? []).filter((ev) => {
                      const s = new Date(ev.startTime);
                      const n = new Date();
                      return s.toDateString() === n.toDateString();
                    }).length
                  }
                </strong>
              </FilaEstado>
            </CardContainer>

            <CardContainer customStyle={QRCardStyle}>
              <h3>{ROOM_PAGE_MESSAGES.QR_SECTION_TITLE}</h3>
              <p>{ROOM_PAGE_MESSAGES.QR_SECTION_DESCRIPTION}</p>
              <QRCodeSection
                //qrImageUrl={roomData?.qrImageUrl} TODO: A desarrollar
                roomName={roomData?.name}
              />
            </CardContainer>
          </ColumnaLateral>
        </ContentGrid>
      </PageInner>
    </RoomPageContainer>
  );
};

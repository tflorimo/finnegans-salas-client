import { css } from "styled-components";
import { Calendar } from "lucide-react";
import { Button } from "../../components/Button/Button";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { Tag } from "../../components/Tag/Tag";
import { BackButton } from "../../shared/components/BackButton/BackButton";
import { EquipmentItem } from "./components/EquipmentItem";
import { QRCodeSection } from "./components/QRCodeSection";
import { ReservationItemComponent } from "./components/ReservationItemComponent";
import { RoomHeader } from "./components/RoomHeader";
import { CheckInMessageModal } from "./components/CheckInMessageModal";
import { ROOM_PAGE_MESSAGES, CHECK_IN_STATUS_DISPLAY } from "./constants/RoomPage.constants";
import { useCheckIn } from "./hooks/useCheckIn";
import { useGetRoom } from "./hooks/useGetRoom";
import { useFilteredReservations } from "./hooks/useFilteredReservations";
import { renderStatusTag, cleanEventTitle, sortEligibleEvents } from "./utils/RoomPageUtils";
import { truncateText } from "../../shared/utils/text.utils";
import { formatTime } from "../HomePage/utils/formatTime.utils";
import type { CheckInStatus } from "../../shared/types/event.types";
import {
  CheckInButtonStyle,
  CheckInSubtitle,
  ColumnaLateral,
  ColumnaPrincipal,
  ContentGrid,
  CurrentStatusCardStyle,
  EquipmentContainer,
  ErrorMessage,
  NoReservationsMessage,
  ReservationsSectionSeparator,
  ReservationSectionTitle,
  TitleStyle,
  FilaEstado,
  PageInner,
  QRCardStyle,
  ReservationsCardStyle,
  ReservationList,
  RoomInfoCardStyle,
  RoomPageContainer,
  NoEquipmentMessage,
} from "./styles";

export const RoomPage = () => {
  const { loading, roomData, error, updateRoomData } = useGetRoom();
  const { todayReservations, weekReservations, finishedReservations } = useFilteredReservations(roomData?.events);
  
  const { handleCheckIn, getEligibleEvents, clearMessage, message, isSuccess, checkingInEventId } = useCheckIn({
    onSuccess: (updatedRoom) => {
      updateRoomData(() => updatedRoom);
    }
  });

  const eligibleEvents = getEligibleEvents(roomData);

  const getCheckInButtonStyle = (isDisabled: boolean) => css`
    ${CheckInButtonStyle}
    opacity: ${isDisabled ? 0.5 : 1};
    pointer-events: ${isDisabled ? "none" : "auto"};
    margin-bottom: 12px;
  `;

  const renderCheckInStatusTag = (status: CheckInStatus | undefined) => {
    if (!status) return null;
    
    const config = CHECK_IN_STATUS_DISPLAY[status];
    return <Tag text={config.text} type={config.type} />;
  };

  if (error) {
    return (
      <RoomPageContainer>
        <BackButton />
        <PageInner>
          <CardContainer>
            <ErrorMessage>{error}</ErrorMessage>
          </CardContainer>
        </PageInner>
      </RoomPageContainer>
    );
  }

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
                isBusy={roomData?.is_busy}
                loading={loading}
              />

              <TitleStyle>{ROOM_PAGE_MESSAGES.EQUIPMENT_TITLE}</TitleStyle>

              {(roomData?.resources ?? []).length > 0 ? (
                <EquipmentContainer>
                  {(roomData?.resources ?? []).map((item) => (
                    <EquipmentItem key={item} item={item} />
                  ))}
                </EquipmentContainer>
              ) : (
                <NoEquipmentMessage>{ROOM_PAGE_MESSAGES.NO_EQUIPMENT}</NoEquipmentMessage>
              )}
            </CardContainer>

            <CardContainer>
              <TitleStyle>{ROOM_PAGE_MESSAGES.CHECK_IN_TITLE}</TitleStyle>
              <CheckInSubtitle>
                {ROOM_PAGE_MESSAGES.CHECK_IN_SUBTITLE}
              </CheckInSubtitle>
              
              {eligibleEvents.length > 0 ? (
                sortEligibleEvents(eligibleEvents, roomData?.current_event?.id)
                  .map((event) => {
                    const isCheckingIn = checkingInEventId === event.id;
                    return (
                      <Button
                        key={event.id}
                        text={`Check-in: ${truncateText(cleanEventTitle(event.title), 10)}`}
                        onClick={() => handleCheckIn(roomData, event.id)}
                        customStyle={getCheckInButtonStyle(isCheckingIn)}
                      />
                    );
                  })
              ) : (
                <NoEquipmentMessage>
                  No hay eventos disponibles para check-in en este momento
                </NoEquipmentMessage>
              )}
            </CardContainer>

            <CardContainer customStyle={ReservationsCardStyle}>
              <ReservationSectionTitle>
                <Calendar />
                {ROOM_PAGE_MESSAGES.TODAY_RESERVATIONS_TITLE}
              </ReservationSectionTitle>
              
              {todayReservations.length > 0 ? (
                <ReservationList>
                  {todayReservations.map((event) => (
                    <ReservationItemComponent
                      key={event.id}
                      organizer={event.creatorName}
                      start={formatTime(event.startTime)}
                      end={formatTime(event.endTime)}
                      date={event.date}
                      title={event.title}
                      startTime={event.startTime}
                      endTime={event.endTime}
                      eventId={event.id}
                      currentEventId={roomData?.current_event?.id}
                    />
                  ))}
                </ReservationList>
              ) : (
                <NoReservationsMessage>
                  {ROOM_PAGE_MESSAGES.NO_TODAY_RESERVATIONS}
                </NoReservationsMessage>
              )}

              <ReservationsSectionSeparator>
                <Calendar />
                {ROOM_PAGE_MESSAGES.WEEK_RESERVATIONS_TITLE}
              </ReservationsSectionSeparator>
              
              {weekReservations.length > 0 ? (
                <ReservationList>
                  {weekReservations.map((event) => (
                    <ReservationItemComponent
                      key={event.id}
                      organizer={event.creatorName}
                      start={formatTime(event.startTime)}
                      end={formatTime(event.endTime)}
                      date={event.date}
                      title={event.title}
                      startTime={event.startTime}
                      endTime={event.endTime}
                      eventId={event.id}
                      currentEventId={roomData?.current_event?.id}
                    />
                  ))}
                </ReservationList>
              ) : (
                <NoReservationsMessage>
                  {ROOM_PAGE_MESSAGES.NO_WEEK_RESERVATIONS}
                </NoReservationsMessage>
              )}

              <ReservationsSectionSeparator>
                <Calendar />
                {ROOM_PAGE_MESSAGES.FINISHED_RESERVATIONS_TITLE}
              </ReservationsSectionSeparator>
              
              {finishedReservations.length > 0 ? (
                <ReservationList>
                  {finishedReservations.map((event) => (
                    <ReservationItemComponent
                      key={event.id}
                      organizer={event.creatorName}
                      start={formatTime(event.startTime)}
                      end={formatTime(event.endTime)}
                      date={event.date}
                      title={event.title}
                      startTime={event.startTime}
                      endTime={event.endTime}
                      eventId={event.id}
                      currentEventId={roomData?.current_event?.id}
                    />
                  ))}
                </ReservationList>
              ) : (
                <NoReservationsMessage>
                  {ROOM_PAGE_MESSAGES.NO_FINISHED_RESERVATIONS}
                </NoReservationsMessage>
              )}
            </CardContainer>
          </ColumnaPrincipal>

          <ColumnaLateral>
            <CardContainer customStyle={CurrentStatusCardStyle}>
              <TitleStyle>{ROOM_PAGE_MESSAGES.CURRENT_STATUS_TITLE}</TitleStyle>
              <FilaEstado>
                <span>{ROOM_PAGE_MESSAGES.STATUS_LABEL}</span>
                {renderStatusTag(loading, roomData?.is_busy)}
              </FilaEstado>
              {roomData?.current_event && (
                <FilaEstado>
                  <span>{ROOM_PAGE_MESSAGES.CHECK_IN_STATUS_LABEL}</span>
                  {renderCheckInStatusTag(roomData.current_event.checkInStatus)}
                </FilaEstado>
              )}
              <FilaEstado>
                <span>{ROOM_PAGE_MESSAGES.CAPACITY_LABEL}</span>
                <strong>
                  {loading ? ROOM_PAGE_MESSAGES.LOADING : roomData?.capacity ?? "-"}{" "}
                  {ROOM_PAGE_MESSAGES.CAPACITY_UNIT}
                </strong>
              </FilaEstado>
              <FilaEstado>
                <span>{ROOM_PAGE_MESSAGES.TODAY_RESERVATIONS_COUNT_LABEL}</span>
                <strong>
                  {todayReservations.length}
                </strong>
              </FilaEstado>
            </CardContainer>

            <CardContainer customStyle={QRCardStyle}>
              <TitleStyle>{ROOM_PAGE_MESSAGES.QR_SECTION_TITLE}</TitleStyle>
              <p>{ROOM_PAGE_MESSAGES.QR_SECTION_DESCRIPTION}</p>
              <QRCodeSection
                //TODO: A desarrollar
                qrImageUrl="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=sala-ejecutiva-02"
                roomName={roomData?.name}
              />
            </CardContainer>
          </ColumnaLateral>
        </ContentGrid>
      </PageInner>

      <CheckInMessageModal
        message={message}
        isSuccess={isSuccess}
        onClose={clearMessage}
      />
    </RoomPageContainer>
  );
};

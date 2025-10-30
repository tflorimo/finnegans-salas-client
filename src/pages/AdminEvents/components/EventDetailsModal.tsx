import { X } from "lucide-react";
import { CardContainer } from "../../../components/CardContainer/CardContainer";
import { Tag } from "../../../components/Tag/Tag";
import { Tags } from "../../../components/Tag/types";
import type { EventResponseDTO, ResponseStatus } from "../../../services/admin/events/types";
import { formatDate, formatTimeRange } from "../utils/dateUtils";
import {
  Overlay,
  ModalBody,
  ModalHeader,
  CloseBtn,
  ModalCardStyle,
  FieldsWrapper,
  Field,
  AttendeeList,
} from "../styles";

interface EventDetailsModalProps {
  event: EventResponseDTO;
  onClose: () => void;
}

const statusTag = (status: ResponseStatus): Tags => {
  switch (status) {
    case "accepted":
      return Tags.success;
    case "declined":
      return Tags.danger;
    case "tentative":
      return Tags.warning;
    case "needsAction":
    default:
      return Tags.info;
  }
};

export const EventDetailsModal = ({ event, onClose }: EventDetailsModalProps) => {
  const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = () => onClose();
  const stop: React.MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation();

  return (
    <Overlay onClick={handleOverlayClick} aria-modal="true" role="dialog">
      <ModalBody onClick={stop}>
        <CardContainer customStyle={ModalCardStyle}>
          <ModalHeader>
            <h3>{event.title}</h3>
            <CloseBtn aria-label="Cerrar" onClick={onClose}>
              <X size={18} />
            </CloseBtn>
          </ModalHeader>

          <FieldsWrapper>
            <Field>
              <label>Fecha</label>
              <div>{formatDate(event.startTime)}</div>
            </Field>

            <Field>
              <label>Horario</label>
              <div>{formatTimeRange(event.startTime, event.endTime)}</div>
            </Field>

            <Field>
              <label>Sala</label>
              <div>{event.roomName}</div>
            </Field>

            <Field>
              <label>Mail de la sala</label>
              <div>{event.roomEmail}</div>
            </Field>

            <Field>
              <label>Responsable</label>
              <div>{event.creatorMail}</div>
            </Field>

            <Field>
              <label>Check-in</label>
              <div>
                <Tag
                  text={event.checkedIn ? "Realizado" : "No Realizado"}
                  type={event.checkedIn ? Tags.success : Tags.warning}
                />
              </div>
            </Field>

            <Field>
              <label>Asistentes</label>
              {event.attendees.length === 0 ? (
                <div>Sin asistentes</div>
              ) : (
                <AttendeeList>
                  {event.attendees.map((attendee) => (
                    <li key={attendee.email}>
                      <span>{attendee.email}</span>
                      <Tag
                        text={attendee.responseStatus}
                        type={statusTag(attendee.responseStatus)}
                      />
                    </li>
                  ))}
                </AttendeeList>
              )}
            </Field>
          </FieldsWrapper>
        </CardContainer>
      </ModalBody>
    </Overlay>
  );
};

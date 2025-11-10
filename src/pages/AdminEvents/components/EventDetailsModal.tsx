import { X } from "lucide-react";
import { CardContainer } from "../../../components/CardContainer/CardContainer";
import { Tag } from "../../../components/Tag/Tag";
import type { EventResponseDTO } from "../../../shared/types/event.types";
import { formatDate, formatTime, formatTimeRange } from "../utils/dateUtils";
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
import { 
  EVENT_MODAL, 
  ATTENDEE_STATUS_TAG_MAP, 
  CHECK_IN_STATUS_TAG_MAP 
} from "../constants/AdminEvents.constants";
import { truncateText } from "../../../shared/utils/text.utils";

interface EventDetailsModalProps {
  event: EventResponseDTO;
  onClose: () => void;
}

export const EventDetailsModal = ({ event, onClose }: EventDetailsModalProps) => {
  const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = () => onClose();
  const stop: React.MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation();

  const checkInTag = CHECK_IN_STATUS_TAG_MAP[event.checkInStatus];

  return (
    <Overlay onClick={handleOverlayClick} aria-modal="true" role="dialog">
      <ModalBody onClick={stop}>
        <CardContainer customStyle={ModalCardStyle}>
          <ModalHeader>
            <h3>{truncateText(event.title, 30)}</h3>
            <CloseBtn aria-label="Cerrar" onClick={onClose}>
              <X size={18} />
            </CloseBtn>
          </ModalHeader>

          <FieldsWrapper>
            <Field>
              <label>{EVENT_MODAL.DATE}</label>
              <div>{formatDate(event.startTime)}</div>
            </Field>

            <Field>
              <label>{EVENT_MODAL.TIME}</label>
              <div>{formatTimeRange(event.startTime, event.endTime)}</div>
            </Field>

            <Field>
              <label>{EVENT_MODAL.ROOM}</label>
              <div>{event.roomName}</div>
            </Field>

            <Field>
              <label>{EVENT_MODAL.ID}</label>
              <div>{event.roomEmail}</div>
            </Field>

            <Field>
              <label>{EVENT_MODAL.CREATOR_MAIL}</label>
              <div>{event.creatorMail}</div>
            </Field>

            <Field>
              <label>{EVENT_MODAL.CREATOR_NAME}</label>
              <div>{event.creatorName}</div>
            </Field>

            <Field>
              <label>{EVENT_MODAL.CHECK_IN}</label>
              <div>
                <Tag
                  text={checkInTag.text}
                  type={checkInTag.type}
                />
              </div>
            </Field>

            {event.deletedAt && (
              <>
                <Field>
                  <label>{EVENT_MODAL.DELETED_AT}</label>
                  <div>{formatDate(event.deletedAt)}</div>
                </Field>
                <Field>
                  <label>Hora de eliminación</label>
                  <div>{formatTime(event.deletedAt)}</div>
                </Field>
              </>
            )}

            <Field>
              <label>{EVENT_MODAL.ATTENDEES}</label>
              {event.attendees.length === 0 ? (
                <div>{EVENT_MODAL.WITHOUT_ATTENDEES}</div>
              ) : (
                <AttendeeList>
                  {event.attendees.map((attendee) => (
                    <li key={attendee.email}>
                      <span>{attendee.email}</span>
                      <Tag
                        text={attendee.responseStatus}
                        type={ATTENDEE_STATUS_TAG_MAP[attendee.responseStatus]}
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

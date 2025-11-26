import { CardContainer } from '../../../components/CardContainer/CardContainer';
import { Tag } from '../../../components/Tag/Tag';
import { formatTimestamp } from '../../../shared/utils/format.utils';
import { AUDIT_ACTION_LABELS } from '../constants/AdminAudit.constants';
import {
  AuditHeader,
  TagContainer,
  AuditInfo,
  AuditTitle,
  AuditUser,
  AuditTimestamp,
  AuditItemCardStyle
} from '../styles';
import { ThemeContext } from '../../../context/theme/themeContext';
import { useContext } from 'react';
import {
  getUserDisplay,
  getRoomDisplay,
  getAuditTagType,
  getInfoDisplay
} from '../utils/AuditUtils';
import type { AuditItemProps } from '../types/AuditItem.types';

export const AuditItem = ({ log }: AuditItemProps) => {
  const { theme } = useContext(ThemeContext);
  const actionLabel = AUDIT_ACTION_LABELS[log.action as keyof typeof AUDIT_ACTION_LABELS] || log.action;
  const tagType = getAuditTagType(log.action);
  const userDisplay = getUserDisplay(log.userEmail, log.info);
  const roomDisplay = getRoomDisplay(log.roomEmail, log.info, log.action);
  const infoDisplay = getInfoDisplay(log.info, userDisplay, roomDisplay);
  
  return (
    <CardContainer customStyle={AuditItemCardStyle}>
      <AuditHeader>
        <TagContainer>
          <Tag
            text={actionLabel}
            type={tagType}
          />
        </TagContainer>
        <AuditInfo>
          <AuditTitle $theme={theme}>{userDisplay}</AuditTitle>
          <AuditUser $theme={theme}>{infoDisplay || roomDisplay || 'N/A'}</AuditUser>
        </AuditInfo>
        <AuditTimestamp>{formatTimestamp(log.createdAt)}</AuditTimestamp>
      </AuditHeader>
    </CardContainer>
  );
};

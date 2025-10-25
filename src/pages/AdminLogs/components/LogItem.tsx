import { CardContainer } from '../../../components/CardContainer/CardContainer';
import { Tag } from '../../../components/Tag/Tag';
import type { LogDTO } from '../../../services/admin/logs/types';
import { formatTimestamp, getTagType, formatUserInfo, translateLogStatus } from '../utils/logsUtils';
import {
  LogHeader,
  TagContainer,
  LogInfo,
  LogTitle,
  LogUser,
  LogTimestamp,
  LogItemCardStyle
} from '../styles';

interface LogItemProps {
  log: LogDTO;
}

export const LogItem = ({ log }: LogItemProps) => {
  return (
    <CardContainer customStyle={LogItemCardStyle}>
      <LogHeader>
        <TagContainer>
          <Tag
            text={translateLogStatus(log.status)}
            type={getTagType(log.status)}
          />
        </TagContainer>
        <LogInfo>
          <LogTitle>{log.action}</LogTitle>
          <LogUser>{formatUserInfo(log.userName, log.roomName)}</LogUser>
        </LogInfo>
        <LogTimestamp>{formatTimestamp(log.timestamp)}</LogTimestamp>
      </LogHeader>
    </CardContainer>
  );
};

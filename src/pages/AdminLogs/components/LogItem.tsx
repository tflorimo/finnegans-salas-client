import { CardContainer } from '../../../components/CardContainer/CardContainer';
import { Tag } from '../../../components/Tag/Tag';
import type { LogDTO } from '../../../services/admin/logs/types';
import { formatTimestamp } from '../../../shared/utils/format.utils';
import { getTagType, formatUserInfo, translateLogStatus } from '../utils/logsUtils';
import {
  LogHeader,
  TagContainer,
  LogInfo,
  LogTitle,
  LogUser,
  LogTimestamp,
  LogItemCardStyle
} from '../styles';
import { ThemeContext } from '../../../context/theme/themeContext';
import { useContext } from 'react';

interface LogItemProps {
  log: LogDTO;
}
export const LogItem = ({ log }: LogItemProps) => {
  const { theme } = useContext(ThemeContext);
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
          <LogTitle $theme={theme} >{log.action}</LogTitle>
          <LogUser $theme={theme} >{formatUserInfo(log.userName, log.roomName)}</LogUser>
        </LogInfo>
        <LogTimestamp>{formatTimestamp(log.timestamp)}</LogTimestamp>
      </LogHeader>
    </CardContainer>
  );
};

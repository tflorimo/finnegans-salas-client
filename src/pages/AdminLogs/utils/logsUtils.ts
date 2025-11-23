import type { TagsTypes } from '../../../components/Tag/types';
import { 
  LOG_STATUS_TAG_MAP, 
  LOG_STATUS_TRANSLATIONS
} from '../constants/AdminLogs.constants';

export const getTagType = (status: string): TagsTypes => {
  return LOG_STATUS_TAG_MAP[status] || 'info';
};

export const translateLogStatus = (status: string): string => {
  return LOG_STATUS_TRANSLATIONS[status.toLowerCase()] || status;
};

export const formatUserInfo = (userName?: string, roomName?: string): string => {
  const userText = userName ? `por ${userName}` : 'Sistema';
  const roomText = roomName ? ` • ${roomName}` : '';
  return `${userText}${roomText}`;
};

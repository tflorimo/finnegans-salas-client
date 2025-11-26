import type { TagsTypes } from '../../../components/Tag/types';
import { AUDIT_COLOR_MAP } from '../constants/AdminAudit.constants';

const normalizeSpacingBeforeComma = (text: string): string => {
  return text.replace(/\s+,/g, ',');
};

export const parseAuditInfo = (infoStr: string | null): Record<string, any> | null => {
  if (!infoStr) return null;
  try {
    return JSON.parse(infoStr);
  } catch {
    return null;
  }
};

export const getUserDisplay = (userEmail: string | null, info: string | null): string => {
  if (!userEmail) return 'Sistema';
  
  const parsedInfo = parseAuditInfo(info);
  if (parsedInfo?.userName) {
    return parsedInfo.userName;
  }
  
  return userEmail;
};

export const getRoomDisplay = (roomEmail: string | null, info: string | null, action: string): string => {
  if (!roomEmail) return 'N/A';
  
  if (['LOGIN_SUCCESS', 'LOGIN_FAILED', 'LOGOUT'].includes(action)) {
    return 'N/A';
  }
  
  const parsedInfo = parseAuditInfo(info);
  if (parsedInfo?.roomName) {
    return parsedInfo.roomName;
  }
  
  return roomEmail;
};

export const getAuditTagType = (action: string): TagsTypes => {
  const normalizedAction = (action || '').trim().toUpperCase();
  return AUDIT_COLOR_MAP[normalizedAction] || 'succesOutput';
};

export const getInfoDisplay = (info: string | null, userDisplay: string, roomDisplay: string): string => {
  if (info) {
    return normalizeSpacingBeforeComma(info);
  }
  
  const infoParts: string[] = [];
  
  if (roomDisplay && roomDisplay !== 'N/A') {
    infoParts.push(roomDisplay);
  }
  
  if (infoParts.length === 0 && userDisplay && userDisplay !== 'Sistema') {
    infoParts.push(userDisplay);
  }
  
  return infoParts.join(' • ');
};

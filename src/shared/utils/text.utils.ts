export const truncateText = (text: string, maxWords: number): string => {
  if (!text) return "";
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) {
    return text;
  }
  return `${words.slice(0, maxWords).join(' ')}...`;
};

export const truncateTextByLength = (text: string, maxLength: number): string => {
  if (!text) return "";
  return text.length > maxLength
    ? `${text.slice(0, maxLength)}...`
    : text;
};

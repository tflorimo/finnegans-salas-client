/**
 * Corta un texto si supera una longitud máxima y agrega "..."
 * @param text Texto original
 * @param maxLength Longitud máxima permitida (por defecto 10)
 * @returns Texto truncado con "..." si excede el límite
 */

export function truncateText(text: string, maxLength: number = 10): string {
  if (!text) return "";
  return text.length > maxLength
    ? `${text.slice(0, maxLength)}...`
    : text;
}

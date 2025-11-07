import { isAxiosError } from "axios";

export const getErrorMessage = (error: unknown, fallbackMessage: string) => {
  if (isAxiosError<{ message?: string }>(error)) {
    return error.response?.data?.message ?? fallbackMessage;
  }

  if (error instanceof Error) {
    return error.message || fallbackMessage;
  }

  return fallbackMessage;
};

// Limpia el token JWT y verifica si está por expirar (utilizar cuando se llamen a endpoints
// del backend cuando se use autenticación basada en JWT).
export const isTokenExpiringSoon = (jwt: string, skewSeconds = 10): boolean => {
  try {
    const [, payloadB64] = jwt.split(".");
    const payload = JSON.parse(atob(payloadB64));
    const exp = Number(payload?.exp ?? 0); // en segundos
    const now = Math.floor(Date.now() / 1000);
    return !exp || exp - now <= skewSeconds;
  } catch {
    throw new Error("Invalid JWT token");
  }
};
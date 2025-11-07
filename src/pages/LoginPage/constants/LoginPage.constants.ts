const DEFAULT_AUTH_ERROR = "El usuario no está autorizado para acceder a la aplicación.";

const AUTH_ERROR_MESSAGES: Record<string, string> = {
  oauth_domain_not_allowed: DEFAULT_AUTH_ERROR,
};

export const resolveAuthErrorMessage = (code?: string | null): string =>
  AUTH_ERROR_MESSAGES[code ?? ""] ?? DEFAULT_AUTH_ERROR;
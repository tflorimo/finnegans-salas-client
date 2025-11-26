const DEFAULT_AUTH_ERROR = "El usuario no está autorizado para acceder a la aplicación.";

const AUTH_ERROR_MESSAGES: Record<string, string> = {
  oauth_domain_not_allowed: DEFAULT_AUTH_ERROR,
};

export const resolveAuthErrorMessage = (code?: string | null): string =>
  AUTH_ERROR_MESSAGES[code ?? ""] ?? DEFAULT_AUTH_ERROR;

export const LOGIN_PAGE_TEXTS = {
  HEADER: {
    SUBTITLE: "Reservas de Sala In-Situ",
    DESCRIPTION: "Gestiona y reserva salas de manera eficiente",
  },
  CARD: {
    WELCOME_TITLE: "Te damos la bienvenida",
    INSTRUCTION: "Inicia sesión para acceder al sistema",
    GOOGLE_BUTTON: "Ingresar con Google",
  },
  FOOTER: {
    DISCLAIMER: "Al continuar, aceptas nuestros",
    TERMS_LINK: "términos de servicio",
    AND: "y",
    PRIVACY_LINK: "política de privacidad",
  },
  ERROR_MODAL: {
    TITLE_AUTH_ERROR: "Acceso denegado",
    TITLE_LOGIN_REQUIRED: "Inicio de sesión requerido",
    BUTTON_TEXT: "Entendido",
  },
  ALT_TEXT: {
    LOGO_FINNEGANS: "Logo Finnegans",
    LOGO_GOOGLE: "Google",
  },
};



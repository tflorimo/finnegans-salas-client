const getCookie = (name: string): string | null => {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`));
  
  return cookie ? cookie.split('=')[1] : null;
};

const deleteCookie = (name: string, path: string = '/'): void => {
  document.cookie = `${name}=; Max-Age=0; path=${path}`;
};

const decodeJWTEmail = (token: string): string | null => {
  try {
    const payload = token.split(".")[1];
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + (4 - (base64.length % 4)) % 4, "=");
    const decoded = JSON.parse(atob(padded));
    return decoded.email || null;
  } catch (error) {
    console.error("Error decodificando JWT:", error);
    return null;
  }
};


export const readAndClearTempAuthCookies = (): { token: string; email: string } | null => {
  const tempToken = getCookie('tempAccessToken');
  let tempEmail = getCookie('tempUserEmail');

  if (!tempToken) {
    console.error('No se encontró la cookie tempAccessToken');
    return null;
  }

  if (!tempEmail) {
    const emailFromJWT = decodeJWTEmail(tempToken);
    if (!emailFromJWT) {
      console.error('No se pudo extraer el email del JWT');
      return null;
    }
    tempEmail = emailFromJWT;
  }

  deleteCookie('tempAccessToken', '/auth/callback');
  deleteCookie('tempUserEmail', '/auth/callback');

  const decodedEmail = decodeURIComponent(tempEmail);

  return {
    token: tempToken,
    email: decodedEmail,
  };
};
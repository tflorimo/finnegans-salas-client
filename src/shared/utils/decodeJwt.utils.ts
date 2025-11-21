/**
 * @description: Decodifica un token JWT y devuelve su payload como un objeto.
 * @param {string} token
 * @return {*}  {({ [key: string]: unknown } | null)}
 */
export const decodeJwt = (token: string): { [key: string]: unknown } | null => {
    try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split("")
                .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
                .join("")
        );
        return JSON.parse(jsonPayload);
    } catch (error) {
        throw new Error(`Error al decodificar el token: ${error}`);
    }
}
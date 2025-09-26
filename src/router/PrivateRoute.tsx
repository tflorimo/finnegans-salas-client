import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/auth/authContext";
import type { PrivateRouteProps } from "./types";

/**
 * @description Componente de ruta privada que verifica si el usuario está autenticado.
 * @export
 * @param {PrivateRouteProps} { children }
 * @return {*} 
 */
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { logged } = useContext(AuthContext);

    return logged ? <>{children}</> : <Navigate to="/login" />;
};

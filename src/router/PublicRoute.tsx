import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../context/auth/authContext";
import type { PublicRouteProps } from "./types";

/**
 * @description Componente de ruta pública que verifica si el usuario está autenticado.
 * @export
 * @param {PublicRouteProps} { children }
 * @return {*} 
 */

export const PublicRoute = ({ children }: PublicRouteProps) => {
    const { authToken } = useContext(AuthContext);
    const location = useLocation();

    if (location.pathname.includes('/auth/callback')) {
        return <>{children}</>;
    }

    return authToken ? <Navigate to="/home" replace /> : <>{children}</>;
};
import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/auth/authContext";
import type { PublicRouteProps } from "./types";


/**
 * @description Componente de ruta pública que verifica si el usuario está autenticado.
 * @export
 * @param {PublicRouteProps} { children }
 * @return {*} 
 */
export const PublicRoute = ({ children }: PublicRouteProps) => {
    const { logged } = useContext(AuthContext);

    return logged ? <Navigate to="/home" /> : <>{children}</>;
};
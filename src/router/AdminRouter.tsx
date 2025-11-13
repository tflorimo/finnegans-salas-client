import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth/authContext";
import { decodeJwt } from "../shared/utils/decodeJwt.utils";
import type { AdminRouteProps } from "./types";

/*
 * @description: Componente de ruta protegida para administradores.
 * Si el usuario no está autenticado, redirige a /login.
 * Si el usuario no es administrador, redirige a /home.
 * Si el usuario es administrador, renderiza los hijos del componente.
 */
export const AdminRoute = ({ children }: AdminRouteProps) => {
    const { authToken } = useContext(AuthContext);
    const decoded = authToken && decodeJwt(authToken);

    if (!decoded) return;

    const role = decoded.role;

    const isAdmin = role === "admin";

    if (!authToken) return <Navigate to="/login" replace />;
    if (!isAdmin) return <Navigate to="/home" replace />;

    return <>{children}</>;
};

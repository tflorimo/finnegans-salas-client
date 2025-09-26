import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <PublicRoute>
            {/** TODO: Agregar acá las pages publicas de la aplicación */}
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            {/** TODO: Agregar acá las pages internas de la aplicación */}
            <div>Private Routes</div>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

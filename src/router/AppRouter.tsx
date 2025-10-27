import { Route, Routes } from "react-router-dom";

import { AuthCallback } from "../pages/LoginPage/AuthCallback";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { FinnegansRoutes } from "../routes/FinnegansRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="auth/callback"
          element={
            <PublicRoute>
              <AuthCallback />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <FinnegansRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

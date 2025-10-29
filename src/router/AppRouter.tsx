import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthCallback } from "../pages/LoginPage/AuthCallback";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { FinnegansRoutes } from "../routes/FinnegansRoutes";
import { AuthContext } from "../context/auth/authContext";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { logged } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={logged ? "/home" : "/login"} replace />}
      />
      
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
  );
};
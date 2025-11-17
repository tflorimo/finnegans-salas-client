import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/auth/authContext";
import { AuthCallback } from "../pages/LoginPage/AuthCallback";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { FinnegansRoutes } from "../routes/FinnegansRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { authToken } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={authToken ? "/home" : "/login"} replace />}
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

      <Route path="qr-checkin/*" element={<FinnegansRoutes />} />

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
import { useContext } from "react";
import { Layout } from "./components/Layout/Layout";
import { AuthProvider } from "./context/auth/AuthProvider";
import { ThemeContext } from "./context/theme/themeContext";
import { ThemeProvider } from "./context/theme/themeProvider";
import { AppRouter } from "./router/AppRouter";

export const FinnegansApp = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout>
        <AppRouter />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
};

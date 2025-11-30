import { Layout } from "./components/Layout/Layout";
import { AuthProvider } from "./context/auth/AuthProvider";
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

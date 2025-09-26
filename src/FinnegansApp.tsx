import { AuthProvider } from "./context/auth/AuthProvider";
import { AppRouter } from "./router/AppRouter";

export const FinnegansApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import { ThemeContext } from "../../context/theme/themeContext";
import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundTitle,
  NotFoundMessage,
  NotFoundCode,
  HomeButton,
} from "./styles";
import { NOT_FOUND_MESSAGES, NOT_FOUND_ROUTES } from "./constants/NotFoundPage.constants";

export const NotFoundPage = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(NOT_FOUND_ROUTES.HOME);
  };

  return (
    <NotFoundContainer $theme={theme}>
      <NotFoundContent $theme={theme}>
        <NotFoundCode $theme={theme}>{NOT_FOUND_MESSAGES.ERROR_CODE}</NotFoundCode>
        <NotFoundTitle $theme={theme}>{NOT_FOUND_MESSAGES.TITLE}</NotFoundTitle>
        <NotFoundMessage $theme={theme}>
          {NOT_FOUND_MESSAGES.DESCRIPTION}
        </NotFoundMessage>
        <HomeButton onClick={handleGoHome}>
          <Home size={20} />
          {NOT_FOUND_MESSAGES.BUTTON_TEXT}
        </HomeButton>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

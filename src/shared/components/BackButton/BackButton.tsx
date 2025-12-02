import { ArrowLeft } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ThemeContext } from "../../../context/theme/themeContext";
import { BackButtonStyled } from "./styles";

export const BackButton = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  return (
    <BackButtonStyled $theme={theme} onClick={() => navigate("/home")}>
      <ArrowLeft size={18} />
      Volver al inicio
    </BackButtonStyled>
  );
};

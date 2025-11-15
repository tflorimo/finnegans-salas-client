import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButtonStyled } from "./styles";
import { ThemeContext } from "../../../context/theme/themeContext";
import { useContext } from "react";

export const BackButton = () => {
  const navigate = useNavigate();
  const {theme} = useContext(ThemeContext);
  
  return (
    <BackButtonStyled $theme={theme} onClick={() => navigate("/home")}>
      <ArrowLeft size={18} />
      Volver al inicio
    </BackButtonStyled>
  );
};

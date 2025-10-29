import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButtonStyled } from "./styles";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <BackButtonStyled onClick={() => navigate("/home")}>
      <ArrowLeft size={18} />
      Volver al inicio
    </BackButtonStyled>
  );
};

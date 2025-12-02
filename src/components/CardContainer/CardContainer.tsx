import { useContext } from "react";
import { CardContainerStyled } from "./styles";
import type { CardContainerProps } from "./types";
import { ThemeContext } from "../../context/theme/themeContext";

export function CardContainer({ children, customStyle, onClick }: CardContainerProps) {
    const { theme } = useContext(ThemeContext);
    return <CardContainerStyled
        $customStyle={customStyle}
        $theme={theme}
        onClick={onClick && onClick}
    >
        {children}
    </CardContainerStyled>
}
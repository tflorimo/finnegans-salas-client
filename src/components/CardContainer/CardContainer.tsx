import { CardContainerStyled } from "./styles";
import type { CardContainerProps } from "./types";

export function CardContainer({ children, customStyle, onClick }: CardContainerProps) {
    return <CardContainerStyled $customStyle={customStyle} onClick={onClick && onClick}>{children}</CardContainerStyled>
}
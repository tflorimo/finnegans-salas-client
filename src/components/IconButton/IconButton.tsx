import type { JSX } from "react";
import { IconButtonStyled } from "./styles";
import type { IconButtonProps } from "./types";

/**
 * @description IconButton component that renders a button with an icon.
 * @export
 * @param {IconButtonProps} { children, onClick, customStyle }
 * @return {*} 
 */
export const IconButton = ({ children, onClick, customStyle }: IconButtonProps): JSX.Element => {
    return <IconButtonStyled customStyle={customStyle} onClick={onClick}>{children}</IconButtonStyled>;
}
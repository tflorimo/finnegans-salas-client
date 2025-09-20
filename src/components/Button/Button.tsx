import type { JSX } from "react";
import { ButtonStyled } from "./styles";
import { ButtonVariant, type ButtonProps } from "./types";

/**
 * @description Button component that can display an icon and/or text, with customizable styles and variants.
 * @export
 * @param {ButtonProps} {
 *   icon,
 *   text,
 *   customStyle,
 *   variant = ButtonVariant.primary,
 *   onClick,
 * }
 * @return {JSX.Element} 
 */
export function Button({
  icon,
  text,
  customStyle,
  variant = ButtonVariant.primary,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <ButtonStyled
      $variant={variant}
      $customStyle={customStyle}
      $hasIcon={!!icon}
      onClick={onClick}
    >
      {icon && icon}
      {text && text}
    </ButtonStyled>
  );
};

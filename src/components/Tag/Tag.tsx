import type { JSX } from "react";
import { TagStyled } from "./styles";
import { Tags, type TagProps } from "./types";

/**
 * @description Tag component.
 * @export
 * @param {TagProps} { icon, text, type, customStyle }
 * @return {JSX.Element}
 */
export const Tag = ({
  icon,
  text,
  customStyle,
  type = Tags.succesOutput,
  ...rest
}: TagProps & Record<string, any>): JSX.Element => {
  const themeProp = rest.$theme ?? rest.theme ?? "light";

  const Styled: any = TagStyled;
  return (
    <Styled $type={type} $customStyle={customStyle} $theme={themeProp}>
      {icon && icon} {text}
    </Styled>
  );
}
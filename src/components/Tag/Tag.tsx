import type { JSX } from "react";
import { TagStyled } from "./styles";
import { Tags, type TagProps } from "./types";

/**
 * @description Tag component.
 * @export
 * @param {TagProps} { icon, text, type, customStyle }
 * @return {JSX.Element}
 */
export const Tag = ({ icon, text, customStyle, type = Tags.succesOutput }: TagProps): JSX.Element => {
    return <TagStyled $type={type} $customStyle={customStyle}>{icon && icon} {text}</TagStyled>;
}
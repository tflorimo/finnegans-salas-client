import type { ChangeEvent, JSX, KeyboardEvent } from "react";
import {
    InputContainer,
    StyledInput,
    IconWrapper,
    InputWrapper
} from './styles';
import { type InputProps } from './types';

/**
 * @description Input component that can display an icon for search functionality, with customizable styles.
 * Primarily used for search fields to filter lists and tables.
 * @export
 * @param {InputProps} {
 *   icon,
 *   placeholder,
 *   value,
 *   customStyle,
 *   onChange,
 *   onKeyDown,
 *   onClick,
 * }
 * @return {JSX.Element} 
 */

export function Input({
    icon,
    placeholder,
    value,
    customStyle,
    onChange,
    onKeyDown,
    onClick,
}: InputProps): JSX.Element {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (onKeyDown) {
            onKeyDown(e);
        }
    };

    return (
        <InputWrapper $customStyle={customStyle}>
            <InputContainer $hasIcon={!!icon}>
                <StyledInput
                    type="search"
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                {icon && (
                    <IconWrapper onClick={onClick}>
                        {icon}
                    </IconWrapper>
                )}
            </InputContainer>
        </InputWrapper>
    );
}
import { forwardRef, type InputHTMLAttributes } from "react";
import { InputContainer, StyledInput, IconWrapper, InputWrapper } from './styles';
import type { InputProps } from './types';

/**
 * @description Input component used for on-page search with optional icon and customizable styles.
 * @export
 * @param {InputProps} {
 *   icon,
 *   placeholder,
 *   value,
 *   customStyle,
 *   onChange,
 *   onKeyDown,
 *   onClick,
 *  ...rest
 * }
 * @return {JSX.Element} 
 */

export const Input = forwardRef<HTMLInputElement, InputProps & InputHTMLAttributes<HTMLInputElement>>(function Input(
    { icon, placeholder, value, customStyle, onChange, onKeyDown, onClick, ...rest }, ref
) {
    const ariaLabel = (rest as Record<string, unknown>)["aria-label"] as string | undefined;
    return (
        <InputWrapper $customStyle={customStyle}>
            <InputContainer $hasIcon={!!icon}>
                <StyledInput
                    {...rest}
                    ref={ref}
                    type={rest.type ?? "text"}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onClick={onClick}
                    aria-label={ariaLabel ?? placeholder}
                />
                {icon && (
                    <IconWrapper aria-label="input-action" onClick={onClick}>
                        {icon}
                    </IconWrapper>
                )}
            </InputContainer>
        </InputWrapper>
    );
});
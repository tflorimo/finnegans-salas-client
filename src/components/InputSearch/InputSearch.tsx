import { LucideSearch, LucideX } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { FormContainer, IconButton, InputContainer, SearchInput } from "./styles";
import type { InputSearchProps } from "./types";

export const InputSearch: React.FC<InputSearchProps> = ({
    onFilter,
    placeholder = "Buscar...",
    theme,
    debounceTime = 1000,
    showClearButton = false,
}) => {
    const [query, setQuery] = useState<string>("");
    const [debouncedValue, setDebouncedValue] = useState<string>("");

    const onFilterRef = useRef(onFilter);

    onFilterRef.current = onFilter;

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value;
            setQuery(newValue);
        },
        []
    );

    const handleClear = useCallback(() => {
        setQuery("");
        setDebouncedValue("");
        onFilterRef.current("");
    }, [onFilterRef]);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(query);
        }, debounceTime);

        return () => clearTimeout(handler);
    }, [query, debounceTime]);

    useEffect(() => {
        onFilterRef.current(debouncedValue);
    }, [debouncedValue]);

    return (
        <FormContainer onSubmit={(e) => e.preventDefault()}>
            <InputContainer $theme={theme}>
                <LucideSearch size={18} />
                <SearchInput
                    $theme={theme}
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
                {showClearButton && query && (
                    <IconButton $theme={theme} type="button" onClick={handleClear}>
                        <LucideX size={16} />
                    </IconButton>
                )}
            </InputContainer>
        </FormContainer>
    );
};

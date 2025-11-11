import { LucideSearch, LucideX } from "lucide-react";
import React, { useCallback, useState } from "react";

import { IconButton, InputContainer, SearchInput } from "./styles";
import type { InputSearchProps } from "./types";

export const InputSearch: React.FC<InputSearchProps> = ({
    onFilter,
    placeholder = "Buscar...",
}) => {
    const [query, setQuery] = useState<string>("");

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setQuery(newValue);
        onFilter(newValue);
    }, [onFilter]);

    const handleClear = () => {
        setQuery("");
        onFilter("");
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <InputContainer>
                <LucideSearch size={18} />
                <SearchInput
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
                {query && (
                    <IconButton type="button" onClick={handleClear}>
                        <LucideX size={16} />
                    </IconButton>
                )}
            </InputContainer>
        </form>
    );
};

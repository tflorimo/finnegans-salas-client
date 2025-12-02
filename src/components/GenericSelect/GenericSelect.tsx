import { LucideChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import { ArrowIcon, SelectContainer, StyledSelect } from "./styles";
import type { Base, GenericSelectProps } from "./types";

const getStringFromValue = <TValue extends Base>(value: TValue) => {
    if (typeof value === "string") return value;
    return value.id;
};

export const GenericSelect = <TValue extends Base>(
    props: GenericSelectProps<TValue>
) => {
    const { values, onChange, formatLabel, selected, theme } = props;
    const [current, setCurrent] = useState<TValue | undefined>(selected);

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = values.find((v) => getStringFromValue(v) === e.target.value);
        if (val) {
            setCurrent(val);
            onChange(val);
        }
    };

    useEffect(() => {
        setCurrent(selected);
    }, [selected]);

    return (
        <SelectContainer>
            <StyledSelect $theme={theme} value={current ? getStringFromValue(current) : ""} onChange={onSelectChange}>
                <option value="" disabled hidden>
                    {props.placeholder ?? "Seleccione una opción"}
                </option>
                {values.map((value) => (
                    <option key={getStringFromValue(value)} value={getStringFromValue(value)}>
                        {formatLabel(value)}
                    </option>
                ))}
            </StyledSelect>
            <ArrowIcon $theme={theme}>
                <LucideChevronDown size={16} />
            </ArrowIcon>
        </SelectContainer>
    );
};

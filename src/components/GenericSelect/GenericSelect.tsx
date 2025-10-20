import { LucideChevronDown } from "lucide-react";
import { useState } from "react";
import { ArrowIcon, SelectContainer, StyledSelect } from "./styles";
import type { Base, GenericSelectProps } from "./types";

const getStringFromValue = <TValue extends Base>(value: TValue) => {
    if (typeof value === "string") return value;
    return value.id;
};

export const GenericSelect = <TValue extends Base>(
    props: GenericSelectProps<TValue>
) => {
    const { values, onChange, formatLabel, selected } = props;
    const [current, setCurrent] = useState<TValue | undefined>(selected);

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = values.find((v) => getStringFromValue(v) === e.target.value);
        if (val) {
            setCurrent(val);
            onChange(val);
        }
    };

    return (
        <SelectContainer>
            <StyledSelect value={current ? getStringFromValue(current) : ""} onChange={onSelectChange}>
                {values.map((value) => (
                    <option key={getStringFromValue(value)} value={getStringFromValue(value)}>
                        {formatLabel(value)}
                    </option>
                ))}
            </StyledSelect>
            <ArrowIcon>
                <LucideChevronDown size={16} />
            </ArrowIcon>
        </SelectContainer>
    );
};

export type UseFilteredEvents = <T extends Record<string, T>>(data: T[]) => {
    onKeywordSelected: (keyword: string) => void;
    filteredData: T[];
}

export type SearchParam = { key: string; value: string } | undefined;
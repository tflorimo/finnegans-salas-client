import { useCallback, useEffect, useState } from "react";

export const useFilteredEvents = <T extends Record<string, unknown>>(
  data: T[],
) => {
  const [filteredData, setFilteredData] = useState<T[]>([]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const onKeywordSelected = useCallback(
    (input: string) => {
      const value = input.trim().toLowerCase();

      if (!value) {
        setFilteredData(data);
        return;
      }

      const dataFiltered = data.filter((item) =>
        Object.values(item).some((field) =>
          String(field).toLowerCase().includes(value)
        )
      );
      setFilteredData(dataFiltered);
    },
    [data]
  );

  return { onKeywordSelected, filteredData }
};

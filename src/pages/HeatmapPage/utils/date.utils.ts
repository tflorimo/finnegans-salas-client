export const parseDatetime = (datetime: string | Date) => {
    const date = new Date(datetime);

    if (isNaN(date.getTime())) {
        console.warn("Invalid datetime received:", datetime);
        return {
            dateISO: "",
            hour: -1,
            dayLabel: "",
        };
    }

    return {
        dateISO: date.toISOString().slice(0, 10),
        hour: date.getHours(),
        dayLabel: date
            .toLocaleDateString("es-AR", { weekday: "short" })
            .replace(".", "")
            .replace(/^\w/, (c) => c.toUpperCase()),
    };
};

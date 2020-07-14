import { useState } from "react";
import { getDaysInMonth, startOfMonth, addDays, getDay } from "date-fns";

export const useToggle = (defaultValue) => {
    const [state, setState] = useState(defaultValue);
    const toggleState = () => setState(!state);

    return [state, toggleState];
};

export const getDayFormat = (currentMonth) => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const startDate = startOfMonth(currentMonth);
    const startDay = getDay(startDate);
    const dates = [];

    for (let i = 0; i < daysInMonth; i++) {
        dates.push(addDays(startDate, i));
    }

    return [startDay, dates];
};

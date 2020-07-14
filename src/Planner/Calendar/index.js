import React from "react";
import { useCalendarStore } from "js/contexts/CalendarContext";
import CalendarHeader from "./CalendarHeader";
import Month from "./Month";
import s from "./styles.module.css";

const Calendar = () => {
    const { currentMonth } = useCalendarStore();

    return (
        <div className={s.calendar}>
            <CalendarHeader currentMonth={currentMonth} />
            <Month currentMonth={currentMonth} />
        </div>
    );
};

export default Calendar;

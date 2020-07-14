import React from "react";
import PropTypes from "prop-types";
import { useEventsStore } from "js/contexts/EventsContext";
import { getDayFormat } from "js/helpers";
import Cell from "components/Cell";
import Day from "./Day";
import s from "./styles.module.css";

const MonthHeader = () =>
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <Cell key={day}>{day}</Cell>
    ));

const Month = ({ currentMonth }) => {
    const [startDay, dates] = getDayFormat(currentMonth);
    const events = useEventsStore();
    const datesWithEvents = Object.keys(events);

    // Used to properly set the starting day of the month
    const fillerCell = startDay > 0 && (
        <Cell style={{ gridArea: `2 / 1 / 3 / ${startDay + 1}` }} />
    );
    const days = dates.map((day) => {
        const dateId = day.toDateString();
        const isDateWithEvents = datesWithEvents.includes(dateId);

        return <Day key={day} day={day} isDateWithEvents={isDateWithEvents} />;
    });

    return (
        <div className={s.month}>
            <MonthHeader />
            {fillerCell}
            {days}
        </div>
    );
};

Month.propTypes = {
    currentMonth: PropTypes.object.isRequired,
};

export default Month;

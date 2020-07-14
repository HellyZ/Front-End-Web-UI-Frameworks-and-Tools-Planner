import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { format, isToday, isSameDay } from "date-fns";
import {
    useCalendarStore,
    useCalendarDispatch,
} from "js/contexts/CalendarContext";
import { setSelectedDate } from "js/actions";
import Cell from "components/Cell";
import s from "./styles.module.css";

const Day = ({ day, isDateWithEvents }) => {
    const { selectedDate } = useCalendarStore();
    const dispatch = useCalendarDispatch();

    return (
        <Cell
            className={cx(s.day, {
                [s.isDateWithEvents]: isDateWithEvents,
            })}
            onClick={() => dispatch(setSelectedDate(day))}
        >
            <span
                className={cx(s.span, {
                    [s.isToday]: isToday(day),
                    [s.isSelectedDate]: isSameDay(day, selectedDate),
                })}
            >
                {format(day, "D")}
            </span>
        </Cell>
    );
};

Day.propTypes = {
    day: PropTypes.object.isRequired,
    isDateWithEvents: PropTypes.bool.isRequired,
};

export default Day;

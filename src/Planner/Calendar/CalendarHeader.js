import React from "react";
import PropTypes from "prop-types";
import { format, addMonths } from "date-fns";
import { useCalendarDispatch } from "js/contexts/CalendarContext";
import { setMonth, setToday } from "js/actions";
import SectionHeader from "components/SectionHeader";
import Button, { ButtonGroup } from "components/Button";
import s from "./styles.module.css";

const CalendarHeader = ({ currentMonth }) => {
    const dispatch = useCalendarDispatch();

    return (
        <SectionHeader
            heading={format(currentMonth, "MMMM YYYY")}
            className={s.calendarHeader}
        >
            <ButtonGroup>
                <Button
                    onClick={() =>
                        dispatch(setMonth(addMonths(currentMonth, -1)))
                    }
                    type="primary"
                >
                    &#8592;
                </Button>
                <Button onClick={() => dispatch(setToday())}>Today</Button>
                <Button
                    onClick={() =>
                        dispatch(setMonth(addMonths(currentMonth, 1)))
                    }
                    type="primary"
                >
                    &#8594;
                </Button>
            </ButtonGroup>
        </SectionHeader>
    );
};

CalendarHeader.propTypes = {
    currentMonth: PropTypes.object.isRequired,
};

export default CalendarHeader;

import React from "react";
import { useCalendarStore } from "js/contexts/CalendarContext";
import EventsHeader from "./EventsHeader";
import EventsList from "./EventsList";
import s from "./styles.module.css";

const Events = () => {
    const { selectedDate } = useCalendarStore();
    const selectedDateId = selectedDate.toDateString();

    return (
        <div className={s.events}>
            <EventsHeader selectedDate={selectedDate} />
            <EventsList selectedDateId={selectedDateId} />
        </div>
    );
};

export default Events;

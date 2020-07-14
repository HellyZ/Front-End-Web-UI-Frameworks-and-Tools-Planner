import React from "react";
import PropTypes from "prop-types";
import { useEventsStore } from "js/contexts/EventsContext";
import Alert from "components/Alert";
import Toggleable from "components/Toggleable";
import ToggleableEventItem from "./ToggleableEventItem";
import s from "./styles.module.css";

const EventsList = ({ selectedDateId }) => {
    const events = useEventsStore();
    const currentDateEvents = events[selectedDateId] || [];
    const eventsToShow = currentDateEvents.length !== 0;

    const eventItems = currentDateEvents.map((event) => (
        <ToggleableEventItem
            key={event.id}
            {...event}
            selectedDateId={selectedDateId}
        />
    ));

    const noItemsAlert = <Alert type="info">No events for today.</Alert>;

    return (
        <div className={s.eventsList}>
            <Toggleable
                showSecondaryComponent={eventsToShow}
                initialComponent={noItemsAlert}
                secondaryComponent={eventItems}
            />
        </div>
    );
};

EventsList.propTypes = {
    selectedDateId: PropTypes.string.isRequired,
};

export default EventsList;

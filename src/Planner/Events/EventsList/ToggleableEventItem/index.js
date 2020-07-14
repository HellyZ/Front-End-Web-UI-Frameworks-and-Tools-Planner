import React from "react";
import PropTypes from "prop-types";
import { useEventsDispatch } from "js/contexts/EventsContext";
import { updateEvent, deleteEvent } from "js/actions";
import { useToggle } from "js/helpers";
import Toggleable from "components/Toggleable";
import Form from "components/Form";
import EventItem from "./EventItem";

const ToggleableEventItem = ({ title, description, id, selectedDateId }) => {
    const dispatch = useEventsDispatch();
    const [editMode, toggleEditMode] = useToggle(false);

    const handleSubmit = (formData) => {
        dispatch(updateEvent(selectedDateId, id, formData));
        toggleEditMode();
    };

    const eventItem = (
        <EventItem
            title={title}
            description={description}
            deleteEvent={() => dispatch(deleteEvent(selectedDateId, id))}
            toggleEditMode={toggleEditMode}
        />
    );
    const editEventForm = (
        <Form
            onCancel={toggleEditMode}
            onSubmit={handleSubmit}
            title={title}
            description={description}
        />
    );

    return (
        <Toggleable
            showSecondaryComponent={editMode}
            initialComponent={eventItem}
            secondaryComponent={editEventForm}
        />
    );
};

ToggleableEventItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    selectedDateId: PropTypes.string,
};

export default ToggleableEventItem;

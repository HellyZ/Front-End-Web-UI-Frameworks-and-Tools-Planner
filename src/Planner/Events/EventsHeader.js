import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { useEventsDispatch } from "js/contexts/EventsContext";
import { addEvent } from "js/actions";
import { useToggle } from "js/helpers";
import SectionHeader from "components/SectionHeader";
import Toggleable from "components/Toggleable";
import Form from "components/Form";
import Button from "components/Button";
import s from "./styles.module.css";

const EventsHeader = ({ selectedDate }) => {
    const dispatch = useEventsDispatch();
    const [showForm, toggle] = useToggle(false);
    const selectedDateId = selectedDate.toDateString();

    const handleSubmit = (formData) => {
        dispatch(addEvent(selectedDateId, formData));
        toggle();
    };

    const form = <Form onCancel={toggle} onSubmit={handleSubmit} />;
    const addEventBtn = (
        <Button onClick={toggle} type="primary">
            + Add Event
        </Button>
    );

    return (
        <SectionHeader
            heading={`Events for ${format(selectedDate, "ddd MMM Do, YYYY")}`}
            className={s.eventsHeader}
        >
            <Toggleable
                showSecondaryComponent={showForm}
                initialComponent={addEventBtn}
                secondaryComponent={form}
            />
        </SectionHeader>
    );
};

EventsHeader.propTypes = {
    selectedDate: PropTypes.object,
};

export default EventsHeader;

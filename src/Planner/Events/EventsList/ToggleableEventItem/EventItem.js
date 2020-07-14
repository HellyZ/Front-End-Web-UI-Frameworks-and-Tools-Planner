import React from "react";
import PropTypes from "prop-types";
import Button, { ButtonGroup } from "components/Button";
import s from "./styles.module.css";

const EventItem = ({ title, description, deleteEvent, toggleEditMode }) => (
    <div className={s.eventItem}>
        <div className={s.eventItemBody}>
            <h3 className={s.eventTitle}>{title}</h3>
            {description && <p className={s.eventDescription}>{description}</p>}
        </div>

        <ButtonGroup>
            <Button onClick={toggleEditMode} type="primary">
                Edit
            </Button>
            <Button onClick={deleteEvent}>Delete</Button>
        </ButtonGroup>
    </div>
);

EventItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    deleteEvent: PropTypes.func.isRequired,
    toggleEditMode: PropTypes.func.isRequired,
};

export default EventItem;

import React, { useState } from "react";
import PropTypes from "prop-types";
import Alert from "../Alert";
import { InputButton, ButtonGroup } from "../Button";
import s from "./styles.module.css";

const Form = ({ title, description, onSubmit, onCancel }) => {
    const [values, setValues] = useState({
        title: title || "",
        description: description || "",
        error: "",
    });
    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setValues({ ...values, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, description } = values;

        if (title === "") {
            setValues({ ...values, error: "Event needs a title." });
        } else {
            onSubmit({ title, description });
        }
    };

    return (
        <>
            {values.error && <Alert type="error">{values.error}</Alert>}
            <form className={s.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    autoComplete="off"
                    placeholder="What are you up to?"
                    value={values.title}
                    className={s.title}
                    onChange={handleFormChange}
                />
                <textarea
                    name="description"
                    placeholder="More details..."
                    value={values.description}
                    className={s.description}
                    onChange={handleFormChange}
                />

                <ButtonGroup>
                    <InputButton
                        onClick={handleSubmit}
                        type="submit"
                        buttonType="primary"
                    >
                        {title ? "Update" : "Submit"}
                    </InputButton>
                    <InputButton onClick={onCancel} type="button">
                        Cancel
                    </InputButton>
                </ButtonGroup>
            </form>
        </>
    );
};

Form.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default Form;

import React from "react";
import cx from "classnames";
import s from "./styles.module.css";

export const ButtonGroup = ({ children }) => (
    <div className={s.buttonGroup}>{children}</div>
);

export const InputButton = ({ type, buttonType, children, onClick }) => (
    <input
        className={cx(s.button, s[buttonType])}
        type={type}
        value={children}
        onClick={onClick}
    />
);

const Button = ({ type, children, onClick }) => (
    <button className={cx(s.button, s[type])} onClick={onClick}>
        {children}
    </button>
);

export default Button;

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./styles.module.css";

const Alert = ({ type, children }) => (
    <div className={cx(s.alert, s[type])}>{children}</div>
);

Alert.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
};

export default Alert;

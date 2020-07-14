import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./styles.module.css";

const Cell = ({ style, className, children, onClick }) => (
    <div
        style={{ ...style }}
        className={cx(s.cell, className)}
        onClick={onClick}
    >
        {children}
    </div>
);

Cell.propTypes = {
    styles: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
};

export default Cell;

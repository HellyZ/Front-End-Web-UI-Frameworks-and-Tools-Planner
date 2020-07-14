import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./styles.module.css";

const SectionHeader = ({ heading, className, children }) => (
    <header className={cx(s.sectionHeader, className)}>
        {heading && <h2 className={s.sectionTitle}>{heading}</h2>}
        {children}
    </header>
);

SectionHeader.propTypes = {
    heading: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default SectionHeader;

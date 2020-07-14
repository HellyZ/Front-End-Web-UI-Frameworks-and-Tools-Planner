import PropTypes from "prop-types";

const Toggleable = ({
    showSecondaryComponent,
    initialComponent,
    secondaryComponent,
}) => (showSecondaryComponent ? secondaryComponent : initialComponent);

Toggleable.propTypes = {
    showSecondaryComponent: PropTypes.bool,
    initialComponent: PropTypes.node,
    secondaryComponent: PropTypes.node,
};

export default Toggleable;

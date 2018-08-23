import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

/**
 * Creates a component Button that can be reuse by any container.
 * @param props, I use props and give a suffix to props for each props for each element ('firstname', 'lastname')
 * so it is easier (to see) if we have a lot
 * more props we want to pass in for later.
 * @returns {*}
 * @constructor
 */
export const Button = (props) => {

    let className = 'default';

    //if you specify several props primary secondary and flat as true, it will go through this order,
    //primary < secondary < flat, for ex: primary's will be overwritten by secondary's style.
    if (props.primary) {
        className = 'primary';
    }

    if (props.secondary) {
        className = 'secondary';
    }

    if (props.flat) {
        className = 'flat';
    }

    return (
        <button
            className={className}
            disabled={props.disabled}
        >
            {props.label}
        </button>
    );
};

//Make sure that all prop sent in complies to the proptypes we want.
Button.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    flat: PropTypes.bool,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};


export default Button;
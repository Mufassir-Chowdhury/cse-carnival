import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = ({ text }) => {
    return (
        <button className="bg-navbar-button-hover shadow-md shadow-navbar-button text-navbar-link px-4 py-1 rounded-md">
            {text}
        </button>
    );
};

const SecondaryButton = ({ text }) => {
    return (
        <button className="bg-navbar shadow-md shadow-navbar text-navbar-link px-4 py-1 rounded-md">
            {text}
        </button>
    );
};

export { PrimaryButton, SecondaryButton };

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
};
SecondaryButton.propTypes = {
    text: PropTypes.string.isRequired,
};

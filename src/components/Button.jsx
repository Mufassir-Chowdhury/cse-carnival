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

const BigButton = ({ text }) => {
    return (
        <button className="bg-navbar-button-hover shadow-md shadow-navbar-button text-3xl text-navbar-link px-10 py-3 rounded-xl">
            {text}
        </button>
    );
};

export { PrimaryButton, SecondaryButton, BigButton };

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
};
SecondaryButton.propTypes = {
    text: PropTypes.string.isRequired,
};

BigButton.propTypes = {
    text: PropTypes.string.isRequired,
};

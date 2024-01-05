import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({link}) => {
    return (
        <div className="container mx-auto mt-20 px-20 pt-8 z-10">
            <div className="flex justify-center h-80">
                <img src={link} alt="banner" className="" />
            </div>
        </div>
    );
};

export default Banner;

Banner.propTypes = {
    link : PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({link}) => {
    return (
        <div className="mt-20 py-8 z-10 flex justify-center">
            <div className="flex justify-center sm:h-80 aspect-video">
                <img src={link} alt="banner" className="" />
            </div>
        </div>
    );
};

export default Banner;

Banner.propTypes = {
    link : PropTypes.string.isRequired,
};

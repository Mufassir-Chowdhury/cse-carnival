import React from "react";
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

const QuickDetails = ({ className, description  }) => {
    return (
        <div className={`h-11 px-5 py-2.5 bg-opacity-10 rounded-3xl border border-orange-600 border-opacity-50 backdrop-blur justify-start items-center gap-5 inline-flex ${className} `}>
            <div className="text-indigo-950 text-lg font-bold font-['Merriweather']">{description .title}:</div>
            <div className="text-indigo-950 text-lg font-semibold">{description .value}</div>
        </div>
    );
};

QuickDetails.propTypes = {
    className: PropTypes.string,
    description : PropTypes.object.isRequired,
};

const Details = ({ description }) => {
    return (
        <div className="px-5 py-2.5 bg-amber-100 bg-opacity-10 rounded-3xl border border-amber-100 border-opacity-50 backdrop-blur-xl flex-col justify-center items-start gap-[15px] inline-flex">
            <div className="text-indigo-950 text-2xl font-medium">{description.title}</div>
            <div className="text-indigo-950 text-[17px] font-normal">{parse(description.value)}</div>
        </div>
    );
};

Details.propTypes = {
    description : PropTypes.object.isRequired,
};

export { QuickDetails, Details }
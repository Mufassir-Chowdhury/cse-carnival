import React from "react";
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

const QuickDetails = ({ className, description }) => {
    return (
        <div className={`font-merriweather px-3 md:px-5 py-2.5 bg-opacity-10 rounded-3xl border border-orange-600 border-opacity-50 backdrop-blur justify-start items-center gap-3 md:gap-5 inline-flex ${className} `}>
            <div className="text-indigo-950 font-bold">{description.title}:</div>
            <div className="text-indigo-950 font-semibold">{parse(description.value)}</div>
        </div>
    );
};

QuickDetails.propTypes = {
    className: PropTypes.string,
    description: PropTypes.object.isRequired,
};

const Details = ({ description }) => {
    return (
        <div className="px-5 py-2.5 font-lato bg-amber-100 bg-opacity-10 rounded-3xl border border-amber-100 border-opacity-50 backdrop-blur-xl flex-col justify-center items-start gap-[15px] inline-flex">
            <div className="text-indigo-950 text-3xl font-semibold">{description.title}</div>
            <div className="text-indigo-950 text-[17px] text-justify font-medium">{parse(description.value)}</div>
        </div>
    );
};

const DetailsWithoutTitle = ({ description }) => {
    return (
        <div className="px-5 py-2.5 font-lato bg-amber-100 bg-opacity-10 rounded-3xl border border-amber-100 border-opacity-50 backdrop-blur-xl flex-col justify-center items-start gap-[15px] inline-flex">
            {/* <div className="text-indigo-950 text-3xl font-semibold">{description.title}</div> */}
            <div className="text-indigo-950 text-[17px] text-justify font-medium">{parse(description.value)}</div>
        </div>
    );
};

DetailsWithoutTitle.propTypes = {
    description: PropTypes.object.isRequired,
};

Details.propTypes = {
    description: PropTypes.object.isRequired,
};

const TitleWithList = ({ title, items }) => {
    return (
        <div className="px-5 py-2.5 font-lato bg-amber-100 bg-opacity-10 rounded-3xl border border-amber-100 border-opacity-50 backdrop-blur-xl flex-col justify-center items-start gap-[15px] inline-flex">
            <div className="text-indigo-950 text-3xl font-semibold">{title}</div>
            <ul className="text-indigo-950 text-[17px] font-medium list-disc pl-5">
                {items.map((item, index) => (
                    <li key={index}>{parse(item)}</li>
                ))}
            </ul>
        </div>
    );
};

TitleWithList.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { QuickDetails, Details, DetailsWithoutTitle, TitleWithList };

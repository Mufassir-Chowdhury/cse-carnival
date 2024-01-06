import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "./Button";
import PropTypes from 'prop-types';

const EventItems = ({ event }) => {
    return (
        <div className={`flex flex-col lg:flex-row ${event.bg} ${event.border} lg:odd:justify-between lg:odd:flex-row-reverse items-center mb-8 gap-10 border p-5 rounded-2xl`}>
            <div className="flex-shrink-0">
                <img src={event.image} alt="Event 1" className="" />
            </div>
            <div className="text-navbar">
                <h3 className="text-2xl font-bold md:mb-2 ">{event.name}</h3>
                <p className="md:mb-2">{event.description}</p>
                <p className="font-bold ">{event.shortDescription[1].title} : <span className="">{event.shortDescription[1].value}</span> </p>
                <p className="font-bold ">{event.shortDescription[2].title} : <span className="">{event.shortDescription[2].value}</span> </p>
                <p className="font-bold ">{event.shortDescription[3].title} : <span className="">{event.shortDescription[3].value}</span> </p>
                <p className="font-bold ">{event.shortDescription[4].title} : <span className="">{event.shortDescription[4].value}</span> </p>
                <div className="flex mt-4 space-x-6 w-full justify-center lg:justify-start">
                    {event.registration && (
                        <Link to={event.registration}>
                            <PrimaryButton text="Register" />
                        </Link>
                    )}
                    {event.link && (
                        <Link to={event.link}>
                            <SecondaryButton text="View Event" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

const SponsorItem = ({ sponsor }) => {
    return (
        <div className={`flex odd:justify-between odd:flex-row-reverse items-center mb-8 gap-10 bg-sponsor-body p-4 rounded-2xl`}>
            <div className="flex-shrink-0">
                <img src={sponsor.image} alt="sponsor 1" className="h-40" />
            </div>
            <div className="text-navbar">
                <h3 className="text-2xl font-bold md:mb-2 ">{sponsor.name}</h3>
                <p className="md:mb-2">{sponsor.description}</p>
            </div>
        </div>
    );
}


const SponsorList = ({ sponsor }) => {
    return (
        <div className={`flex odd:justify-between odd:flex-row-reverse items-center mb-8 gap-10 bg-sponsor-body p-4 rounded-2xl`}>
            <div className="flex-shrink-0">
                <img src={sponsor.image} alt="sponsor 1" className="h-40" />
            </div>
            <div className="text-navbar">
                <h3 className="text-2xl font-bold md:mb-2 ">{sponsor.name}</h3>
                <p className="md:mb-2">{sponsor.description}</p>
            </div>
        </div>
    );
    // return (
    //     // <div></div>
    //     <img src={sponsor.image} alt="Sponsor 1" className="w-32 h-32" />
    // )
}

EventItems.propTypes = {
    event: PropTypes.object.isRequired,
};
SponsorList.propTypes = {
    sponsor: PropTypes.object.isRequired,
};

SponsorItem.propTypes = {
    sponsor: PropTypes.object.isRequired,
};

export { EventItems, SponsorList, SponsorItem };
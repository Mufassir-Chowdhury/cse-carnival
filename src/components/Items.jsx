import React from "react";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import { PrimaryButton, SecondaryButton } from "./Button";
import PropTypes from 'prop-types';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const EventItems = ({ event }) => {
    return (
        <div className={`flex flex-col md:flex-row ${event.bg} ${event.border} md:odd:justify-between md:odd:flex-row-reverse items-center mb-8 gap-10 border p-5 rounded-2xl`}>
            <div className="flex-shrink-0">
                <img src={event.image} alt="Event 1" className="h-64 rounded-3xl" />
            </div>
            <div className="text-navbar">
                <h3 className="text-3xl font-bold md:mb-3 ">{event.name}</h3>
                {/* <p className="md:mb-2">{event.description}</p> */}

                <p className="md:mb-2">{parse(event.description)}</p>

                {event.frontDescription.map((item, index) => (
                    <p key={index} className="font-bold">
                        {item.title} : <span className="">{item.value}</span>
                    </p>
                ))}

                <div className="flex mt-4 space-x-6 w-full justify-center md:justify-start">
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

const ContactItems = ({ contact }) => {
    return (
        <div className={`flex flex-col lg:flex-row ${contact.bg} ${contact.border} lg:odd:flex-row-reverse items-center mb-8 gap-10 border p-5 px-10 rounded-2xl`}>
            <div className="flex-shrink-0 flex-1">
                <img src={contact.image} alt={`contact ${contact.id}`} className="h-64 rounded-3xl" />
            </div>
            <div className="text-navbar font-semibold flex-1">
                <h3 className="text-2xl font-bold mb-4">{contact.name}</h3>
                <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 '>
                    {contact.contact.map((item) => (
                        <div className="flex flex-col items-start space-y-3">

                            {/* <p className="text-sm font-semibold">Name:</p> */}
                            <p className="text-lg">{item.name}</p>
                            <a className="text-sm hover:underline" href={`mailto:${item.gmail}`}>
                                {item.gmail}
                            </a>

                            <p className="text-sm">{item.phone}</p>

                        </div>
                    ))}
                    {/* Display Name, Gmail, and Contact Number in a single column */}
                </div>

            </div>
        </div>
    );
};


const SponsorItem = ({ sponsor }) => {
    return (
        <div className={`flex flex-col md:flex-row md:odd:justify-between md:odd:flex-row-reverse items-center mb-8 gap-10 bg-sponsor-body p-4 rounded-2xl`}>
            <div className="flex-shrink-0">
                <img src={sponsor.image} alt="sponsor 1" className="h-40" />
            </div>
            <div className="text-navbar">
                <h3 className="text-2xl font-bold md:mb-2 ">{sponsor.name}</h3>
                <p className="md:mb-2 whitespace-pre-line">{sponsor.description}</p>
                {/* Display LinkedIn ID if available */}
                {sponsor.linkedin && (
                    <a
                        href={sponsor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-500" />
                    </a>

                )}
                {sponsor.facebook && (
                    <a
                        href={sponsor.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-blue-500" />
                    </a>
                )}
            </div>
        </div>
    );
}


const SponsorList = ({ sponsor }) => {
    return (
        <img src={sponsor.image} alt="sponsor 1" className="h-20 md:h-32 lg:h-40" />

    );
    // return (
    //     // <div></div>
    //     <img src={sponsor.image} alt="Sponsor 1" className="w-32 h-32" />
    // )
}

EventItems.propTypes = {
    event: PropTypes.object.isRequired,
};

ContactItems.propTypes = {
    contact: PropTypes.object.isRequired,
};
SponsorList.propTypes = {
    sponsor: PropTypes.object.isRequired,
};

SponsorItem.propTypes = {
    sponsor: PropTypes.object.isRequired,
};



export { EventItems, ContactItems, SponsorList, SponsorItem };
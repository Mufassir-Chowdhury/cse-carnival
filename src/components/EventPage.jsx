import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { IUPCLeft, IUPCRight } from '../data/vector';
import { events } from '../data/data';
import { Link, useLocation } from 'react-router-dom';
import EventTitle from '../components/EventTitle';
import { PrimaryButton } from './Button';
import Banner from './Banner';
import SponsoredBy from './SponsoredBy';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const VectorGraphics = () => {
    return (
        <div className='z-0 relative'>
            <IUPCLeft />
            <IUPCRight />
        </div>
    )
};

const EventPage = ({ id, children }) => {
    const location = useLocation();
    const message = location.state?.successMessage;
    useEffect(() => {
        if (message) {
          toast.success(message, {
            position: toast.POSITION.TOP_CENTER
          });
        }
      }, [message]);
    console.log(message, "message")
    return (
        <div>

            <VectorGraphics />
            <div className='text-navbar z-10 relative px-4   py-10 pb-0 lg:px-28'>
                <Banner />
                <EventTitle title={events[id].name} />
                <ToastContainer className="mt-20"/>
                {children}
                <Link to={events[id].registration}>
                    <div className='py-10 w-full flex justify-center'>
                        <PrimaryButton text='Register' />
                    </div>
                </Link>
                <SponsoredBy title={"Sponsored By"} list={""} sponsors={events[id].sponsors} />
            </div>
        </div>
    );
};

const EventRegistrationPage = ({ title, id, children }) => {
    return (
        <div>
            <VectorGraphics />
            <div className='text-navbar z-10 relative px-4   py-10 pb-0 lg:px-28'>
                <Banner />
                <EventTitle title={title} />
                <h2 className=" text-4xl font-bold md:my-6 py-5 md:mx-20  text-navbar-button text-center ">
                    Register
                </h2>
                {children}
                <SponsoredBy title={"Sponsored By"} list={""} sponsors={events[id].sponsors} />
            </div>
            </div>
    );
};

EventPage.propTypes = {
    // title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
EventRegistrationPage.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export { EventPage, EventRegistrationPage };
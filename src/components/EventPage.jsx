import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { IUPCLeft, IUPCRight } from '../data/vector';
import { events, organizers, poweredby } from '../data/data';
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
            console.log(message, "message")
        }
    }, [message]);
    return (
        <div>

            <VectorGraphics />
            <div className='text-navbar z-10 relative px-4   py-10 pb-0 lg:px-28'>
                <Banner />
                <EventTitle title={events[id].name} />
                <ToastContainer className=" mt-28 z-50" />
                {children}
                {events[id].selected_teams && (
                    <Link to={events[id].selected_teams}>
                        <div className='py-10 w-full flex justify-center font-lato'>
                            <PrimaryButton text='Selected Teams' />
                        </div>
                    </Link>
                )}
                {events[id].registration && (
                    <Link to={events[id].registration}>
                        <div className='py-10 w-full flex justify-center font-lato'>
                            <PrimaryButton text='Register Now' />
                        </div>
                    </Link>
                )}

                <SponsoredBy title={"Sponsored By"} list={""} sponsors={events[id].sponsors} />
                <div className="lg:mx-0 z-10 relative pb-0">
                    {/* <SponsoredBy title={"Powered By"} list={""} sponsors={poweredby} /> */}
                    <SponsoredBy title={"Organized By"} list={"list"} sponsors={organizers} />
                </div>
            </div>
        </div>
    );
};

// const EventPage = ({ id, children }) => {
//     const location = useLocation();
//     const message = location.state?.successMessage;
//     useEffect(() => {
//         if (message) {
//             toast.success(message, {
//                 position: toast.POSITION.TOP_CENTER
//             });
//             console.log(message, "message")
//         }
//     }, [message]);

//     return (
//         <div>
//             <VectorGraphics />
//             <div className='text-navbar z-10 relative px-4 py-10 pb-0 lg:px-28'>
//                 <Banner />
//                 <div className="flex justify-between w-full items-center px-6">
//                     {/* <div className='w-full flex justify-center'> */}
//                         <h2 className="w-auto text-3xl sm:text-4xl font-bold my-6 py-2 sm:py-5   text-navbar">{events[id].name}</h2>
//                     {/* </div> */}
//                     {/* <EventTitle title={events[id].name} /> */}
//                     <Link to={events[id].registration}>
//                         <PrimaryButton text='Register' />
//                     </Link>
//                 </div>
//                 <ToastContainer className="" />
//                 {children}
//                 <SponsoredBy title={"Sponsored By"} list={""} sponsors={events[id].sponsors} />
//             </div>
//         </div>
//     );
// };


const EventRegistrationPage = ({ title, id, children }) => {
    return (
        <div>
            <VectorGraphics />
            <div className='text-navbar z-10 relative px-4   py-10 pb-0 lg:px-28'>
                <Banner />
                <EventTitle title={`${title} -  Registration Form`} />
                <h2 className=" text-4xl font-bold md:my-1 py-5 md:mx-20  text-navbar-button text-center ">
                    {/* {`${title} Registration Form`}   */}
                </h2>
                {children}
                <SponsoredBy title={"Sponsored By"} list={""} sponsors={events[id].sponsors} />
                <div className="lg:mx-0 z-10 relative ">
                    {/* <SponsoredBy title={"Powered By"} list={""} sponsors={poweredby} /> */}
                    <SponsoredBy title={"Organized By"} list={"list"} sponsors={organizers} />
                </div>
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
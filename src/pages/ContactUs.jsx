// BodySection.js

import React from 'react';
import { ContactItems } from '../components/Items';
import { HomeLeft, HomeLeft2, HomeRight } from '../data/vector';
import { events, organizers, poweredby } from '../data/data';
import MapSection from '../components/MapSection';
import VpGs from '../components/VpGs';
import SponsoredBy from '../components/SponsoredBy';



const ContactUs = () => {
    return (
        <div className=''>
            <div className='z-0 relative'>
                <HomeLeft />
                <HomeLeft2 />
                <HomeRight />
                {/* <HomeRight2 /> */}

            </div>
            <div className='z-10 relative px-4   py-10 pb-0 xl:px-28'>
                {/* <Carousel /> */}
                <MapSection />
                <div className="container mx-auto pb-8 pt-4">
                    <h2 className="text-3xl font-bold text-center my-10 text-title" id="hotels">Hotels</h2>
                    <p>The following are hotels within a 10-15 minute drive to the venue. Please note that this is not a
                    comprehensive list, as there may be more nearby. We cannot recommend any particular hotel or
                    place to stay over another—this is simply a general guide of possible options for your stay.</p>
                    <div className="flex flex-col justify-center my-2">
                        <div className="flex align-baseline text-left my-2">
                            <h2 className="text-lg font-bold text-title">Hotel Grand Akhter</h2>
                            <a href="https://maps.app.goo.gl/LtbfyjiU2kHf6tC57" className='block underline mx-6'>Google Maps</a>
                        </div>
                        <div className="flex align-baseline text-left my-2">
                            <h2 className="text-lg font-bold text-title">Noorjahan Grand</h2>
                            <a href="https://maps.app.goo.gl/JDUGmch4jT6bqKh58" className='block underline mx-6'>Google Maps</a>
                        </div>
                        <div className="flex align-baseline text-left my-2">
                            <h2 className="text-lg font-bold text-title">La Vista Hotel</h2>
                            <a href="https://maps.app.goo.gl/nuCNf7UYfFLzEAks7" className='block underline mx-6'>Google Maps</a>
                        </div>
                        <div className="flex align-baseline text-left my-2">
                            <h2 className="text-lg font-bold text-title">Holy Inn</h2>
                            <a href="https://maps.app.goo.gl/ecpdTSPxJnmq6RqS6" className='block underline mx-6'>Google Maps</a>
                        </div>

                        <div className='my-2 font-semibold'>In case of emergencies: </div>
                        Nearest Hospital:
                        <div className="flex align-baseline text-left my-2">
                            <h2 className="text-lg font-bold text-title">Mount Adora Hospital</h2>
                            <a href="https://maps.app.goo.gl/ZUR1mgDeYU5iQZd39" className='block underline mx-6'>Google Maps</a>
                        </div>
                    </div>   

                </div>
                <div className="container mx-auto pb-8 pt-4">
                    <h2 className="text-3xl font-bold text-center my-10 text-title">For Contact</h2>

                    {Object.entries(events).map(([key, value]) => (
                        <ContactItems key={key} contact={value} />
                    ))}

                </div>
                <VpGs />
                <div className="lg:mx-0 z-10 relative">
                    <SponsoredBy title={"Powered By"} list={""} sponsors={poweredby} />
                    <SponsoredBy title={"Organized By"} list={"list"} sponsors={organizers} />
                </div>
                {/* <Events /> */}
                {/* <AboutUs /> */}
                {/* <Words /> */}
                {/* <SponsoredBy title={"Sponsored By"} sponsors={sponsors} /> */}
            </div>
        </div>
    );
};

export default ContactUs;

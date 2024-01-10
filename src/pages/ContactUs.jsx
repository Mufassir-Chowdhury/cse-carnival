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
                    <h2 className="text-3xl font-bold text-center mb-6 text-title">For Contact</h2>

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

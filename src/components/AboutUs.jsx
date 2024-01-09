// AboutUs.js

import React from 'react';
import SponsoredBy from './SponsoredBy';
import { aboutus } from '../data/data';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-10 lg:px-20 pb-8 pt-8 bg-aboutus-body rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-title font-merriweather">ABOUT US</h2>

      <div className='w-full flex justify-evenly flex-col md:flex-row gap-4'>
        {/* <SponsoredBy title={""} list={""} sponsors={aboutus} /> */}
        {aboutus.map((quote) => (
          <div key={quote.image} className="flex-shrink-0 px-3 w-full md:w-1/3" >
            <div className="bg-card-body p-4 rounded-lg w-full ">
              <div className='w-full h-40 flex flex-col justify-center py-2'>
                <img src={quote.image} alt={quote.name} className="h-full mx-auto mb-4 " />

              </div>
              <div className=' px-2 overflow-y-auto text-navbar  whitespace-pre-line font-inter' style={{ height: '18rem' }}>
                {quote.description}
              </div>
              {/* <h2 className="text-lg font-semibold mb-2 text-navbar-button">{quote.name}</h2>
              <p className="text-navbar font-semibold">{quote.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

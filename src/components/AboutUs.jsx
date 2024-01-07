// AboutUs.js

import React from 'react';
import SponsoredBy from './SponsoredBy';
import { aboutus } from '../data/data';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-10 lg:px-20 pb-8 pt-8 bg-aboutus-body rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-title">ABOUT US</h2>

      <div>
      {/* <SponsoredBy title={""} list={""} sponsors={aboutus} /> */}
        
      </div>
    </div>
  );
};

export default AboutUs;

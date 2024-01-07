// Home.js

import React from 'react';
import Events from '../components/Events';
import AboutUs from '../components/AboutUs';
import SponsoredBy from '../components/SponsoredBy';
import { poweredby } from '../data/data';
import { HomeLeft, HomeLeft2, HomeRight, HomeRight2 } from '../data/vector';
import Words from '../components/Words';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div className=''>
      <div className='z-0 relative'>
        <HomeLeft />
        <HomeLeft2 />
        <HomeRight />
        <HomeRight2 />

      </div>
      <div className='z-10 relative px-4   py-10 pb-0 lg:px-28'>
        <Carousel />
        <Events />
        <AboutUs />
        <Words />
        {/* <SponsoredBy title={"Sponsored By"} sponsors={sponsors} /> */}
      </div>
    </div>
  );
};

export default Home;
// Home.js

import React from 'react';
import Events from '../components/Events';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import SponsoredBy from '../components/SponsoredBy';
import { sponsors } from '../data/data';
import { HomeLeft, HomeLeft2, HomeRight, HomeRight2 } from '../data/vector';
import Words from '../components/Words';

const Home = () => {
  return (
    <div className=''>
      <div className='z-0 relative'>
        <HomeLeft />
        <HomeLeft2 />
        <HomeRight />
        <HomeRight2 />

      </div>
      <div className='z-10 relative px-4 lg:px-28'>
        <Banner link="/image/banner/bannerHome.png" />
        <Events />
        <AboutUs />
        <Words />
        <SponsoredBy sponsors={sponsors} />
      </div>
    </div>
  );
};

export default Home;
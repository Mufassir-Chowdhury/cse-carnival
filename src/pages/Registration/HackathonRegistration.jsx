import React from 'react';
import { PrimaryButton } from '../../components/Button';
import Banner from '../../components/Banner';
import SponsoredBy from '../../components/SponsoredBy';
import { events } from '../../data/data';
import { IUPCLeft, IUPCRight } from '../../data/vector';

const HackathonRegistration = () => {
  
  return (
    <div>
      <div className='z-0 relative'>
        <IUPCLeft />
        <IUPCRight />
      </div>
      <div className='text-navbar z-10 relative px-4 lg:px-28'>
        <Banner link="/image/banner/bannerHackathon.jpg" />
        <h2 className=" text-4xl font-bold md:my-6 py-5 md:mx-20  text-navbar-button text-center bg-navbar-button bg-opacity-10 rounded-2xl border border-navbar-button border-opacity-30">Inter University Programming Contest</h2>

        FORM

        <div className='py-10 w-full flex justify-center'>
          <PrimaryButton text='Register' />
        </div>
        <SponsoredBy list={"list"} sponsors={events['hackathon'].sponsors} />
      </div>
    </div>
  );
};

export default HackathonRegistration;

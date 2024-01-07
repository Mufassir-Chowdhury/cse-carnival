// IUPC.jsx
import React from 'react';
import Tab from '../components/Tab';
import { PrimaryButton } from '../components/Button';
import Banner from '../components/Banner';
import SponsoredBy from '../components/SponsoredBy';
import { events } from '../data/data';
import { IUPCLeft, IUPCRight } from '../data/vector';
import { Details, QuickDetails } from '../components/Details';
import { Link } from 'react-router-dom';
import EventTitle from '../components/EventTitle';

const IUPC = () => {
  const description = (
    <div className='flex flex-col px-4 gap-10'>
      <div className='flex flex-col gap-2 '>
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['iupc'].shortDescription[0]} />
        <QuickDetails className="bg-slate-500 border-slate-500" description={events['iupc'].shortDescription[1]} />
        <QuickDetails className="bg-amber-100 border-amber-100" description={events['iupc'].shortDescription[2]} />
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['iupc'].shortDescription[3]} />
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['iupc'].shortDescription[4]} />
      </div>
      {events['iupc'].longDescription.map((item) => (
        <Details key={item.title} description={item} />
      ))}
    </div>
  );
  const announcment = (
    <div>
      Announcements
    </div>
  );
  const download = (
    <div>
      Download Link
    </div>
  )
  return (
    <div>
      <div className='z-0 relative'>
        <IUPCLeft />
        <IUPCRight />
      </div>
      <div className='text-navbar z-10 relative px-4   py-10 lg:px-28'>
        <Banner link="/image/banner/bannerHackathon.jpg" />
        <EventTitle title="Inter University Programming Contest" />
        <Tab child1={description} child2={announcment} child3={download} />
        <Link to={events['iupc'].registration}>
          <div className='py-10 w-full flex justify-center'>
            <PrimaryButton text='Register' />
          </div>
        </Link>
        <SponsoredBy list={""} sponsors={events['iupc'].sponsors} />
      </div>
    </div>
  );
};

export default IUPC;

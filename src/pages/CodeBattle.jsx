import React from 'react';
import Tab from '../components/Tab';
import { PrimaryButton } from '../components/Button';
import Banner from '../components/Banner';
import SponsoredBy from '../components/SponsoredBy';
import { events } from '../data/data';
import { Details, QuickDetails } from '../components/Details';
import { DLSprintLeft, DLSprintRight } from '../data/vector';

const CodeBattle = () => {
  const description = (
    <div className='flex flex-col px-4 gap-10'>
      <div className='flex flex-col gap-2 '>
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['codebattle'].shortDescription[0]}/>
        <QuickDetails className="bg-slate-500 border-slate-500" description={events['codebattle'].shortDescription[1]}/>
        <QuickDetails className="bg-amber-100 border-amber-100" description={events['codebattle'].shortDescription[2]}/>
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['codebattle'].shortDescription[3]}/>
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['codebattle'].shortDescription[4]}/>
      </div>
      {events['codebattle'].longDescription.map((item) => (
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
    <div className=''>
      <div className='z-0 relative'>
        <DLSprintLeft />
        <DLSprintRight />
      </div>
      <div className='text-navbar z-10 relative px-4 lg:px-28'>
        <Banner link="/image/banner/bannerCodeBattle.jpg" />
        <h2 className="text-4xl font-bold md:my-6 py-5 md:mx-64  text-navbar-button text-center bg-navbar-button bg-opacity-10 rounded-2xl border border-navbar-button border-opacity-30">Code Battle</h2>
        <Tab child1={description} child2={announcment} child3={download} />
        <div className='py-10 w-full flex justify-center'>
          <PrimaryButton text='Register' />
        </div>
        <SponsoredBy list={"list"} sponsors={events['codebattle'].sponsors} />
      </div>
    </div>
  );
};

export default CodeBattle;

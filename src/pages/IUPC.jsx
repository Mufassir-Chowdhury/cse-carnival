// IUPC.jsx
import React from 'react';
import Tab from '../components/Tab';
import { events } from '../data/data';
import { Details, QuickDetails } from '../components/Details';
import { EventPage } from '../components/EventPage';

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
    <EventPage title="Inter University Programming Contest" id="iupc" >
      <Tab child1={description} child2={announcment} child3={download} />
    </EventPage>
  );
};

export default IUPC;

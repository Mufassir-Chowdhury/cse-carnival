// IUPC.jsx
import React from 'react';
import Tab from '../components/Tab';
import { events } from '../data/data';
import { Details, QuickDetails, TitleWithList } from '../components/Details';
import { EventPage } from '../components/EventPage';

const IUPC = () => {
  const description = (
    <div className='flex flex-col px-4 gap-6 '>
      <div className='flex flex-col gap-2 '>
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['iupc'].shortDescription[0]} />
        <QuickDetails className="bg-slate-500 border-slate-500" description={events['iupc'].shortDescription[1]} />
        <QuickDetails className="bg-amber-100 border-amber-100" description={events['iupc'].shortDescription[2]} />
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['iupc'].shortDescription[3]} />
        <QuickDetails className="bg-slate-500 border-slate-500" description={events['iupc'].shortDescription[4]} />
        <QuickDetails className="bg-amber-100 border-amber-100" description={events['iupc'].shortDescription[5]} />
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['iupc'].shortDescription[6]} />
      </div>
      {events['iupc'].longDescription.map((item) => (
        <Details key={item.title} description={item} />
      ))}
      <TitleWithList
        title="Prizes"
        items={[
          "1st position - 50K BDT",
          "2nd position - 30K BDT",
          "3rd position - 20K BDT",
          "4-5th position - 8K BDT",
          "6-10th position - 6K BDT",
        ]}
      />
      <Details description={{
        title: "Total Prize Pool - 146K BDT",
        value: ""}} />

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
    <EventPage id="iupc" >
      <Tab child1={description} child2={announcment} child3={download} />
    </EventPage>
  );
};

export default IUPC;

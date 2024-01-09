// IUPC.js

import React from 'react';
import Tab from '../components/Tab';
import { events } from '../data/data';
import { EventPage } from '../components/EventPage';
import { renderLongDescriptions, renderShortDescriptions, renderTitleWithList } from '../components/Render';
import { Details } from '../components/Details';

const IUPC = () => {
  const { shortDescription, longDescription } = events['iupc'];

  const mainDescription = (
    <div className='flex flex-col px-4 gap-6'>
      {renderShortDescriptions(shortDescription)}
      {renderLongDescriptions(longDescription)}
      {renderTitleWithList("🏆 Prizes", [
        "1st position - 50K BDT",
        "2nd position - 30K BDT",
        "3rd position - 20K BDT",
        "4-5th position - 8K BDT",
        "6-10th position - 6K BDT",
      ])}
      <Details description={{ title: "Total Prize Pool - 146K BDT", value: "" }} />
    </div>
  );
  const announcment = (
    <div className='py-20'>
      No Announcements Yet
    </div>
  );
  const download = (
    <div className='py-20'>
      Not Uploaded Yet
    </div>
  );

  return (
    <EventPage id="iupc">
      <Tab child1={mainDescription} child2={announcment} child3={download} />
    </EventPage>
  );
};

export default IUPC;

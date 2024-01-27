// IUPC.js

import React from 'react';
import Tab from '../components/Tab';
import { events } from '../data/data';
import { EventPage } from '../components/EventPage';
import { renderLongDescriptions, renderShortDescriptions, renderTitleWithList, renderDetailsWithoutTitle, renderDetails } from '../components/Render';
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
      {renderDetailsWithoutTitle({
        value: "Don’t miss out on this incredible opportunity to test your problem solving prowess. Like and follow our page for event updates and announcements."
      })}
      {renderDetails({
        title: "For queries, Contact:",
        value: `1. MD. Moksedur Rahman Sohan <br/>
        moksedur.rahman.sohan@gmail.com <br/>
        Phone no: 01980582626<br/>
        <br/>
        2. Kawchar Husain<br/>
        kawsarhn1@gmail.com<br/>
        Phone no: 01741874600<br/><br/>
        Let the sport of coding begin!🚀`,
      })}
    </div>
  );
  const announcement = (
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
      <Tab child1={mainDescription} child2={announcement} child3={download} />
    </EventPage>
  );
};

export default IUPC;

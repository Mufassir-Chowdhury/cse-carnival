// Hackathon.js

import React from 'react';
import Tab from '../components/Tab';
import { events } from '../data/data';
import { EventPage } from '../components/EventPage';
import { renderLongDescriptions, renderShortDescriptions, renderDetailsWithoutTitle, renderTitleWithList } from '../components/Render';

const Hackathon = () => {
  const { shortDescription, longDescription } = events['hackathon'];

  const mainDescription = (
    <div className='flex flex-col px-4 gap-10'>
      {renderShortDescriptions(shortDescription)}
      {renderLongDescriptions(longDescription)}
      {renderDetailsWithoutTitle({
        value: "Are you prepared to let your imagination and coding abilities run wild? Do you want to apply creative thinking and development skills to tackle problems in the real world? Would you like to connect with like-minded peers and professionals in the field? If so, welcome to the <b>Hackathon</b>, one of the signature events of <b>SUST CSE Carnival-2024</b>.🚀💥",
      })}
      {renderDetailsWithoutTitle({
        value: "The hackathon will be based on <b> TBA </b>.",
      })}
      {renderDetails({
        title: "Participation Details",
        value: "The hackathon will be a <b>24 hours </b> long event. It will be an onsite event held on the premises of Institute of Information and Communication Technology, SUST from <b>16 February to 17 February</b>. It will be heavily focused on development and technology, so participants brush up your coding skills.👊🔥",
      })}
      {renderTitleWithList('🏆 Prizes', [
        "🏆 Champion - 40K BDT",
        "🥈 1st Runners up - 20K BDT",
        "🥉 2nd Runners up - 15K BDT",
        "🏅 SUST Rising Team - 8K BDT",
      ])}
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
  );

  return (
    <EventPage id="hackathon">
      <Tab child1={mainDescription} child2={announcment} child3={download} />
    </EventPage>
  );
};

export default Hackathon;

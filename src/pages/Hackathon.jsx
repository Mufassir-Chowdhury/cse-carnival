// Hackathon.js

import React from 'react';
import Tab from '../components/Tab';
import { events } from '../data/data';
import { EventPage } from '../components/EventPage';
import { renderLongDescriptions, renderShortDescriptions, renderDetailsWithoutTitle, renderTitleWithList, renderDetails } from '../components/Render';

const Hackathon = () => {
  const { shortDescription, longDescription } = events['hackathon'];

  const mainDescription = (
    <div className='flex flex-col px-4 gap-6'>
      {renderShortDescriptions(shortDescription)}
      {renderLongDescriptions(longDescription)}
      {renderDetailsWithoutTitle({
        value: "Are you prepared to let your imagination and coding abilities run wild? Do you want to apply creative thinking and development skills to tackle problems in the real world? Would you like to connect with like-minded peers and professionals in the field? If so, welcome to the <b>Hackathon</b>, one of the signature events of <b>SUST CSE Carnival-2024</b>.🚀💥",
      })}
      {renderDetailsWithoutTitle({
        value: "<b>This event invites innovative minds to develop solutions that push technological boundaries. Participants will create a functional product, considering the entire process from ideation to execution. They should demonstrate process understanding, optimize for efficiency, ensure scalability, and are expected to integrate frontier technologies.</b>",
      })}
      {renderDetailsWithoutTitle({
        value: "The hackathon will be based on <b> TBA </b>.",
      })}
      {renderDetails({
        title: "Participation Details",
        value: "The hackathon will be a <b>24 hour</b> long event. A preliminary round may be taken if required, to select 35 teams for the onsite event. The hackathon will be an onsite event held on the premises of Institute of Information and Technology, SUST from <b>16 February to 17 February.</b> It will be heavily focused on development and technology, so participants brush up your coding skills. 👊🔥",
      })}
      {renderTitleWithList('Team Requirements', [
        "Each team can contain at most 3 members. ",
        "All the participants must be currently pursuing undergraduate degrees. ",
        "Teams have to be formed by students of the same university.",
      ])}
      {renderTitleWithList('🏆 Prizes', [
        "🏆 Champion - 40,000 BDT",
        "🥈 1st Runners up - 20,000 BDT",
        "🥉 2nd Runners up - 15,000 BDT",
        "🏅 SUST Rising Team - 8,000 BDT",
      ])}

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
    <EventPage id="hackathon">
      <Tab child1={mainDescription} child2={announcment} child3={download} />
    </EventPage>
  );
};

export default Hackathon;

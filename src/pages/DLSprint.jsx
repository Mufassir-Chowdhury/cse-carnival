// DLSprint.js

import React from 'react';
import Tab from '../components/Tab';
import { events } from '../data/data';
import { EventPage } from '../components/EventPage';
import { renderLongDescriptions, renderShortDescriptions, renderDetailsWithoutTitle, renderTitleWithList, renderDetails } from '../components/Render';

const DLSprint = () => {
  const { shortDescription, longDescription } = events['dlsprint'];

  const mainDescription = (
    <div className='flex flex-col px-4 gap-6'>
      {renderShortDescriptions(shortDescription)}
      {renderLongDescriptions(longDescription)}
      {renderTitleWithList('📅 Important Dates', [
        "Competition Launch: TBA",
        "Submission Deadline: TBA",
        "Winners Announcement: TBA",
      ])}
      {renderTitleWithList('👩‍💻 How to Participate', [
        "Join Kaggle if you haven't already: TBA",
        "Access the competition page: TBA",
        "Download the dataset and immerse yourself in the challenges of Bangladesh road conditions for autonomous vehicles.",
        "Train your model, submit predictions, and witness your algorithm's prowess in real-world scenarios.",
      ])}
      {renderDetails({
        title: "🤝 Collaboration Encouraged",
        value: "Feel free to form teams and collaborate with fellow participants. Together, let's revolutionize the future of autonomous driving and contribute to the global AI community.",
      })}
      {renderDetails({
        title: "📢 Spread the Word",
        value: "Tag your AI-savvy friends, colleagues, and anyone passionate about the intersection of technology and transportation. Let's drive innovation forward and pave the way for safer and smarter roads!",
      })}
      {renderDetailsWithoutTitle({
        value: "🌟Let the coding, training, and collaboration accelerate the dawn of autonomous vehicle technology in Bangladesh!🚗👁️💡",
      })}
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
    <EventPage id="dlsprint" >
      <Tab child1={mainDescription} child2={announcment} child3={download} />
    </EventPage>
  );
};

export default DLSprint;

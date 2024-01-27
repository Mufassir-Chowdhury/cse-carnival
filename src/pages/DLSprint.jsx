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
        "Competition Launch: 20 January",
        "Phase 1: 20 January - 10 February 2024 (Online)",
        "Team Merge and Registration Deadline: 30 January 2024",
        "Phase 2: 18 February 2024 (Offline)",
        "Winners Announcement and Prize Giving Ceremony: 18 February 2024",
      ])}
      {renderTitleWithList('👩‍💻 How to Participate', [
        "Join Kaggle if you haven't already: <a href=\"https://www.kaggle.com/competitions/dl-enigma-10-sust-cse-carnival-2024\" target=\"_blank\" rel=\"noopener noreferrer\" classname=\"underline\">https://www.kaggle.com/competitions/dl-enigma-10-sust-cse-carnival-2024</a>",
        "Access the competition page: <a href=\"https://www.kaggle.com/competitions/dl-enigma-10-sust-cse-carnival-2024/rules\" target=\"_blank\" rel=\"noopener noreferrer\" classname=\"underline\">https://www.kaggle.com/competitions/dl-enigma-10-sust-cse-carnival-2024/rules</a>",
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

  const announcement = (
    <div className='py-10'>
      <strong><h1 style={{ fontSize: '1.3em' }}>Announcement 1: 27 January 2024 <br /><br /></h1></strong>
      🚗 Exciting News for Deep Learning Enthusiasts! Join us for the DL Enigma 1.0 Workshop hosted by our esteemed alumnus, 𝗦𝗼𝘄𝗺𝗲𝗻 𝗗𝗮𝘀, currently a ML Research Engineer at 𝗠𝗲𝗱𝗶𝗮𝘁𝗲𝗸 𝗥𝗲𝘀𝗲𝗮𝗿𝗰𝗵 𝗨𝗞! 🌟🤖
      <br />
      <br />
      🌐 𝗗𝗲𝗺𝘆𝘀𝘁𝗶𝗳𝘆𝗶𝗻𝗴 𝗢𝗯𝗷𝗲𝗰𝘁 𝗗𝗲𝘁𝗲𝗰𝘁𝗶𝗼𝗻: 𝗔 𝗕𝗲𝗴𝗶𝗻𝗻𝗲𝗿'𝘀 𝗚𝘂𝗶𝗱𝗲 𝘁𝗼 𝗗𝗟 𝗘𝗻𝗶𝗴𝗺𝗮 𝟭.𝟬

      <br />
      <br />
      Embark on a journey with us as we demystify the intricacies of Object Detection in our special workshop designed for beginners. Here's a glimpse into what awaits you:
      <br />
      <br />

      🌟 𝗪𝗼𝗿𝗸𝘀𝗵𝗼𝗽 𝗔𝗴𝗲𝗻𝗱𝗮:
      <br />
      <br />

      1. 𝗗𝗟 𝗘𝗻𝗶𝗴𝗺𝗮 𝟭.𝟬 𝗘𝘃𝗲𝗻𝘁 𝗜𝗻𝗳𝗼:
      <br />
      - Unpacking the competition details<br />

      - Overview of the dataset<br />

      <br />
      2. 𝗜𝗻𝘁𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻 𝘁𝗼 𝗢𝗯𝗷𝗲𝗰𝘁 𝗗𝗲𝘁𝗲𝗰𝘁𝗶𝗼𝗻:<br />

      - Grasping the basics for beginners<br />

      - Understanding key concepts and terminologies<br />

      - Practical Coding Examples<br />

      <br />

      3. 𝗤&𝗔 𝗦𝗲𝘀𝘀𝗶𝗼𝗻:<br />

      - A dedicated time to address your queries<br />

      - Interact with Sowmen Das and fellow participants<br />
      <br />

      📅 𝗗𝗮𝘁𝗲: 28 January 2024<br />

      🕒𝗧𝗶𝗺𝗲: 10:00 P.M.<br />

      📍 𝗩𝗲𝗻𝘂𝗲: Zoom Meeting and Facebook Live<br />
      <div className='my-8 md:mx-8 flex justify-center w-full aspect-video md:h-96'>
        <img src="/image/banner/dlenigmaSowmen.jpg" alt="" className="" />
      </div>
    </div>
  );

  const download = (
    <div className='py-20'>
      Not Uploaded Yet
    </div>
  );

  return (
    <EventPage id="dlsprint" >
      <Tab child1={mainDescription} child2={announcement} child3={download} />
    </EventPage>
  );
};

export default DLSprint;

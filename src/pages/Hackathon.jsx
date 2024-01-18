// Hackathon.js

import React, { useState } from 'react';
import Tab from '../components/Tab';
import { events } from '../data/data';
import { EventPage } from '../components/EventPage';
import { renderLongDescriptions, renderShortDescriptions, renderDetailsWithoutTitle, renderTitleWithList, renderDetails } from '../components/Render';

const Hackathon = () => {
  const { shortDescription, longDescription } = events['hackathon'];

  // const [pdfUrl, setPdfUrl] = useState('/resources/.pdf');
  const pdfUrl = "/resources/hackathon-rulebook.pdf";


  const mainDescription = (
    <div className='flex flex-col px-4 gap-6'>
      {renderShortDescriptions(shortDescription)}
      {renderLongDescriptions(longDescription)}
      {renderDetails({
        title: "Participation Details",
        value: "The hackathon will be a <b>24 hour</b> long event. A preliminary round may be taken if required, to select 35 teams for the onsite event. The hackathon will be an onsite event held on the premises of Institute of Information and Technology, SUST from <b>17 February to 18 February.</b> It will be heavily focused on development and technology, so participants brush up your coding skills. 👊🔥",
      })}
      {renderDetails({
        title: "Event Details",
        value: "<b>This event invites innovative minds to develop solutions that push technological boundaries. Participants will create a functional product, considering the entire process from ideation to execution. They should demonstrate process understanding, optimize for efficiency, ensure scalability, and are expected to integrate frontier technologies.</b>",
      })}

      {renderTitleWithList('Team Requirements', [
        "Each team can contain at most 3 members. ",
        "All the participants must be currently pursuing undergraduate degrees. ",
        "Teams have to be formed by students of the same university.",
      ])}
      {renderTitleWithList('🏆 Prizes', [
        "🏆 Champion - 40,000 BDT",
        "🥈 1st Runners up - 25,000 BDT",
        "🥉 2nd Runners up - 15,000 BDT",
        "🏅 SUST Rising Team - 8,000 BDT",
      ])}
      {renderDetails({
        title: "Event Schedule",
        value: "<b>Preliminary Round:</b> TBA",
      })}
      {renderDetailsWithoutTitle({
        value: "<b>Hackathon Date:</b> 9:00 AM, 17 February,2024 - 9:00 AM, 18 February,2024 <br/> <b>Venue:</b> IICT Building, SUST. <br/> <b>Prize Giving Ceremony:</b> 17 February,2024."
      })}
      {renderDetails({
        title: "For queries, Contact:",
        value: "Muhit Mahmud <br/> muhitmahmud64@gmail.com <br/> 01870833645 <br/> <br/> Mustaq Mujahid Mim <br/> mustaqmujahidmim@gmail.com <br/> 01755945867 <br/> ",
      })}
    </div>
  );

  const announcment = (
    <div className='py-20'>
      No Announcements Yet
    </div>
  );

  const download = (
    <div>
      <div className='flex gap-3'>
        <span>
          To download the rulebook, click
        </span>
        <span>
          <a href={pdfUrl} download="hackathon.pdf" target="_blank" rel="noopener noreferrer" className='underline'>
            Download PDF
          </a>
        </span>
        {/* <button 
        className={`rounded-xl bg-field-body text-navbar border border-navbar hover:border-body px-4 py-2 hover:outline-none hover:bg-navbar-button hover:text-body`}>
          </button> */}
      </div>
      <div className='py-8'>
        Are you ready for a thrilling 🕗 𝟮𝟰-𝗵𝗼𝘂𝗿 hackathon where you can unleash your creativity and innovation to solve real-world challenges using technology? Whether you are a beginner or an expert, you can showcase your skills and learn from others in this collaborative and competitive event. <br /><br />
        You will have the opportunity to work on a 💻 𝗳𝘂𝗹𝗹 𝘀𝘁𝗮𝗰𝗸 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝗮𝗹 𝗽𝗿𝗼𝗱𝘂𝗰𝘁, from ideation to execution, using either 🤖𝗔𝗻𝗱𝗿𝗼𝗶𝗱 𝗼𝗿 🌐 𝗪𝗲𝗯 platforms. You might need to build applications, such as image editing and creation, chatbots, digital assistants, social media monitoring, or automated financial investing. Your product should demonstrate 𝗽𝗿𝗼𝗰𝗲𝘀𝘀 𝘂𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱𝗶𝗻𝗴, 𝗲𝗳𝗳𝗶𝗰𝗶𝗲𝗻𝗰𝘆, 𝘀𝗰𝗮𝗹𝗮𝗯𝗶𝗹𝗶𝘁𝘆 𝗶𝗻𝗰𝗼𝗿𝗽𝗼𝗿𝗮𝘁𝗶𝗻𝗴 𝗔𝗜 𝘁𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆.<br /><br />
        Don't miss this opportunity to turn your ideas into reality and make a difference with technology. Register now and secure your spot for this exciting hackathon.<br /><br />
        🔥𝗥𝗲𝗮𝗱 𝘁𝗵𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴 𝗿𝘂𝗹𝗲𝘀 𝘁𝗼 𝗲𝗻𝘀𝘂𝗿𝗲 𝗮 𝘀𝗺𝗼𝗼𝘁𝗵 𝗮𝗻𝗱 𝗳𝗮𝗶𝗿 𝗰𝗼𝗺𝗽𝗲𝘁𝗶𝘁𝗶𝗼𝗻:🔥<br />
        1️⃣ Each Team can contain at most 3 members.<br />
        2️⃣ All the participants must be currently pursuing undergraduate degrees.<br />
        3️⃣ Teams have to be formed by students of the same university. Cross-University teams are not allowed to participate.<br />
        4️⃣ Teams will have a designated 24-hour time frame to develop and present their solutions to the given problem.<br />
        5️⃣ Projects must be developed on the day of the Hackathon. Any project developed in advance will not be accepted.<br />
        6️⃣ Projects will be evaluated based on innovation, functionality, usability and overall impact.<br />
        7️⃣ Laptops, chargers, multiplugs, and any other devices that may be required must be brought by participants.<br />
        8️⃣ Internet facilities will be provided, but because of possible infrastructure problems it is recommended to keep mobile data as backup.<br />
        9️⃣ Food, security, and accommodation will be provided for the overnight stay.<br />
        1️⃣0️⃣ Participants must start a new GitHub repository onsite and submit it at the end of the competition.<br />
        1️⃣1️⃣ A scenario and set of tasks will be presented to the participants. As long as they fulfill the task requirements, participants are free to use any tools or frameworks and can add new features to the application if they satisfy the requirements better.<br />
        1️⃣2️⃣ A preliminary round may be taken if required, to select 35 teams for the main event.<br />
        1️⃣3️⃣ Minimum 10 teams will be selected for the final presentation.<br />
        1️⃣4️⃣ For final submissions after 24-hours, participants must include:<br />
        👉A GitHub repository containing the latest project state, synchronized with the latest commit.<br />
        👉Presentation slides.<br />
        👉Comprehensive project documentation, including testing documentation. (optional)<br />
        👉The presentation should primarily focus on the live demonstration.<br />
      </div>
    </div>
  );

  return (
    <EventPage id="hackathon">
      <Tab child1={mainDescription} child2={announcment} child3={download} />
    </EventPage>
  );
};

export default Hackathon;

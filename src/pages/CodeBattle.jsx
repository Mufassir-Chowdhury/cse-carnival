import React from 'react';
import Tab from '../components/Tab';
import { events } from '../data/data';
import { DetailsWithoutTitle } from '../components/Details';
import { EventPage } from '../components/EventPage';
import { renderLongDescriptions, renderShortDescriptions, renderTitleWithList, renderDetails } from '../components/Render';

const CodeBattle = () => {
  const { shortDescription, longDescription } = events['codebattle'];

  const mainDescription = (
    <div className='flex flex-col px-4 gap-6'>

      {renderShortDescriptions(shortDescription)}
      {renderLongDescriptions(longDescription)}
      <DetailsWithoutTitle description={{ value: "Calling all CS undergrads! Join us for an adrenaline-pumping <b>Code Battle</b> where Gaming Meets Coding, and Victory is Written in Code!<br/><br/><b>Do you love gaming?</b><br/><b> Do you also love coding?</b><br/> <br/>We have news for you. We will present to you a gaming environment where the power to control lies not in a mere controller but in the elegance of your code. Your digital warriors, crafted with the brilliance of your programming finesse in your favourite programming language, will engage in a fierce showdown against the bots of your adversaries. It's not just a game; it's an epic battle of tactics, a symphony of skill where your code reigns supreme.🎮💻🚀" }} />
      {renderTitleWithList('What to expect', [
        "Intense battle of the programmable bots.",
        "Strategy game that will push your limits and expand your skills.",
        "Networking opportunities with fellow CS enthusiasts.",
        "Prizes and recognition for top performers.",
      ])}
      {renderTitleWithList('🏆 Prizes', [
        "🏆 Champion - 25K BDT",
        "🥈 1st Runners up - 15K BDT",
        "🥉 2nd Runners up - 10K BDT",
      ])}
      <DetailsWithoutTitle description={{ value: "This is your chance to shine and demonstrate your coding finesse. Are you up for the challenge? Mark your calendars and join us for an unforgettable <b>Code Battle</b>!" }} />
      {renderDetails({
        title: "For queries, Contact:",
        value: `Faridul Reza(Sagor)<br/>
        Email: faridul.reza.sagor@gmail.com<br/>
        Contact No: 01953737832<br/><br/>
        Remember, the battle awaits—brace yourself for an electrifying coding experience! Don't miss out—Register now and secure your spot in this thrilling event! 💥✨`,
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
  )
  return (
    <EventPage id="codebattle" >
      <Tab child1={mainDescription} child2={announcment} child3={download} />
    </EventPage>
  );
};

export default CodeBattle;

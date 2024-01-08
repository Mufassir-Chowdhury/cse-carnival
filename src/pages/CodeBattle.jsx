import React from 'react';
import Tab from '../components/Tab';
import { events } from '../data/data';
import { Details, DetailsWithoutTitle, QuickDetails, TitleWithList } from '../components/Details';
import { EventPage } from '../components/EventPage';

const CodeBattle = () => {
  const description = (
    <div className='flex flex-col px-4 gap-6'>
      <div className='flex flex-col gap-2'>
        {events['codebattle'].shortDescription.map((description, index) => (
          <QuickDetails
            key={index}
            className={
              index % 3 === 0
                ? "bg-amber-600 border-orange-600"
                : index % 3 === 1
                  ? "bg-slate-500 border-slate-500"
                  : "bg-amber-100 border-amber-100"
            }
            description={description}
          />
        ))}
      </div>
      {/* <div className='flex flex-col gap-2 '>
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['codebattle'].shortDescription[0]} />
        <QuickDetails className="bg-slate-500 border-slate-500" description={events['codebattle'].shortDescription[1]} />
        <QuickDetails className="bg-amber-100 border-amber-100" description={events['codebattle'].shortDescription[2]} />
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['codebattle'].shortDescription[3]} />
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['codebattle'].shortDescription[4]} />
      </div> */}
      {events['codebattle'].longDescription.map((item) => (
        <Details key={item.title} description={item} />
      ))}

      {/* <DetailsWithoutTitle description={{value : ""}} /> */}
      <DetailsWithoutTitle description={{value : "Calling all CS undergrads! Join us for an adrenaline-pumping <b>Code Battle</b> where Gaming Meets Coding, and Victory is Written in Code!<br/><br/><b>Do you love gaming?</b><br/><b> Do you also love coding?</b><br/> <br/>We have news for you. We will present to you a gaming environment where the power to control lies not in a mere controller but in the elegance of your code. Your digital warriors, crafted with the brilliance of your programming finesse in your favourite programming language, will engage in a fierce showdown against the bots of your adversaries. It's not just a game; it's an epic battle of tactics, a symphony of skill where your code reigns supreme."}} />
      <TitleWithList 
        title='What to expect'
        items={[
          "Intense battle of the programmable bots.",
          "Strategy game that will push your limits and expand your skills.",
          "Networking opportunities with fellow CS enthusiasts.",
          "Prizes and recognition for top performers.",
        ]}
      />
      <TitleWithList 
        title='Prizes : TBA'
        items={[
        ]}
      />
      <DetailsWithoutTitle description={{value: "This is your chance to shine and demonstrate your coding finesse. Are you up for the challenge? Mark your calendars and join us for an unforgettable <b>Code Battle</b>!"}} />
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
    <EventPage id="codebattle" >
      <Tab child1={description} child2={announcment} child3={download} />
    </EventPage>
  );
};

export default CodeBattle;

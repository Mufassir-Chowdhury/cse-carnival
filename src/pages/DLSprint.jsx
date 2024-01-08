import React from 'react';
import Tab from '../components/Tab';
import { events } from '../data/data';
import { Details, DetailsWithoutTitle, QuickDetails, TitleWithList } from '../components/Details';
import { EventPage } from '../components/EventPage';

const DLSprint = () => {
  const description = (
    <div className='flex flex-col px-4 gap-10'>
      <div className='flex flex-col gap-2'>
        {events['dlsprint'].shortDescription.map((description, index) => (
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
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['dlsprint'].shortDescription[0]} />
        <QuickDetails className="bg-slate-500 border-slate-500" description={events['dlsprint'].shortDescription[1]} />
        <QuickDetails className="bg-amber-100 border-amber-100" description={events['dlsprint'].shortDescription[2]} />
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['dlsprint'].shortDescription[3]} />
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['dlsprint'].shortDescription[4]} />
      </div> */}
      {events['dlsprint'].longDescription.map((item) => (
        <Details key={item.title} description={item} />
      ))}

      <TitleWithList
        title='Important Dates'
        items={[
          "Competition Launch: TBA",
          "Submission Deadline: TBA",
          "Winners Announcement: TBA",
        ]}
      />

      <TitleWithList
        title='How to Participate'
        items={[
          "Join Kaggle if you haven't already: TBA",
          "Access the competition page: TBA",
          "Download the dataset and immerse yourself in the challenges of Bangladesh road conditions for autonomous vehicles.",
          "Train your model, submit predictions, and witness your algorithm's prowess in real-world scenarios."
        ]}
      />

      <Details description={{
        title: "Collaboration Encouraged",
        value: "Feel free to form teams and collaborate with fellow participants. Together, let's revolutionize the future of autonomous driving and contribute to the global AI community."
      }} />

      <Details description={{
        title: "Spread the Word",
        value: "Tag your AI-savvy friends, colleagues, and anyone passionate about the intersection of technology and transportation. Let's drive innovation forward and pave the way for safer and smarter roads!"
      }} />

      <DetailsWithoutTitle 
      description={{value : "Let the coding, training, and collaboration accelerate the dawn of autonomous vehicle technology in Bangladesh!"}}
      />
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
    <EventPage id="dlsprint" >
      <Tab child1={description} child2={announcment} child3={download} />
    </EventPage>
  );
};

export default DLSprint;

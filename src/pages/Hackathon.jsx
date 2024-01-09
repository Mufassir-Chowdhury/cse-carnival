import React from 'react';
import Tab from '../components/Tab';
import { events } from '../data/data';
import { Details, DetailsWithoutTitle, QuickDetails, TitleWithList } from '../components/Details';
import { EventPage } from '../components/EventPage';

const Hackathon = () => {
  const description = (

    <div className='flex flex-col px-4 gap-10'>
      <div className='flex flex-col gap-2'>
        {events['hackathon'].shortDescription.map((description, index) => (
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
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['hackathon'].shortDescription[0]} />
        <QuickDetails className="bg-slate-500 border-slate-500" description={events['hackathon'].shortDescription[1]} />
        <QuickDetails className="bg-amber-100 border-amber-100" description={events['hackathon'].shortDescription[2]} />
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['hackathon'].shortDescription[3]} />
        <QuickDetails className="bg-amber-600 border-orange-600" description={events['hackathon'].shortDescription[4]} />
      </div> */}
      {events['hackathon'].longDescription.map((item) => (
        <Details key={item.title} description={item} />
      ))}

      <DetailsWithoutTitle
        description={{ value: "Are you prepared to let your imagination and coding abilities run wild?Do you want to apply creative thinking and development skills to tackle problems in the real world? Would you like to connect with like-minded peers and professionals in the field? If so, welcome to the <b>Hackathon</b>, one of the signature events of <b>SUST CSE Carnival-2024</b>." }}
      />

      <DetailsWithoutTitle
        description={{ value: "The hackathon will be based on <b> TBA </b>." }}
      />

      <Details
        description={{
          title: "Participation Details",
          value: "The hackathon will be a <b>24 hours </b> long event. It will be an onsite event held on the premises of Institute of Information and Communication Technology, SUST from <b>16 February to 17 February</b>. It will be heavily focused on development and technology, so participants brush up your coding skills. ",

        }}
      />

      <TitleWithList
        title="Prizes"
        items={[
          "Champion - 40K BDT",
          "1st Runners up - 20K BDT",
          "2nd Runners up - 15K BDT",
          "SUST Rising Team - 8K BDT",
        ]}
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
    <EventPage id="hackathon" >
      <Tab child1={description} child2={announcment} child3={download} />
    </EventPage>
  );
};

export default Hackathon;

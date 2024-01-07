import React from 'react';
import { SponsorList } from './Items';

const Organizer = ({organizers}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center mb-8">
        {/* <h1 className="text-3xl font-bold mb-4 text-title">Organized By</h1> */}
        <div className="flex justify-center items-center gap-10 md:gap-24  mb-8">
            {organizers.map((sponsor) => (
              <SponsorList key={sponsor.name} sponsor={sponsor} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default Organizer;

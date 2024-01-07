// SponsoredBy.js

import React from 'react';
import { SponsorItem, SponsorList } from './Items';
import PropTypes from 'prop-types';
// import { sponsors } from '../data/data';

const SponsoredBy = ({title, list, sponsors }) => {

  return (
    <div>
      <div className="container mx-auto pb-8 pt-8 font-semibold">
        <h2 className="text-3xl font-bold text-center mb-6 text-title">{title}</h2>

        {list === 'list' ? (
          <div className="flex justify-center items-center space-x-8  mb-8">
            {sponsors.map((sponsor) => (
              <SponsorList key={sponsor.name} sponsor={sponsor} />
            ))}
          </div>
        ) : (
          sponsors.map((sponsor) => (
            <SponsorItem key={sponsor.name} sponsor={sponsor} />
          ))
        )}

        {/* <div className="flex justify-center items-center space-x-8">
        <img src="/image/event/Event 1.jpg" alt="Sponsor 1" className="w-32 h-32" />
        <img src="/image/event/Event 1.jpg" alt="Sponsor 1" className="w-32 h-32" />
        <img src="/image/event/Event 1.jpg" alt="Sponsor 1" className="w-32 h-32" />
        <img src="/image/event/Event 2.jpg" alt="Sponsor 2" className="w-32 h-32" />
        Add more images as needed
      </div> */}
        {/* <SponsorItem event={sponsors[0]} />
        <SponsorItem event={sponsors[1]} /> */}
        {/* <div className="flex odd:flex-row-reverse odd:justify-end items-center mb-8">
                <div className="flex-shrink-0">
                    <img src="/image/event/Event 1.jpg" alt="Event 1" className="" />
                </div>
                <div className="even:ml-8 odd:mr-8">
                    <h3 className="text-2xl font-bold md:mb-2 text-navbar">Re:cruit</h3>
                    <p className='text-navbar'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio iure quas ullam recusandae ex cum, ipsa aperiam reprehenderit cumque, quae eum ipsum. Distinctio expedita quis quos provident cum ea!</p>
                </div>
            </div> */}
      </div>

    </div>
  );
};

SponsoredBy.propTypes = {
  sponsors: PropTypes.object.isRequired,
  // title: PropTypes.string.isRequired,
};

export default SponsoredBy;

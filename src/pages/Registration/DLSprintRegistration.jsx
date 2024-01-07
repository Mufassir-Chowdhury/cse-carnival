import React from 'react';
import { PrimaryButton } from '../../components/Button';
import Banner from '../../components/Banner';
import SponsoredBy from '../../components/SponsoredBy';
import { events } from '../../data/data';
import { IUPCLeft, IUPCRight } from '../../data/vector';
import { FormField, SelectField } from '../../components/Form';


const DLSprintRegistration = () => {
  const firstOptions = [
    { value: 'student', name: 'Student' },
    { value: 'faculty', name: 'Faculty' },
    { value: 'other', name: 'Other' },
  ]
  return (
    <div>
      <div className='z-0 relative'>
        <IUPCLeft />
        <IUPCRight />
      </div>
      <div className='text-navbar z-10 relative px-4 lg:px-28'>
        <Banner link="/image/banner/bannerHackathon.jpg" />
        <h2 className=" text-4xl font-bold md:my-6 py-5 md:mx-20  text-navbar-button text-center ">
          Register
        </h2>

        <form method='post'>
          <FormField label="First Participant Name" type="text" name="Name1" classValue="" />
          <SelectField label="Occupation" name="Name1" classValue="" options={firstOptions} />
        </form>

        <div className='py-10 w-full flex justify-center'>
          <PrimaryButton text='Submit' />
        </div>
        <SponsoredBy list={"list"} sponsors={events['dlsprint'].sponsors} />
      </div>
    </div>
  );
};

export default DLSprintRegistration;

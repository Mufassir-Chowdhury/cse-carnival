import React from 'react';
import { PrimaryButton } from '../../components/Button';
import Banner from '../../components/Banner';
import SponsoredBy from '../../components/SponsoredBy';
import { events, t_shirt_size } from '../../data/data';
import { IUPCLeft, IUPCRight } from '../../data/vector';
import { FormField, SelectField } from '../../components/Form';


const DLSprintRegistration = () => {
  
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

        <form method='post' className='flex flex-col gap-3'>
          <div>
            <FormField label="Team Name" type="text" name="" classValue="" />
          </div>
          <div>
            <FormField label="Team Leader's Name" type="text" name="" classValue="" />

          </div>
          <div className='flex flex-col my-4 gap-y-2'>
            <span className="text-2xl font-serif font-bold text-field-title leading-6 pl-3 mb-2">Member 1</span>
            <FormField label="Member's name" type="text" name="" classValue="" />
            <FormField label="Email" type="email" name="" classValue="" />
            <FormField label="Phone number" type="tel" name="" classValue="" />
            <FormField label="University/Organization" type="text" name="" classValue="" />
            <FormField label="Job Title/Position" type="text" name="" classValue="" />
            <FormField label="Student Id (optional)" type="text" name="" classValue="" />
            <FormField label="Country" type="text" name="" classValue="" />
            <FormField label="Github link (optional)" type="text" name="" classValue="" />
            <FormField label="LinkedIn Id (optional)" type="text" name="" classValue="" />
            <FormField label="Kaggle link" type="text" name="" classValue="" />

            <SelectField label="T-Shirt size" name="" classValue="" options={t_shirt_size} />

          </div>
          
          <div className='flex flex-col my-4 gap-y-2'>
            <span className="text-2xl font-serif font-bold text-field-title leading-6 pl-3 mb-2">Member 2</span>
            <FormField label="Member's name" type="text" name="" classValue="" />
            <FormField label="Email" type="email" name="" classValue="" />
            <FormField label="Phone number" type="tel" name="" classValue="" />
            <FormField label="University/Organization" type="text" name="" classValue="" />
            <FormField label="Job Title/Position" type="text" name="" classValue="" />
            <FormField label="Student Id (optional)" type="text" name="" classValue="" />
            <FormField label="Country" type="text" name="" classValue="" />
            <FormField label="Github link (optional)" type="text" name="" classValue="" />
            <FormField label="LinkedIn Id (optional)" type="text" name="" classValue="" />
            <FormField label="Kaggle link" type="text" name="" classValue="" />

            <SelectField label="T-Shirt size" name="" classValue="" options={t_shirt_size} />

          </div>
          <div className='flex flex-col my-4 gap-y-2'>
            <span className="text-2xl font-serif font-bold text-field-title leading-6 pl-3 mb-2">Member 3</span>
            <FormField label="Member's name" type="text" name="" classValue="" />
            <FormField label="Email" type="email" name="" classValue="" />
            <FormField label="Phone number" type="tel" name="" classValue="" />
            <FormField label="University/Organization" type="text" name="" classValue="" />
            <FormField label="Job Title/Position" type="text" name="" classValue="" />
            <FormField label="Student Id (optional)" type="text" name="" classValue="" />
            <FormField label="Country" type="text" name="" classValue="" />
            <FormField label="Github link (optional)" type="text" name="" classValue="" />
            <FormField label="LinkedIn Id (optional)" type="text" name="" classValue="" />
            <FormField label="Kaggle link" type="text" name="" classValue="" />

            <SelectField label="T-Shirt size" name="" classValue="" options={t_shirt_size} />

          </div>

          <div className='flex flex-col my-4 gap-y-2'>
            <span className="text-2xl font-serif font-bold text-field-title leading-6 pl-3 mb-2">Member 4</span>
            <FormField label="Member's name" type="text" name="" classValue="" />
            <FormField label="Email" type="email" name="" classValue="" />
            <FormField label="Phone number" type="tel" name="" classValue="" />
            <FormField label="University/Organization" type="text" name="" classValue="" />
            <FormField label="Job Title/Position" type="text" name="" classValue="" />
            <FormField label="Student Id (optional)" type="text" name="" classValue="" />
            <FormField label="Country" type="text" name="" classValue="" />
            <FormField label="Github link (optional)" type="text" name="" classValue="" />
            <FormField label="LinkedIn Id (optional)" type="text" name="" classValue="" />
            <FormField label="Kaggle link" type="text" name="" classValue="" />

            <SelectField label="T-Shirt size" name="" classValue="" options={t_shirt_size} />

          </div>
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

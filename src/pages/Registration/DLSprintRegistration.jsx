import React from 'react';
import { t_shirt_size } from '../../data/data';
import { FormField, SelectField } from '../../components/Form';
import { EventRegistrationPage } from '../../components/EventPage';


const DLSprintRegistration = () => {

  return (
    <EventRegistrationPage title="DL Sprint" id="dlsprint">
        <form method='post' className='flex flex-col gap-3'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <FormField label="Team Name" type="text" name="" classValue="block" />
            <FormField label="Team Leader's Name" type="text" name="" classValue="block" />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

            <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
              <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Member 1</span>
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

            <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
              <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Member 2</span>
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
            <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
              <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Member 3</span>
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

            <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
              <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Member 4</span>
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
          </div>
        </form>
    </EventRegistrationPage>
  );
};

export default DLSprintRegistration;

import React from 'react';
import { t_shirt_size } from '../../data/data';
import { FormField, SelectField } from '../../components/Form';
import { EventRegistrationPage } from '../../components/EventPage';


const IUPCRegistraion = () => {
  return (
    <EventRegistrationPage title="IUPC" id="iupc">
        <form method='post' className='flex flex-col gap-3'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <FormField label="Team Name" type="text" name="" classValue="" />
            <FormField label="University Name" type="text" name="" classValue="" />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl '>
              <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Perticipant 1</span>
              <FormField label="Perticipant's name" type="text" name="" classValue="" />
              <FormField label="Email" type="email" name="" classValue="" />
              <FormField label="Phone number" type="tel" name="" classValue="" />
              <SelectField label="T-Shirt size" name="" classValue="" options={t_shirt_size} />

            </div>
            <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
              <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Perticipant 2</span>
              <FormField label="Perticipant's name" type="text" name="" classValue="" />
              <FormField label="Email" type="email" name="" classValue="" />
              <FormField label="Phone number" type="tel" name="" classValue="" />
              <SelectField label="T-Shirt size" name="" classValue="" options={t_shirt_size} />
            </div>

            <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
              <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Perticipant 3</span>
              <FormField label="Perticipant's name" type="text" name="" classValue="" />
              <FormField label="Email" type="email" name="" classValue="" />
              <FormField label="Phone number" type="tel" name="" classValue="" />
              <SelectField label="T-Shirt size" name="" classValue="" options={t_shirt_size} />
            </div>

            <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
              <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Coach</span>
              <FormField label="Coach's name" type="text" name="" classValue="" />
              <FormField label="Email" type="email" name="" classValue="" />
              <FormField label="Phone number" type="tel" name="" classValue="" />
              <SelectField label="T-Shirt size" name="" classValue="" options={t_shirt_size} />
            </div>
          </div>
        </form>
    </EventRegistrationPage>
  );
};

export default IUPCRegistraion;

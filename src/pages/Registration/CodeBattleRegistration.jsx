import React from 'react';
import { t_shirt_size } from '../../data/data';
import { FormField, SelectField } from '../../components/Form';
import { EventRegistrationPage } from '../../components/EventPage';

const CodeBattleRegistration = () => {
  return (
    <EventRegistrationPage title="Code Battle" id="codebattle">

      <form method='post' className='flex flex-col gap-3'>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-4'>
          <FormField label="Participant's Name" type="text" name="" classValue="" />
          <FormField label="University Name" type="text" name="" classValue="" />
          <div className='flex flex-col  gap-y-2'>
            <FormField label="Email" type="email" name="" classValue="" />
            <FormField label="Phone number" type="tel" name="" classValue="" />
          </div>
          <div className='flex flex-col gap-y-2'>
            <FormField label="Code Battle Username (optional)" type="text" name="" classValue="" />
            <SelectField label="T-Shirt size" name="" classValue="" options={t_shirt_size} />
          </div>
        </div>
      </form>
    </EventRegistrationPage>


  );
};

export default CodeBattleRegistration;

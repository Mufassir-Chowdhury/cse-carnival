import React, { useState } from 'react';
import { t_shirt_size } from '../../data/data';
import { FormField, SelectField } from '../../components/Form';
import { EventRegistrationPage } from '../../components/EventPage';
import { PrimaryButton } from '../../components/Button';

const CodeBattleRegistration = () => {
  const [formData, setFormData] = useState({
    participantname: '',
    universityname: '',
    email: '',
    phonenumber: '',
    codebattleusername: '',
    tShirtSize: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can handle the form submission, e.g., send the data to a server
  };
  return (
    <EventRegistrationPage title="Code Battle" id="codebattle">
      <form method='post' className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-4'>
          <FormField label="Participant's Name" name="participantname" onChange={handleChange} />
          <FormField label="University Name" name="universityname" onChange={handleChange} />
          <div className='flex flex-col  gap-y-2'>
            <FormField label="Email" type="email" name="email" onChange={handleChange} />
            <FormField label="Phone number" type="tel" name="phonenumber" onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-y-2'>
            <FormField label="Code Battle Username (optional)" name="codebattleusername" onChange={handleChange} />
            <SelectField label="T-Shirt size" name="tShirtSize" options={t_shirt_size} onChange={handleChange} />
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <PrimaryButton type="submit" text="Submit" />
        </div>
      </form>
    </EventRegistrationPage>


  );
};

export default CodeBattleRegistration;

import React, { useState } from 'react';
import { t_shirt_size } from '../../data/data';
import { FormField, SelectField } from '../../components/Form';
import { EventRegistrationPage } from '../../components/EventPage';


const IUPCRegistraion = () => {
  const [formData, setFormData] = useState({
    teamname: '',
    universityname: '',
    participant1name: '',
    participant1email: '',
    participant1phonenumber: '',
    participant1tshirtsize: '',
    participant2name: '',
    participant2email: '',
    participant2phonenumber: '',
    participant2tshirtsize: '',
    participant3name: '',
    participant3email: '',
    participant3phonenumber: '',
    participant3tshirtsize: '',
    coachname: '',
    coachemail: '',
    coachphonenumber: '',
    coachtshirtsize: '',
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
    <EventRegistrationPage title="IUPC" id="iupc">
      <form method='post' className='flex flex-col gap-3'  onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <FormField label="Team Name" name="teamname" onChange={handleChange}/>
          <FormField label="University Name" name="universityname" onChange={handleChange}/>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl '>
            <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Participant 1</span>
            <FormField label="Participant's name" name="participant1name" onChange={handleChange}/>
            <FormField label="Email" type="email" name="participant1email" onChange={handleChange}/>
            <FormField label="Phone number" type="tel" name="participant1phonenumber" onChange={handleChange}/>
            <SelectField label="T-Shirt size" name="participant1tshirtsize" options={t_shirt_size} onChange={handleChange}/>

          </div>
          <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
            <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Participant 2</span>
            <FormField label="Participant's name" name="participant2name" onChange={handleChange}/>
            <FormField label="Email" type="email" name="participant2email" onChange={handleChange}/>
            <FormField label="Phone number" type="tel" name="participant2phonenumber" onChange={handleChange}/>
            <SelectField label="T-Shirt size" name="participant2tshirtsize" options={t_shirt_size} onChange={handleChange}/>
          </div>

          <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
            <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Participant 3</span>
            <FormField label="Participant's name" name="participant3name" onChange={handleChange}/>
            <FormField label="Email" type="email" name="participant3email" onChange={handleChange}/>
            <FormField label="Phone number" type="tel" name="participant3phonenumber" onChange={handleChange}/>
            <SelectField label="T-Shirt size" name="participant3tshirtsize" options={t_shirt_size} onChange={handleChange}/>
          </div>

          <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
            <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Coach</span>
            <FormField label="Coach's name" name="coachname" onChange={handleChange}/>
            <FormField label="Email" type="email" name="coachemail" onChange={handleChange}/>
            <FormField label="Phone number" type="tel" name="coachphonenumber" onChange={handleChange}/>
            <SelectField label="T-Shirt size" name="coachtshirtsize" options={t_shirt_size} onChange={handleChange}/>
          </div>
        </div>
        <div className='w-full flex justify-center'>
            <PrimaryButton type="submit" text="Submit" />
          </div>
      </form>
    </EventRegistrationPage>
  );
};

export default IUPCRegistraion;

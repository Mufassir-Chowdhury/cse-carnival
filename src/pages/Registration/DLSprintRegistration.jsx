import React, { useState } from 'react';
import { t_shirt_size } from '../../data/data';
import { FormField, SelectField } from '../../components/Form';
import { EventRegistrationPage } from '../../components/EventPage';
import { PrimaryButton } from '../../components/Button';

const DLSprintRegistration = () => {
  const [formData, setFormData] = useState({
    teamname: '',
    teamleadername: '',
    member1name: '',
    member1email: '',
    member1phonenumber: '',
    member1university: '',
    member1jobtitle: '',
    member1studentid: '',
    member1country: '',
    member1githublink: '',
    member1linkedinid: '',
    member1kagglelink: '',
    member1tshirtsize: '',
    member2name: '',
    member2email: '',
    member2phonenumber: '',
    member2university: '',
    member2jobtitle: '',
    member2studentid: '',
    member2country: '',
    member2githublink: '',
    member2linkedinid: '',
    member2kagglelink: '',
    member2tshirtsize: '',
    member3name: '',
    member3email: '',
    member3phonenumber: '',
    member3university: '',
    member3jobtitle: '',
    member3studentid: '',
    member3country: '',
    member3githublink: '',
    member3linkedinid: '',
    member3kagglelink: '',
    member3tshirtsize: '',
    member4name: '',
    member4email: '',
    member4phonenumber: '',
    member4university: '',
    member4jobtitle: '',
    member4studentid: '',
    member4country: '',
    member4githublink: '',
    member4linkedinid: '',
    member4kagglelink: '',
    member4tshirtsize: '',
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
    <EventRegistrationPage title="DL Sprint" id="dlsprint">
        <form method='post' className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <FormField label="Team Name" name="teamname" onChange={handleChange} />
            <FormField label="Team Leader's Name" name="teamleadername" onChange={handleChange} />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

            <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
              <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Member 1</span>
              <FormField label="Member's name" name="member1name" onChange={handleChange} />
              <FormField label="Email" type="email" name="member1email" onChange={handleChange}/>
              <FormField label="Phone number" type="tel" name="member1phonenumber" onChange={handleChange}/>
              <FormField label="University/Organization" name="member1university" onChange={handleChange}/>
              <FormField label="Job Title/Position" name="member1jobtitle" onChange={handleChange}/>
              <FormField label="Student Id (optional)" required={false} name="member1studentid" onChange={handleChange}/>
              <FormField label="Country" name="member1country" onChange={handleChange}/>
              <FormField label="Github link (optional)" required={false} name="member1githublink" onChange={handleChange}/>
              <FormField label="LinkedIn Id (optional)" required={false} name="member1linkedinid" onChange={handleChange}/>
              <FormField label="Kaggle link" name="member1kagglelink" onChange={handleChange}/>

              <SelectField label="T-Shirt size" name="member1tshirtsize" options={t_shirt_size} onChange={handleChange}/>

            </div>

            <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
              <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Member 2</span>
              <FormField label="Member's name" name="member2name" onChange={handleChange}/>
              <FormField label="Email" type="email" name="member2email" onChange={handleChange}/>
              <FormField label="Phone number" type="tel" name="member2phonenumber" onChange={handleChange}/>
              <FormField label="University/Organization" name="member2university" onChange={handleChange}/>
              <FormField label="Job Title/Position" name="member2jobtitle" onChange={handleChange}/>
              <FormField label="Student Id (optional)" required={false} name="member2studentid" onChange={handleChange}/>
              <FormField label="Country" name="member2country" onChange={handleChange}/>
              <FormField label="Github link (optional)" required={false} name="member2githublink" onChange={handleChange}/>
              <FormField label="LinkedIn Id (optional)" required={false} name="member2linkedinid" onChange={handleChange}/>
              <FormField label="Kaggle link" name="member2kagglelink" onChange={handleChange}/>

              <SelectField label="T-Shirt size" name="member2tshirtsize" options={t_shirt_size} onChange={handleChange}/>

            </div>
            <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
              <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Member 3</span>
              <FormField label="Member's name" name="member3name" onChange={handleChange}/>
              <FormField label="Email" type="email" name="member3email" onChange={handleChange}/>
              <FormField label="Phone number" type="tel" name="member3phonenumber" onChange={handleChange}/>
              <FormField label="University/Organization" name="member3university" onChange={handleChange}/>
              <FormField label="Job Title/Position" name="member3jobtitle" onChange={handleChange}/>
              <FormField label="Student Id (optional)" required={false} name="member3studentid" onChange={handleChange}/>
              <FormField label="Country" name="member3country" onChange={handleChange}/>
              <FormField label="Github link (optional)" required={false} name="member3githublink" onChange={handleChange}/>
              <FormField label="LinkedIn Id (optional)" required={false} name="member3linkedinid" onChange={handleChange}/>
              <FormField label="Kaggle link" name="member3kagglelink" onChange={handleChange}/>

              <SelectField label="T-Shirt size" name="member3tshirtsize" options={t_shirt_size} onChange={handleChange}/>

            </div>

            <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
              <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Member 4</span>
              <FormField label="Member's name" name="member4name" onChange={handleChange}/>
              <FormField label="Email" type="email" name="member4email" onChange={handleChange}/>
              <FormField label="Phone number" type="tel" name="member4phonenumber" onChange={handleChange}/>
              <FormField label="University/Organization" name="member4university" onChange={handleChange}/>
              <FormField label="Job Title/Position" name="member4jobtitle" onChange={handleChange}/>
              <FormField label="Student Id (optional)" required={false} name="member4studentid" onChange={handleChange}/>
              <FormField label="Country" name="member4country" onChange={handleChange}/>
              <FormField label="Github link (optional)" required={false} name="member4githublink" onChange={handleChange}/>
              <FormField label="LinkedIn Id (optional)" required={false} name="member4linkedinid" onChange={handleChange}/>
              <FormField label="Kaggle link" name="member4kagglelink" onChange={handleChange}/>

              <SelectField label="T-Shirt size" name="member4tshirtsize" options={t_shirt_size} onChange={handleChange}/>

            </div>
          </div>
          <div className='w-full flex justify-center'>
            <PrimaryButton type="submit" text="Submit" />
          </div>
        </form>
    </EventRegistrationPage>
  );
};

export default DLSprintRegistration;

import React, { useState, useEffect } from 'react';
import { t_shirt_size } from '../../data/data';
import { FormField, SelectField } from '../../components/Form';
import { EventRegistrationPage } from '../../components/EventPage';
import { PrimaryButton } from '../../components/Button';

import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const DLSprintRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    teamname: '',
    teamleaderemail: '',
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

  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_CENTER
      });
    }
    errorMessage && setErrorMessage('');
  }, [errorMessage]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "teamName": formData.teamname,
      "teamLeaderEmail": formData.teamleaderemail,
      "participants": [
        {
          "name": formData.member1name,
          "email": formData.member1email,
          "contact": formData.member1phonenumber,
          "tshirt": formData.member1tshirtsize,
          "githubLink": formData.member1githublink,
          "linkedinLink": formData.member1linkedinid,
          "university": formData.member1university,
          "jobTitle": formData.member1jobtitle,
          "studentId": formData.member1studentid,
          "country": formData.member1country
        },
        {
          "name": formData.member2name,
          "email": formData.member2email,
          "contact": formData.member2phonenumber,
          "tshirt": formData.member2tshirtsize,
          "githubLink": formData.member2githublink,
          "linkedinLink": formData.member2linkedinid,
          "university": formData.member2university,
          "jobTitle": formData.member2jobtitle,
          "studentId": formData.member2studentid,
          "country": formData.member2country
        },
        {
          "name": formData.member3name,
          "email": formData.member3email,
          "contact": formData.member3phonenumber,
          "tshirt": formData.member3tshirtsize,
          "githubLink": formData.member3githublink,
          "linkedinLink": formData.member3linkedinid,
          "university": formData.member3university,
          "jobTitle": formData.member3jobtitle,
          "studentId": formData.member3studentid,
          "country": formData.member3country,
        },
        {
          "name": formData.member4name,
          "email": formData.member4email,
          "contact": formData.member4phonenumber,
          "tshirt": formData.member4tshirtsize,
          "githubLink": formData.member4githublink,
          "linkedinLink": formData.member4linkedinid,
          "university": formData.member4university,
          "jobTitle": formData.member4jobtitle,
          "studentId": formData.member4studentid,
          "country": formData.member4country,
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${import.meta.env.VITE_API_URL}/api/v1/dl-sprint`, requestOptions)
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          navigate('/hackathon', { state: { successMessage: 'Registration successful!' } })

        } else if( response.status === 400) {
          throw new Error("Registration Failed. User already exists or bad request made.");
        }
      })
      .then(result => {
      })
      .catch(error => {
        console.log('error it is', error);
        setErrorMessage(error.message);
      });
  };

  return (
    <EventRegistrationPage title="DL Engima 1.0 " id="dlsprint">
            <ToastContainer className="mt-20"/>

        <form method='post' className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <FormField label="Team Name" name="teamname" onChange={handleChange} />
            <FormField label="Team Leader's Email" type='email' name="teamleaderemail" onChange={handleChange} />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

            <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
              <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Member 1</span>
              <FormField label="Member's name" name="member1name" onChange={handleChange} />
              <FormField label="Email" type="email" name="member1email" onChange={handleChange}/>
              <FormField label="Phone number" type="tel" name="member1phonenumber" onChange={handleChange}/>
              <FormField label="University/Organization" name="member1university" onChange={handleChange}/>
              <FormField label="Job Title/Position" name="member1jobtitle" onChange={handleChange}/>
              <FormField label="Student Id"  name="member1studentid" onChange={handleChange}/>
              <FormField label="Country" name="member1country" onChange={handleChange}/>
              <FormField label="Github link"  name="member1githublink" onChange={handleChange}/>
              <FormField label="LinkedIn Id"  name="member1linkedinid" onChange={handleChange}/>
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
              <FormField label="Student Id"  name="member2studentid" onChange={handleChange}/>
              <FormField label="Country" name="member2country" onChange={handleChange}/>
              <FormField label="Github link"  name="member2githublink" onChange={handleChange}/>
              <FormField label="LinkedIn Id"  name="member2linkedinid" onChange={handleChange}/>
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
              <FormField label="Student Id"  name="member3studentid" onChange={handleChange}/>
              <FormField label="Country" name="member3country" onChange={handleChange}/>
              <FormField label="Github link"  name="member3githublink" onChange={handleChange}/>
              <FormField label="LinkedIn Id"  name="member3linkedinid" onChange={handleChange}/>
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
              <FormField label="Student Id"  name="member4studentid" onChange={handleChange}/>
              <FormField label="Country" name="member4country" onChange={handleChange}/>
              <FormField label="Github link"  name="member4githublink" onChange={handleChange}/>
              <FormField label="LinkedIn Id"  name="member4linkedinid" onChange={handleChange}/>
              <FormField label="Kaggle link" name="member4kagglelink" onChange={handleChange}/>

              <SelectField label="T-Shirt size" name="member4tshirtsize" options={t_shirt_size} onChange={handleChange}/>

            </div>
          </div>
          <div className='w-full flex justify-center my-10'>
            <PrimaryButton type="submit" text="Submit" />
          </div>
        </form>
    </EventRegistrationPage>
  );
};

export default DLSprintRegistration;

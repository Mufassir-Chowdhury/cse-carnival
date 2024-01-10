import React, { useState, useEffect } from 'react';
import { t_shirt_size, universities } from '../../data/data';
import { FormField, SelectField } from '../../components/Form';
import { EventRegistrationPage } from '../../components/EventPage';
import { PrimaryButton } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { validateEmail, validatePhoneNumber, validateTshirtSize, validateGithubLink } from '../../data/validate';

const HackathonRegistration = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_CENTER
      });
    }
    errorMessage && setErrorMessage('');
  }, [errorMessage]);

  const [formData, setFormData] = useState({
    teamname: '',
    universityname: '',
    member1name: '',
    member1email: '',
    member1phonenumber: '',
    member1githublink: '',
    member1tshirtsize: '',
    member2name: '',
    member2email: '',
    member2phonenumber: '',
    member2githublink: '',
    member2tshirtsize: '',
    member3name: '',
    member3email: '',
    member3phonenumber: '',
    member3githublink: '',
    member3tshirtsize: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const validateParticipant = (participantNumber) => {
      const name = formData[`member${participantNumber}name`];
      const email = formData[`member${participantNumber}email`];
      const phone = formData[`member${participantNumber}phonenumber`];
      const githubLink = formData[`member${participantNumber}githublink`];
      const tshirt = formData[`member${participantNumber}tshirtsize`];

      const isEmailValid = validateEmail(email);
      const isPhoneNumberValid = validatePhoneNumber(phone);
      const isTshirtSizeValid = validateTshirtSize(tshirt);

      if (!isEmailValid) {
        return `Invalid email for Member ${participantNumber}`;
      } else if (!isPhoneNumberValid) {
        return `Invalid phone number for Member ${participantNumber}`;
      } else if (!isTshirtSizeValid) {
        return `Invalid T-shirt size for Member ${participantNumber}`;
      }

      return '';
    };

    // Validate all participants
    for (let i = 1; i <= 3; i++) {
      const participantValidationResult = validateParticipant(i);
      if (participantValidationResult) {
        return participantValidationResult;
      }
    }

    return ''; // Return empty string if all validations pass
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    const raw = JSON.stringify({
      "teamName": formData.teamname,
      "university": formData.universityname === 'Other' ? formData.university : formData.universityname,
      "teamLeader": {
        "name": formData.member1name,
        "email": formData.member1email,
        "contact": formData.member1phonenumber,
        "tshirt": formData.member1tshirtsize,
        "githubLink": formData.member1githublink,
      },
      "participants": [
        {
          "name": formData.member2name,
          "email": formData.member2email,
          "contact": formData.member2phonenumber,
          "tshirt": formData.member2tshirtsize,
          "githubLink": formData.member2githublink,
        },
        {
          "name": formData.member3name,
          "email": formData.member3email,
          "contact": formData.member3phonenumber,
          "tshirt": formData.member3tshirtsize,
          "githubLink": formData.member3githublink,
        }
      ]
    });
    console.log(raw);



    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${import.meta.env.VITE_API_URL}/api/v1/hackathon`, requestOptions)
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          navigate('/hackathon', { state: { successMessage: 'Registration successful!' } })

        } else if (response.status === 400) {
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
    <EventRegistrationPage title="Hackathon" id="hackathon">
      <ToastContainer className="mt-20" />
      <form method='post' className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <FormField label="Team Name" name="teamname" onChange={handleChange} />
          <div>
            <SelectField label="University Name" note="(Select 'other' if the university is not in list)" name="universityname" options={universities} onChange={handleChange} />
            {formData.universityname === 'Other' && <FormField label="University Name" classValue='mt-4' name="university" onChange={handleChange} />}
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

          <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
            <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Participant 1 (team leader)</span>
            <FormField label="Participant's name" name="member1name" onChange={handleChange} />
            <FormField label="Email" type="email" name="member1email" onChange={handleChange} />
            <FormField label="Phone number" type="tel" name="member1phonenumber" onChange={handleChange} />
            <FormField label="Github link" note="Format: https://github.com/username" name="member1githublink" onChange={handleChange} />
            <SelectField label="T-Shirt size" name="member1tshirtsize" options={t_shirt_size} onChange={handleChange} />

          </div>
          <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
            <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Participant 2</span>
            <FormField label="Participant's name" name="member2name" onChange={handleChange} />
            <FormField label="Email" type="email" name="member2email" onChange={handleChange} />
            <FormField label="Phone number" type="tel" name="member2phonenumber" onChange={handleChange} />
            <FormField label="Github link" note="Format: https://github.com/username" name="member2githublink" onChange={handleChange} />
            <SelectField label="T-Shirt size" name="member2tshirtsize" options={t_shirt_size} onChange={handleChange} />
          </div>

          <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl sm:col-span-2 container mx-auto'>
            <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Participant 3</span>
            <FormField label="Participant's name" name="member3name" onChange={handleChange} />
            <FormField label="Email" type="email" name="member3email" onChange={handleChange} />
            <FormField label="Phone number" type="tel" name="member3phonenumber" onChange={handleChange} />
            <FormField label="Github link" note="Format: https://github.com/username" name="member3githublink" onChange={handleChange} />
            <SelectField label="T-Shirt size" name="member3tshirtsize" options={t_shirt_size} onChange={handleChange} />
          </div>
        </div>
        <div className='w-full flex justify-center my-10'>
          <PrimaryButton type="submit" text="Submit" />
        </div>


      </form>
    </EventRegistrationPage>
  );
};

export default HackathonRegistration;

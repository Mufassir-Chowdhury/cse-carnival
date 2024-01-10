import React, { useState, useEffect } from 'react';
import { t_shirt_size, universities } from '../../data/data';
import { FormField, SelectField } from '../../components/Form';
import { EventRegistrationPage } from '../../components/EventPage';
import { PrimaryButton } from '../../components/Button';

import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { validateEmail, validatePhoneNumber, validateTshirtSize } from '../../data/validate';


const IUPCRegistraion = () => {
  const navigate = useNavigate()

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
  const validateForm = () => {
    const validateParticipant = (participantNumber) => {
      const name = formData[`participant${participantNumber}name`];
      const email = formData[`participant${participantNumber}email`];
      const phone = formData[`participant${participantNumber}phonenumber`];
      const tshirt = formData[`participant${participantNumber}tshirtsize`];

      const isEmailValid = validateEmail(email);
      const isPhoneNumberValid = validatePhoneNumber(phone);
      const isTshirtSizeValid = validateTshirtSize(tshirt);

      if (!isEmailValid) {
        return `Invalid email for Participant ${participantNumber}`;
      } else if (!isPhoneNumberValid) {
        return `Invalid phone number for Participant ${participantNumber}`;
      } else if (!isTshirtSizeValid) {
        return `Invalid T-shirt size for Participant ${participantNumber}`;
      }

      return '';
    };

    // Validate coach
    const coachName = formData.coachname;
    const coachEmail = formData.coachemail;
    const coachPhone = formData.coachphonenumber;
    const coachTshirt = formData.coachtshirtsize;

    const isCoachEmailValid = validateEmail(coachEmail);
    const isCoachPhoneNumberValid = validatePhoneNumber(coachPhone);
    const isCoachTshirtSizeValid = validateTshirtSize(coachTshirt);

    if (!isCoachEmailValid) {
      return 'Invalid coach email';
    } else if (!isCoachPhoneNumberValid) {
      return 'Invalid coach phone number';
    } else if (!isCoachTshirtSizeValid) {
      return 'Invalid coach T-shirt size';
    }

    // Validate participants
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

    console.log(formData);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "teamName": formData.teamname,
      "university": formData.universityname === 'Other' ? formData.university : formData.universityname,
      "coach": {
        "name": formData.coachname,
        "email": formData.coachemail,
        "contact": formData.coachphonenumber,
        "tshirt": formData.coachtshirtsize
      },
      "participants": [
        {
          "name": formData.participant1name,
          "email": formData.participant1email,
          "contact": formData.participant1phonenumber,
          "tshirt": formData.participant1tshirtsize
        },
        {
          "name": formData.participant2name,
          "email": formData.participant2email,
          "contact": formData.participant2phonenumber,
          "tshirt": formData.participant2tshirtsize
        },
        {
          "name": formData.participant3name,
          "email": formData.participant3email,
          "contact": formData.participant3phonenumber,
          "tshirt": formData.participant3tshirtsize
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

    fetch(`${import.meta.env.VITE_API_URL}/api/v1/iupc`, requestOptions)
      .then(response => {
        console.log(response.status);
        if (response.status === 200 || response.status === 201) {
          navigate('/iupc', { state: { successMessage: 'Registration successful!' } })

        } else if (response.status === 400) {
          throw new Error("Registration Failed. User already exists or bad request made.");
        }
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log('error it is', error);
        setErrorMessage(error.message);
      });
  };
  return (
    <EventRegistrationPage title="IUPC" id="iupc">
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
          <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl '>
            <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Participant 1</span>
            <FormField label="Participant's name" name="participant1name" onChange={handleChange} />
            <FormField label="Email" type="email" name="participant1email" onChange={handleChange} />
            <FormField label="Phone number" type="tel" name="participant1phonenumber" onChange={handleChange} />
            <SelectField label="T-Shirt size" name="participant1tshirtsize" options={t_shirt_size} onChange={handleChange} />

          </div>
          <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
            <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Participant 2</span>
            <FormField label="Participant's name" name="participant2name" onChange={handleChange} />
            <FormField label="Email" type="email" name="participant2email" onChange={handleChange} />
            <FormField label="Phone number" type="tel" name="participant2phonenumber" onChange={handleChange} />
            <SelectField label="T-Shirt size" name="participant2tshirtsize" options={t_shirt_size} onChange={handleChange} />
          </div>

          <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
            <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Participant 3</span>
            <FormField label="Participant's name" name="participant3name" onChange={handleChange} />
            <FormField label="Email" type="email" name="participant3email" onChange={handleChange} />
            <FormField label="Phone number" type="tel" name="participant3phonenumber" onChange={handleChange} />
            <SelectField label="T-Shirt size" name="participant3tshirtsize" options={t_shirt_size} onChange={handleChange} />
          </div>

          <div className='flex flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
            <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">Coach</span>
            <FormField label="Coach's name" name="coachname" onChange={handleChange} />
            <FormField label="Email" type="email" name="coachemail" onChange={handleChange} />
            <FormField label="Phone number" type="tel" name="coachphonenumber" onChange={handleChange} />
            <SelectField label="T-Shirt size" name="coachtshirtsize" options={t_shirt_size} onChange={handleChange} />
          </div>
        </div>
        <div className='w-full flex justify-center my-10'>
          <PrimaryButton type="submit" text="Submit" />
        </div>
      </form>
    </EventRegistrationPage>
  );
};

export default IUPCRegistraion;

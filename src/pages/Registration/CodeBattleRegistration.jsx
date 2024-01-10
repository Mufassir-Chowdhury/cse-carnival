import React, { useState, useEffect } from 'react';
import { t_shirt_size, universities } from '../../data/data';
import { FormField, SelectField } from '../../components/Form';
import { EventRegistrationPage } from '../../components/EventPage';
import { PrimaryButton } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { validateEmail, validatePhoneNumber, validateTshirtSize } from '../../data/validate';

const CodeBattleRegistration = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    participantname: '',
    universityname: '',
    email: '',
    phonenumber: '',
    codebattleusername: '',
    tshirtsize: '',
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
    const isEmailValid = validateEmail(formData.email);
    const isPhoneNumberValid = validatePhoneNumber(formData.phonenumber);
    const isTshirtSizeValid = validateTshirtSize(formData.tshirtsize);

    if (!isEmailValid) {
      return 'Invalid email';
    } else if (!isPhoneNumberValid) {
      return 'Invalid phone number';
    } else if (!isTshirtSizeValid) {
      return 'Invalid T-shirt size';
    }

    return '';
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
      "name": formData.participantname,
      "email": formData.email,
      "university": formData.universityname === 'Other' ? formData.university : formData.universityname,
      "contact": formData.phonenumber,
      "username": formData.codebattleusername,
      "tshirt": formData.tshirtsize
    })
    console.log(raw);



    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    console.log(import.meta.env.VITE_API_URL)
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/coding-game`, requestOptions)
      .then(response => {
        console.log(response.status);
        if (response.status === 200 || response.status === 201) {
          navigate('/codebattle', { state: { successMessage: 'Registration successful!' } })

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
    <EventRegistrationPage title="Code Battle" id="codebattle">
      <ToastContainer className="mt-20" />
      <form method='post' className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-4'>
          <FormField label="Participant's Name" name="participantname" onChange={handleChange} />
          <div>
            <SelectField label="University Name" note="(Select other if the university is not in list)" name="universityname" options={universities} onChange={handleChange} />
            {formData.universityname === 'Other' && <FormField label="University Name" classValue='mt-4' name="university" onChange={handleChange} />}
          </div>
          <div className='flex flex-col  gap-y-2'>
            <FormField label="Email" type="email" name="email" onChange={handleChange} />
            <FormField label="Phone number" type="tel" name="phonenumber" onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-y-2'>
            <FormField label="CodingGame Username" note="Username in: www.codingame.com" name="codebattleusername" onChange={handleChange} />
            <SelectField label="T-Shirt size" name="tshirtsize" options={t_shirt_size} onChange={handleChange} />
          </div>
        </div>
        <div className='w-full flex justify-center my-10'>
          <PrimaryButton type="submit" text="Submit" />
        </div>
      </form>
    </EventRegistrationPage>
  );
};

export default CodeBattleRegistration;

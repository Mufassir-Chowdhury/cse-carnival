import React, { useState, useEffect } from 'react';
import { t_shirt_size } from '../../data/data';
import { FormField, SelectField } from '../../components/Form';
import { EventRegistrationPage } from '../../components/EventPage';
import { BigButton, PrimaryButton } from '../../components/Button';
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
    myHeaders.append("Access-Control-Allow-Origin", "*");

    const raw = JSON.stringify({
      "name": formData.participantname,
      "email": formData.email,
      "university": formData.universityname,
      "contact": formData.phonenumber,
      "username": formData.codebattleusername,
      "tshirt": formData.tshirtsize
    })


    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:1205/api/v1/coding-game", requestOptions)
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
          <FormField label="University Name" name="universityname" onChange={handleChange} />
          <div className='flex flex-col  gap-y-2'>
            <FormField label="Email" type="email" name="email" onChange={handleChange} />
            <FormField label="Phone number" type="tel" name="phonenumber" onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-y-2'>
            <FormField label="Code Battle Username (optional)" name="codebattleusername" onChange={handleChange} />
            <SelectField label="T-Shirt size" name="tshirtsize" options={t_shirt_size} onChange={handleChange} />
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <BigButton type="submit" text="Submit" />
        </div>
      </form>
    </EventRegistrationPage>
  );
};

export default CodeBattleRegistration;

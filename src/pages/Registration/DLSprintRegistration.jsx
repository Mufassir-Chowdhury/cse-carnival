import React, { useState, useEffect } from 'react';
import { t_shirt_size } from '../../data/data';
import { FormField, SelectField } from '../../components/Form';
import { EventRegistrationPage } from '../../components/EventPage';
import { PrimaryButton } from '../../components/Button';

import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { validateEmail, validatePhoneNumber, validateTshirtSize, validateGithubLink, validateLinkedinLink, validateKaggleLink } from '../../data/validate';


const DLSprintRegistration = () => {
  const [numberOfTeamMembers, setNumberOfTeamMembers] = useState(1);

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

  const validateOptionalFields = (formData, index) => {
    const githubKey = `member${index}githublink`;
    const linkedinKey = `member${index}linkedinid`;
    const kaggleKey = `member${index}kagglelink`;


    if (formData[githubKey] && !validateGithubLink(formData[githubKey])) {
      return `Invalid GitHub link for Member ${index}`;
    }

    if (formData[linkedinKey] && !validateLinkedinLink(formData[linkedinKey])) {
      return `Invalid LinkedIn link for Member ${index}`;
    }

    if (formData[kaggleKey] && !validateKaggleLink(formData[kaggleKey])) {
      return `Invalid Kaggle link for Member ${index}`;
    }

    return true; // Return true if optional fields are valid
  };

  const validateForm = () => {
    const validateParticipant = (participantNumber) => {
      const email = formData[`member${participantNumber}email`];
      const phone = formData[`member${participantNumber}phonenumber`];
      const tshirt = formData[`member${participantNumber}tshirtsize`];
      const githubKey = formData[`member${participantNumber}githublink`];
      const linkedinKey = formData[`member${participantNumber}linkedinid`];
      const kaggleKey = formData[`member${participantNumber}kagglelink`];

      const isEmailValid = validateEmail(email);
      const isPhoneNumberValid = validatePhoneNumber(phone);
      const isTshirtSizeValid = validateTshirtSize(tshirt);
      const isGithubLinkValid = !githubKey || (githubKey && validateGithubLink(githubKey));
      const isLinkedinLinkValid = !linkedinKey || (linkedinKey && validateLinkedinLink(linkedinKey));
      const isKaggleLinkValid = kaggleKey && validateKaggleLink(kaggleKey);


      if (!isEmailValid) {
        return `Invalid email for Participant ${participantNumber}`;
      } else if (!isPhoneNumberValid) {
        return `Invalid phone number for Participant ${participantNumber}`;
      } else if (!isTshirtSizeValid) {
        return `Invalid T-shirt size for Participant ${participantNumber}`;
      } else if (!isGithubLinkValid) {
        return `Invalid GitHub link for Participant ${participantNumber}. It should be in the format https://github.com/username`;
      } else if (!isLinkedinLinkValid) {
        return `Invalid LinkedIn ID for Participant ${participantNumber}. It should be in the format https://www.linkedin.com/in/username`;
      } else if (!isKaggleLinkValid) {
        return `Invalid Kaggle link for Participant ${participantNumber}. It should be in the format https://www.kaggle.com/username`;
      }


      return '';
    };


    // Validate participants
    for (let i = 1; i <= numberOfTeamMembers; i++) {
      const participantValidationResult = validateParticipant(i);
      if (participantValidationResult) {
        return participantValidationResult;
      }
      if (!validateOptionalFields(formData, i)) {
        return `Invalid optional fields for Member ${i}`;
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

    let formObject = {
      "teamName": formData.teamname,
      "teamLeaderEmail": formData.teamleaderemail,
      "participants": [],
    };
    if (numberOfTeamMembers >= 1) {
      formObject.participants.push({
        "name": formData.member1name,
        "email": formData.member1email,
        "contact": formData.member1phonenumber,
        "tshirt": formData.member1tshirtsize,
        "githubLink": formData.member1githublink,
        "linkedinLink": formData.member1linkedinid,
        "kaggleLink": formData.member1kagglelink,
        "university": formData.member1university,
        "jobTitle": formData.member1jobtitle,
        "studentId": formData.member1studentid,
        "country": formData.member1country
      });
    }
    if (numberOfTeamMembers >= 2) {
      formObject.participants.push({
        "name": formData.member2name,
        "email": formData.member2email,
        "contact": formData.member2phonenumber,
        "tshirt": formData.member2tshirtsize,
        "githubLink": formData.member2githublink,
        "linkedinLink": formData.member2linkedinid,
        "kaggleLink": formData.member2kagglelink,
        "university": formData.member2university,
        "jobTitle": formData.member2jobtitle,
        "studentId": formData.member2studentid,
        "country": formData.member2country
      });
    }
    if (numberOfTeamMembers >= 3) {
      formObject.participants.push({
        "name": formData.member3name,
        "email": formData.member3email,
        "contact": formData.member3phonenumber,
        "tshirt": formData.member3tshirtsize,
        "githubLink": formData.member3githublink,
        "linkedinLink": formData.member3linkedinid,
        "kaggleLink": formData.member3kagglelink,
        "university": formData.member3university,
        "jobTitle": formData.member3jobtitle,
        "studentId": formData.member3studentid,
        "country": formData.member3country
      });
    }
    if (numberOfTeamMembers >= 4) {
      formObject.participants.push({
        "name": formData.member4name,
        "email": formData.member4email,
        "contact": formData.member4phonenumber,
        "tshirt": formData.member4tshirtsize,
        "githubLink": formData.member4githublink,
        "linkedinLink": formData.member4linkedinid,
        "kaggleLink": formData.member4kagglelink,
        "university": formData.member4university,
        "jobTitle": formData.member4jobtitle,
        "studentId": formData.member4studentid,
        "country": formData.member4country
      });
    }
    const raw = JSON.stringify(formObject);
    console.log(raw);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${import.meta.env.VITE_API_URL}/api/v1/dl-sprint`, requestOptions)
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          navigate('/dlenigma', { state: { successMessage: 'Registration successful!' } })

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


  // const handleNumberOfTeamMembersChange = (e) => {
  //     setNumberOfTeamMembers(parseInt(e.target.value, 10));
  // };

  const handleNumberOfTeamMembersChange = (value) => {
    setNumberOfTeamMembers(value);
  };


  return (
    <EventRegistrationPage title="DL Engima 1.0 " id="dlsprint">
      <ToastContainer className="mt-20" />

      <form method='post' className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <FormField label="Team Name" name="teamname" onChange={handleChange} />
          <FormField label="Team Leader's Email" type='email' name="teamleaderemail" onChange={handleChange} />

        </div>
        <div className='flex flex-col gap-y-2 border-2 sm:shadow-xl sm:p-4 rounded-2xl items-center'>
          <span className="text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2">No of Team Members</span>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => handleNumberOfTeamMembersChange(value)}
                className={`rounded-md bg-field-body text-navbar px-4 py-2 focus:outline-none focus:bg-navbar-button focus:text-body`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>


        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {[...Array(numberOfTeamMembers)].map((_, index) => (
            <div key={index} className='flex w-full flex-col my-4 gap-y-2 sm:shadow-xl sm:p-4 rounded-2xl'>
              <span className={`text-2xl text-center sm:text-left font-serif font-bold text-field-title leading-6 pl-3 mb-2`}>{`Member ${index + 1}`}</span>
              <FormField label="Member's name" name={`member${index + 1}name`} onChange={handleChange} />
              <FormField label="Email" type="email" name={`member${index + 1}email`} onChange={handleChange} />
              <FormField label="Phone number" type="tel" name={`member${index + 1}phonenumber`} onChange={handleChange} />
              <FormField label="University/Organization" name={`member${index + 1}university`} onChange={handleChange} />
              <FormField label="Job Title/Position" name={`member${index + 1}jobtitle`} onChange={handleChange} example="Student, Software Engineer" />
              <FormField label="Student Id (Optional)" required={false} name={`member${index + 1}studentid`} onChange={handleChange} />
              <FormField label="Country" name={`member${index + 1}country`} onChange={handleChange} />
              <FormField label="Github link (Optional)" required={false} name={`member${index + 1}githublink`} onChange={handleChange} />
              <FormField label="LinkedIn Id (Optional)" required={false} name={`member${index + 1}linkedinid`} onChange={handleChange} />
              <FormField label="Kaggle Id link" name={`member${index + 1}kagglelink`} onChange={handleChange} />

              <SelectField label="T-Shirt size" name={`member${index + 1}tshirtsize`} options={t_shirt_size} onChange={handleChange} />
            </div>
          ))}
        </div>
        <div className='w-full flex justify-center my-10'>
          <PrimaryButton type="submit" text="Submit" />
        </div>
      </form>
    </EventRegistrationPage>
  );
};

export default DLSprintRegistration;

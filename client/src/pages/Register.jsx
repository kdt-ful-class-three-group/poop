import Input from "../components/Input.jsx"
import RegisterEmail from '../components/RegisterEmail';
import RegisterForm from '../components/RegisterForm';
import Terms from "../components/Terms.jsx"
import React, { useState } from 'react'
import RegisterNickname from "../components/RegisterNickname.jsx";
import RegisterBirth from "../components/RegisterBirth.jsx";
import {SignupProvider} from "../context/SignupContext.jsx";


function Register() {
  const [nextComponent, setNextComponent] = useState(1);



  const handleNext = () => {
    setNextComponent( prev => prev + 1);
  }
  const handleBack = () => {
    setNextComponent( prev => prev - 1);
  }


  return (
    <div className=" w-full h-full">
      <SignupProvider>
      {nextComponent === 1 && <Terms handleNext={handleNext}/>}
      {nextComponent === 2 && <RegisterForm handleNext={handleNext}/>}
      {nextComponent === 3 && <RegisterEmail handleNext={handleNext} handleBack={handleBack} />}
      {nextComponent === 4 && <RegisterBirth handleNext={handleNext} handleBack={handleBack} />}
      {nextComponent === 5 && <RegisterNickname handleNext={handleNext} handleBack={handleBack} />}
      </SignupProvider>
    </div>
  );
}

export default Register;
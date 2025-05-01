import Input from "../components/Input.jsx"
import RegisterEmail from '../components/RegisterEmail';
import RegisterForm from '../components/RegisterForm';
import Terms from "../components/Terms.jsx"
import { useState } from 'react'


function Register() {
  const [showEmail, setShowEmail] = useState(true);
  const [nextComponent, setNextComponent] = useState(1);

  const buttonClick = (e) => {
    setShowEmail(false);
  }

  const handleNext = () => {
    setNextComponent( prev => prev + 1);
  }


  return (
    <div className=" w-full h-full">
      {nextComponent === 1 && <Terms handleNext={handleNext}/>}
      {nextComponent === 2 && <RegisterForm handleNext={handleNext}/>}







      {/*{showEmail*/}
      {/*  ?*/}
      {/*  (*/}
      {/*
      {/*  )*/}
      {/*  : (<RegisterEmail />)}*/}
    </div>
  );
}

export default Register;
import Button from "./Button";
import Email from "./Email";
import {useContext, useState} from "react";
import { SignupContext } from "../context/SignupContext.jsx";

function RegisterEmail({handleNext, handleBack}) {

  const {signupData, updateSignupData} = useContext(SignupContext);

  console.log("현재 유저 가입 정보", signupData)

  const handleNickname = () => {

    handleNext();
  }

  const handlePrev = () => {

    handleBack();
  }



  return(
    <div className="flex flex-col gap-10 mt-20">
      <Button onclick={handlePrev} text='이전'
        colorClass={'bg-gray-300 w-[20%]'}
      />
      <Email/>
      <Button onclick={handleNickname} text='다음' colorClass={'bg-gray-300 mt-15'}/>
    </div>
  )
}

export default RegisterEmail;
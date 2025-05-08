import Button from "./Button";
import Email from "./Email";
import {useContext, useState} from "react";
import { SignupContext } from "../context/SignupContext.jsx";

function RegisterEmail({handleNext, handleBack}) {

  const {signupData, updateSignupData} = useContext(SignupContext);
  const [emailVerified, setEmailVerified] = useState(false);
  const [check, setCheck] = useState(null);
  const [email, setEmail] = useState("");


  const handleNickname = () => {
    if(!email || email.trim() === "") {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (!emailVerified) {
      alert("이메일 인증을 완료해주세요.");
      return;
    }

    const updated = {
      email:email
    }
    updateSignupData(updated);
    console.log("이메일을 받은 유저 정보", updated);
    console.log("이메일 업데이트된 유저 정보", signupData);


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
      <Email
        email={email}
        setEmail={setEmail}
        setEmailVerified={setEmailVerified}
      />
      <Button onclick={handleNickname} text='다음' colorClass={'bg-gray-300 mt-15'}/>
    </div>
  )
}

export default RegisterEmail;
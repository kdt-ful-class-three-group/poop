import Button from "./Button";
import {Fragment, useState} from "react";
import {verifyCode, verifyEmail} from "../api/fectchApi.js";
import {useContext} from "react";
import {SignupContext} from "../context/SignupContext.jsx";
import {validation} from "../functions/Validation.js";

function Email({email,setEmail,setEmailVerified}) {
  const {signupData, updateSignupData} = useContext(SignupContext);
  const [check, setCheck] = useState(null);
  const [authCode, setAuthCode] = useState("");




  const handleVerifyEmail = async ()=>{

    if(!email || email.trim() === "") {
      alert("이메일을 입력해주세요.");
      return;
    }


    try{
      const {status, data} = await verifyEmail(email);


      if(status === 200) {
        alert("인증번호가 발송되었습니다.");
        setCheck(true);
      } else{
        alert("인증번호 발송에 실패했습니다.");
        setCheck(false);
        e.preventDefault()


      }

    } catch (err) {
      console.error("이메일 인증 에러", err);
    }

  }
  const handleVerifyCode = async (e, code) => {
    if(!code || code.trim() === "") {
      alert("인증번호를 확인해주세요.");
      console.log("인증번호를 확인해주세요", code);
      return;
    }

    try{
      const {status, data} = await verifyCode(email,code);
      const updated ={
        email: email
      }

      if(status === 200) {
        alert("인증번호가 확인되었습니다.");
        setCheck(true);
        setEmailVerified(true);
        updateSignupData({email: email});
        updateSignupData(updated);
      } else{
        alert("인증번호 확인에 실패했습니다.");
        setCheck(false);

      }

    } catch (err) {
      console.log("인증번호 확인 에러", err);
    }
  }




  return(
    <div className="flex flex-col gap-1 w-full">
      {/* 이메일 */}
      <div className="flex flex-col gap-1">
        <p className="text-sm">이메일</p>
        <div className="flex justify-between">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-9/12 bg-gray-300 focus:bg-gray-100 px-2" required />
          <Button type="button" text='인증' onclick={ handleVerifyEmail} colorClass={'bg-gray-300'}/>
        </div>
        {check === false ?
          <p className="text-red-500 text-xs">인증번호 발송에 실패했습니다.</p>
          :

          check === true?
            <p className="text-green-500 text-xs">인증번호가 발송되었습니다.</p> &&
            <div>
            <input type="number" className="w-full bg-gray-300 focus:bg-gray-100 px-2 mt-2" onChange={(e) => setAuthCode(e.target.value)} placeholder="인증번호를 입력하세요." required />
            <Button type="button" onclick={(e)=>{handleVerifyCode(e, authCode)}} text='확인' colorClass={'bg-gray-300'}>인증확인</Button>
            </div>
            :
            null
        }
      </div>

    </div>
  )
}

export default Email;
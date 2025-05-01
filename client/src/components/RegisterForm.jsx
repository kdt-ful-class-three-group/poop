import {validation} from "../functions/Validation.js";
import {useState} from "react";
import Input from "./Input.jsx";


export default function RegisterForm({handleNext}) {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordCheck: "",
  })
  const {username, password, passwordCheck} = formData;
  const {valid, message} = validation(username, password, passwordCheck);
  const [error, setError] = useState("");


  const handleEmail = (e) => {


    e.preventDefault()
    if(!valid){
      setError(message);
      return;
    } else {
      handleNext()

    }

  }



  return(
    <div className="w-full h-full">
            <h1 className="justify-start items-left mt-20">회원가입</h1>
            <div className="h-100 flex flex-col justify-center items-center">
              <form className="w-full" onSubmit={handleEmail}>
                <label className="text-sm text-black mb-2 ">아이디</label>
                <Input type="text" name="username" autoFocus={true} />
                <label className="text-sm text-black mb-2">비밀번호</label>
                <Input type="password" name="password" />
                <label className="text-sm text-black mb-2">비밀번호 확인</label>
                <Input type="password" name="passwordCheck" />
                <button type="submit"
                  className="w-full h-8 text-center text-sm bg-gray-300 hover:bg-gray-500 py-2 rounded mt-4">
                  다음
                </button>
              </form>
            </div>
          </div>
  )
}
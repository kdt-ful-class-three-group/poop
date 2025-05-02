import {validation} from "../functions/Validation.js";
import {useEffect, useState} from "react";
import Input from "./Input.jsx";
import {useContext} from "react";
import {SignupContext} from "../context/SignupContext.jsx";
import {checkUserId} from "../api/fectchApi.js";


export default function RegisterForm({handleNext}) {

  const [check, setCheck] = useState(null);
  const [resultMsg, setResultMsg] = useState("");
  const {signupData, updateSignupData} = useContext(SignupContext);

  const checkDuplicateId = async (user_id) => {
    if(!user_id || user_id.trim() === "") {
      alert("아이디를 입력해주세요.");
      return;
    }

    try{
      const {status, data} = await checkUserId(user_id);

      if(status === 200) {
        setCheck(true);
        setResultMsg("사용 가능한 아이디입니다.");
      } else{
        setCheck(false);
        setResultMsg("이미 사용중인 아이디입니다.");
        return;
      }


    }catch(err) {
      console.log("중복확인 에러", err);
    }

  }


  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordCheck: "",
  })
  const {username, password, passwordCheck} = formData;
  const {valid, message} = validation(username, password, passwordCheck);
  const [error, setError] = useState("");




  const handleForward = (e) => {
    e.preventDefault();

    if(!check) {
      alert("아이디 중복확인을 해주세요.");
      return;
    }

    if (!valid) {
      setError(message);
      alert(message);
      return;
    }

    const updated = {
      user_id: username,
      password: password,
    };

    updateSignupData(updated);
    console.log("업데이트 요청한 값:", updated);

    handleNext();
  };
  useEffect(() => {
    console.log("회원가입 데이터 변경됨:", signupData);
  }, [signupData]);




  return(
    <div className="w-full h-full">
            <h1 className="justify-start items-left mt-20">회원가입</h1>
            <div className="h-100 flex flex-col justify-center items-center">
              <form className="w-full">

                <label className="text-sm text-black mb-2 ">아이디</label>

                <div className="flex flex-row">
                  <Input type="text" name="username" autoFocus={true} formData={formData} setFormData={setFormData}/>
                  <button type="button" onClick={() => checkDuplicateId(username)}
                          className="w-20 h-8 text-center text-sm bg-gray-300 hover:bg-gray-500 py-2 rounded ml-2">
                    중복확인
                  </button>
                  {
                    check === true ?
                      <div className="text-green-500 text-sm ml-2">{resultMsg}</div> :
                      check === false ?
                        <div className="text-red-500 text-sm ml-2">{resultMsg}</div> :
                        null
                  }
                </div>
                <label className="text-sm text-black mb-2">비밀번호</label>
                <Input type="password" name="password" formData={formData} setFormData={setFormData}/>
                <label className="text-sm text-black mb-2">비밀번호 확인</label>
                <Input type="password" name="passwordCheck" formData={formData} setFormData={setFormData}/>
                <button type="submit" onClick={handleForward}
                        className="w-full h-8 text-center text-sm bg-gray-300 hover:bg-gray-500 py-2 rounded mt-4">
                  다음
                </button>

              </form>
            </div>
    </div>
  )
}
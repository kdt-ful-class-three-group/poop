import Button from "./Button";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {fetchLogin} from "../Api/api.js";
import {validation} from "../functions/Validation.js";


function LoginInput(){

  const [formData, setFormData] = useState({
    user_id: "",
    password: ""
  })
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e)=>{

    const { user_id, password } = formData;
    const { valid, message } = validation(user_id, password);

    if (!valid) {
      alert(message);
      return;
    }

    e.preventDefault()
    if (!valid) {
      alert(message);
      return;
    }

    setError("");
    if(!formData.user_id || !formData.password){
      alert("올바른 값을 입력해주세요")
      return;
    }

    try{
      const data = await fetchLogin(formData);

      console.log("로그인 응답", formData);

        sessionStorage.setItem("user_id", data.user_id);
        sessionStorage.setItem("nickname", data.nickname);


      alert(`${data.nickname}님 환영합니다.`);

      navigate("/quiz")


    } catch(err){
      console.error("Login error:", err);
      setError("서버 연결에 실패했습니다.");
    }
  }





  return(
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input type="text" value={formData.user_id} onChange={(e)=>(setFormData({...formData, user_id: e.target.value}))} placeholder="아이디"
        className="bg-gray-300 px-4 py-2 rounded-md focus:bg-gray-100" required></input>
      <input type='password' value={formData.password} onChange={(e)=>{setFormData({...formData, password: e.target.value})}} placeholder="비밀번호"
        className="bg-gray-300 px-4 py-2 rounded-md focus:bg-gray-100" required></input>
      <Button type="submit" text='로그인' colorClass = "bg-gray-300"/>
    </form>
  )
}

export default LoginInput;
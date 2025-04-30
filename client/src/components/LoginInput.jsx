import Button from "./Button";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {fetchLogin} from "../Api/api.js";
import nav from "../commonComponents/Nav.jsx";

function LoginInput(){

  const [formData, setFormData] = useState({
    user_id: "",
    password: ""
  })
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e)=>{
    e.preventDefault()
    setError("");
    if(!formData.user_id || !formData.password){
      alert("올바른 값을 입력해주세요")
      return;
    }
    try{
      const response = await fetchLogin(formData.user_id, formData.password);
      console.log("로그인 응답", formData);

      sessionStorage.setItem("user_id", formData.user_id);
      alert(`로그인 성공 ${formData.user_id}님 안녕하세요`);
      navigate("/quiz")

    } catch(err){
      console.error("Login error:", err);
      setError("서버 연결에 실패했습니다.");
    }
  }
  useEffect(() => {
   if(sessionStorage.getItem("user_id")){
      alert(`${sessionStorage.getItem("user_id")}님 이미 로그인 되어 있습니다.`);
      navigate("/quiz")
    }
  }, []);




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
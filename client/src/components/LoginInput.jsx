import Button from "./Button";
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function LoginInput({autoLogin}){

  const navigate = useNavigate()
  // 아이디 입력
  // 비밀번호 입력
  // 로그인 버튼
  const [userId, setUserId] = useState('')
  const [pw,setPw] = useState('')

  const [text,setText]= useState('')


  const login = async()=>{

    const response = await fetch('http://localhost:8080/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      credentials:'include',
      body:JSON.stringify({user_id:userId,password:pw})
    })

    const result = await response.json()
    
    console.log(result)
    if(result.success){
      setText('')
      console.log(result.success)
      //성공하면 sessionStorage에 저장
      sessionStorage.setItem('user',result.user.user_id)
      // 성공하면 퀴즈로 이동
      navigate('/quiz')
    } else{
      setText(result.message)
      console.log(result.success)
    }
  }

  return(
    <form className="flex flex-col gap-2" onSubmit={(e)=>e.preventDefault()}>
      <input type="text" placeholder="아이디를 입력해주세요"
        className="bg-gray-300 px-4 py-2 rounded-md focus:bg-gray-100" maxLength={30} required value={userId} onChange={(e)=>setUserId(e.target.value)}></input>
      <input type='password' placeholder="비밀번호를 입력해주세요"
        className="bg-gray-300 px-4 py-2 rounded-md focus:bg-gray-100" required value={pw} onChange={(e)=>setPw(e.target.value)}></input>
      <p className="text-red-500">{text}</p>
      <Button text='로그인' colorClass = "bg-gray-300" clickEvent={()=>login()}/>
    </form>
  )
}

export default LoginInput;
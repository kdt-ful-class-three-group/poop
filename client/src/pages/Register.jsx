import Input from "../components/Input.jsx"
import RegisterEmail from '../components/RegisterEmail';
import { useEffect, useState } from 'react'

function Register() {

  //아이디 값
  const [user, setUser] = useState('')
  //비밀번호
  const [pw, setPw] = useState('')
  const [checkPw, setCheckPw] = useState('') //비밀번호 확인

  //다음화면 보여줄 것인지
  const [showEmail, setShowEmail] = useState(true);

  //메시지
  const [idText, setIdText] = useState('')

  //유저 데이터
  const [userData, setUserData]= useState([])
  //유저 가져오기
  useEffect(()=>{
    fetch('http://localhost:8080/register')
    .then(response => response.json())
    .then(data=> setUserData(data))
  },[])

  //제출 -> 아이디, 비밀번호 값 담기
  const userCheck = (e)=>{
    // 아이디 특수문자 안됨
    const input = e.target.value

    const hasChar = /[^a-zA-Z0-9]/
    
    if(hasChar.test(input)){
      setIdText('아이디에 특수문자는 포함할 수 없습니다')
    } else {
      setIdText('')
      setUser(input)
    }
  }

  useEffect(()=>{
    
    userData.forEach(data=>{
      if(user===data.user_id){
        setIdText('이미 존재하는 아이디입니다')
      } 
      if(user !== data.user_id){
        setIdText('사용 가능한 아이디입니다')
      }
      if(user.length===0) {
        setIdText('')
      }
    })
    
  },[user])

  
  const pwCheck = (e)=>{
    // 비밀번호 조건 충족
    
  }

  const samePwCheck =(e)=>{

  }


  //다음버튼 클릭이벤트
  const buttonClick = (e) => {
    setShowEmail(false);
  }

  return (
    <div className=" w-full h-full">
      {showEmail
        ?
        (
          <div className="w-full h-full">
            <h1 className="justify-start items-left mt-20">회원가입</h1>
            <div className="h-100 flex flex-col justify-center items-center">
              <form className="w-full" onSubmit={buttonClick}>
                <label className="text-sm text-black mb-2 ">아이디</label>
                <p className="text-red-500">{idText}</p>
                <Input type="text" name="username" value={user} changeEvent={(e)=>userCheck(e)}/>
                <label className="text-sm text-black mb-2">비밀번호</label>
                <Input type="password" name="password" value={pw} changeEvent={(e)=>pwCheck(e)} />
                <label className="text-sm text-black mb-2">비밀번호 확인</label>
                <Input type="password" name="passwordCheck" value={checkPw} changeEvent={(e)=>samePwCheck(e)} />
                <button type="submit"
                  className="w-full h-8 text-center text-sm bg-gray-300 hover:bg-gray-500 py-2 rounded mt-4">
                  다음
                </button>
              </form>
            </div>
          </div>
        )
        : (<RegisterEmail />)}
    </div>
  );
}

export default Register;
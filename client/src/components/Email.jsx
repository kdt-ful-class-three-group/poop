import { useState, useContext, useEffect } from 'react'
import Button from "./Button";
import { RegisterContext } from '../context/RegisterContext';

function Email({setFlag}){

  //이메일 입력값
  const [email, setEmail] = useState('')
  //이메일 관련 텍스트
  const [emailText, setEmailText] = useState('')
  //이메일 인증 값
  const [check,setCheck] = useState(null)
  //인증 관련 텍스트
  const [checkText, setCheckText] = useState('')
  //창고에 데이터 저장
  const {updateData} = useContext(RegisterContext)
  //버튼에 적용
  const [disabled, setDisabled] = useState(true)
  //인증 버튼
  const [isUnCheck, setIsUnCheck] = useState(true)


  //이메일 형식 체크
  const rightEmail =(e)=>{
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //입력창 활성화
    setEmail(e.target.value)

    const isCorrect =  pattern.test(e.target.value)


    if(!isCorrect){
      setEmailText('이메일 형식과 일치하지 않습니다')
      setIsUnCheck(true)
    } else {
      setEmailText('')
      setIsUnCheck(false)
    }
  }

  //인증버튼 클릭
  const checkCode = async(e)=>{
    e.preventDefault()
    try{
      const response = await fetch('http://localhost:8080/authEmail/sendCode',{
        method:'POST',
        //세션 유지
        credentials:'include',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email})
      })

      const data = await response.json()

      //응답
      if(response.ok){
        setCheckText('이메일에서 인증코드를 확인해주세요')
      } else {
        setCheckText('오류가 발생했습니다')
      }

    }
    catch(err){
      console.error(err)
    }
  }

  return(
    <div className="flex flex-col gap-1 w-full">
      {/* 이메일 */}
      <form className="flex flex-col gap-1">
        <p className="text-sm">이메일</p>
        <div className="flex justify-between">
          <input type="text" className="w-9/12 bg-gray-300 focus:bg-gray-100" onChange={(e)=>rightEmail(e)} name='email' value={email}/>
          <Button text='인증' colorClass={'bg-gray-300'} disabled={isUnCheck} clickEvent={(e)=>checkCode(e)}/>
        </div>
        <p className="text-xs text-red-500">{emailText}</p>
      </form>
      {/* 이메일 인증 */}
      <div className="flex flex-col gap-1">
        <p className="text-sm" >이메일 인증</p>
        <input type='number' name='code' className="w-full bg-gray-300 py-2 focus:bg-gray-100" value={check} onChange={(e)=>setCheck(e.target.value)}/>
        <p className="text-xs text-red-500">{checkText}</p>
      </div>
      <button type="submit"
              className="w-full h-8 text-center text-sm bg-gray-300 hover:bg-gray-500 py-2 rounded mt-4" disabled={disabled}>다음</button>
    </div>
  )
}

export default Email;
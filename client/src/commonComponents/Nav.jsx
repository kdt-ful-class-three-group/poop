import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Nav() {

  //상태값
  const [open, setOpen] = useState(false);

  //링크로 이동할 useNavigate
  const navigate = useNavigate()

  //버튼 정보 배열
  const buttonClass= [
    {text:'유머', name :'bottom-1/2 left-[20px]', action:()=>navigate('/Quiz')},
    {text:'커뮤니티', name:'top-[20px] left-1/2 transform -translate-x-1/2 top-[20px]',action:()=>navigate('/Community')},
    {text:'마이',name:'bottom-1/2 right-[20px]',action:()=>navigate('/Mypage')},
    {text:'닫기',name:'bottom-1/2 left-1/2 transform -translate-x-1/2',action:()=>setOpen(open)}
  ]

  //동일하게 적용되는 클래스
  let defaultClass= `absolute w-[70px] h-[70px] bg-gray-400 transition-all duration-500 ease-in-out cursor-pointer rounded-full flex items-center justify-center ${open ? 'opacity-100' : 'opacity-0'}`

  return(
    //작은 버튼 - 클릭 -> 큰 버튼으로 변경
    <div
      onClick={() => setOpen(!open)}
      className={`fixed left-1/2 transform -translate-x-1/2 bg-gray-200 overflow-hidden transition-all duration-500 ease-in-out cursor-pointer rounded-full ${
        open ? 'w-[450px] h-[450px] bottom-[-200px]' : 'w-[70px] h-[70px] bottom-[20px]'
      }`}
    >
      {/* 각역할을 가지는 버튼 div */}
      {buttonClass.map((div,i)=>(
        <div 
        key={i}
        className= {`${defaultClass} ${div.name}`}
        onClick={div.action}
        >{div.text}</div>
      ))}
      
    </div>
  );
}

export default Nav;
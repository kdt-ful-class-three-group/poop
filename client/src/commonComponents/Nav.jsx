import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Nav() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate()

  //버튼 정보 배열
  const buttonClass= [
    {text:'유머', name :'bottom-1/2 left-[20px]', action:()=>navigate('/Quiz')},
    {text:'커뮤니티', name:'top-[20px] left-1/2 transform -translate-x-1/2 top-[20px]',action:()=>navigate('/Community')},
    {text:'마이',name:'bottom-1/2 right-[20px]',action:()=>navigate('/Mypage')},
    {text:'닫기',name:'bottom-1/2 left-1/2 transform -translate-x-1/2',action:()=>setOpen(open)}
  ]

  let defaultClass= `absolute w-[70px] h-[70px] bg-gray-400 transition-all duration-500 ease-in-out cursor-pointer rounded-full flex items-center justify-center ${open ? 'opacity-100' : 'opacity-0'}`

  return(
    <div
      onClick={() => setOpen(!open)}
      className={`fixed left-1/2 transform -translate-x-1/2 bg-gray-200 rounded-full overflow-hidden transition-all duration-500 ease-in-out cursor-pointer rounded-full ${
        open ? 'w-[450px] h-[450px] bottom-[-200px]' : 'w-[70px] h-[70px] bottom-[20px]'
      }`}
    >
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
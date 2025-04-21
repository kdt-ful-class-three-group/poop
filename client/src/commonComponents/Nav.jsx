import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Nav() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate()

  return(
    <div
      onClick={() => setOpen(!open)}
      className={`fixed left-1/2 transform -translate-x-1/2 bg-gray-200 rounded-full overflow-hidden transition-all duration-500 ease-in-out cursor-pointer rounded-full ${
        open ? 'w-[450px] h-[450px] bottom-[-200px]' : 'w-[70px] h-[70px] bottom-[20px]'
      }`}
    >
      {/* 버튼 1 */}
      <div className={`absolute w-[70px] h-[70px] bg-gray-400 bottom-1/2 left-[20px] transition-all duration-500 ease-in-out cursor-pointer rounded-full flex items-center justify-center ${
        open ? 'opacity-100' : 'opacity-0'
      }`} onClick={()=>navigate('/Quiz')}>
        유머
      </div>
      
      {/* 버튼 2 */}
      <div className={`absolute w-[70px] h-[70px] bg-gray-400 left-1/2 transform -translate-x-1/2 top-[20px] transition-all duration-500 ease-in-out cursor-pointer rounded-full flex items-center justify-center ${
        open ? 'opacity-100' : 'opacity-0'
      }`} onClick={()=>navigate('/Community')}>
        커뮤니티
      </div>

      {/* 버튼 3 */}
      <div className={`absolute w-[70px] h-[70px] bg-gray-400 bottom-1/2 right-[20px] transition-all duration-500 ease-in-out cursor-pointer rounded-full flex items-center justify-center ${
        open ? 'opacity-100' : 'opacity-0'
      }`} onClick={()=>navigate('/Mypage')}>
        마이
      </div>

      {/* 버튼 4 */}
      <div className={`absolute w-[70px] h-[70px] bg-gray-400 bottom-1/2 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out cursor-pointer rounded-full flex items-center justify-center ${
        open ? 'opacity-100' : 'opacity-0'
      }`} onClick={()=>setOpen(open)}>
        닫기
      </div>
    </div>
  );
}

export default Nav;
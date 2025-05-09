import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LoginContext } from "../context/loginContext";
import Button from "../components/Button";

function CommunityDetail() {
  //Community에서 link로 전달받은 state
  const location = useLocation()
  //데이터
  const [data, setData] = useState({})
  //날짜
  const [day, setDay] = useState('')
  //로그인 상태
  const {isLogin} = useContext(LoginContext)
  //로그인 > 닉네임 가져오기
  const [nick, setNick] = useState(sessionStorage.getItem('user_nick'),'')

  useEffect(()=>{
    setData(location.state)
    setDay((data.date||'').split('T')[0].replace(/-/g,'.'))
    console.log('로그인 nick',nick)
    console.log('작성자 nick',data.nickname)
  },[data])


  return (
    <div className="w-full">
      <div>
        <h2 className="text-xl">커뮤니티 상세</h2>
      </div>
      {
        isLogin ? 
        <>
          <div className="">
            <Button text={'수정'} colorClass={'bg-gray-300'}/>
            <Button text={'삭제'} colorClass={'bg-gray-300'}/>
          </div>
        </>
        :
        <></>
      }
      <div className="mt-6 mb-1">
        <h4 className="text-xl">{data.title}</h4>
      </div>
      <div className="flex items-center border-b border-[#d9d9d9] pb-1 mb-1">
        <p className="text-sm mr-2">{data.nickname}</p>
        <span className="text-xs">{day}</span>
      </div>
      <div className="flex items-center mb-5">
        <div className="mr-3">
          <img src="" alt="" />
          <p className="text-sm">{data.recommand_amout}</p>
        </div>
        <div>
          <img src="" alt="" />
          <p className="text-sm">{data.view_amout}</p>
        </div>
      </div>
      <div>
        <p className="text-base">{data.content}</p>
      </div>
      <div className="flex items-center mt-3 mb-3">
        <button className="text-sm">
          <img src="" alt="" />
          <p>추천</p>
        </button>
        <button className="text-sm">
          <img src="" alt="" />
          <p>즐찾</p>
        </button>
      </div>
      <div className="border-[1px] flex border-[#D9D9D9]/70 mb-3">
        <input
          className="w-full outline-none p-2 text-sm"
          type="text"
          placeholder="댓글을 입력해주세요."
        />
        <button className="bg-[#8E5E43] border-[#8E5E43] p-2 rounded-[0px_3px_3px_0px] text-white whitespace-nowrap text-sm">
          확인
        </button>
      </div>
      <div>
        <p className="text-lg">댓글</p>
        <div className="flex items-center border-b border-[#d9d9d9] pb-1 mb-1">
          <p className="text-sm mr-2">닉네임</p>
          <span className="text-xs">2025.04.02</span>
        </div>
      </div>
    </div>
  );
}

export default CommunityDetail;

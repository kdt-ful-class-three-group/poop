import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../context/loginContext";
import Button from "../components/Button";

function CommunityDetail() {
  // params
  const params = useParams()
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
  //동일한지
  const [isSame, setIsSame] = useState(false)
  //네비게이터
  const navigate = useNavigate()
  useEffect(()=>{
    fetch(`http://localhost:8080/community/post/${params.board_id}`)
    .then(response => response.json())
    .then(i => {
      setData(i[0])
    })
  },[])
  
  useEffect(()=>{
    setDay((data.date||'').split('T')[0].replace(/-/g,'.'))
    console.log(data)
    console.log('로그인 nick',nick)
    console.log('작성자 nick',data.nickname)
    setIsSame(nick===data.nickname)
    // setData(location.state)
  },[data,isLogin])

  //삭제 함수
  const deleteBtn = async(e)=>{
    e.preventDefault()

    console.log('삭제 요청',data.board_id)

    //fetch
    const response = await fetch(`http://localhost:8080/community/delete/${data.board_id}`,{
      method:'DELETE'
    })

    
    if(response.ok){
      // 삭제 후 목록으로 이동
      navigate('/community')
    } else {
      alert('삭제 실패했습니다')
    }
    // const result = await response.json()
  }

  return (
    <div className="w-full">
      <div>
        <h2 className="text-xl">커뮤니티 상세</h2>
      </div>
      {
        isLogin && isSame ? 
        <>
          <div className="">
            <Link to={`/community/write/${data.board_id}`} state={data}>
            <Button text={'수정'} colorClass={'bg-gray-300'}/>
              </Link>
            <Button text={'삭제'} colorClass={'bg-gray-300'} clickEvent={(e)=>deleteBtn(e)}/>
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

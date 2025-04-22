import { useNavigate } from "react-router";

function NavDiv({navRef, btnClick, closeNav}){

  const navigate = useNavigate();



    return(
      <div
        ref={navRef} // 이 안에 있는 요소는 이벤트 방지함
        className={`bg-[#D9D9D9] absolute flex-col items-center bottom-0 justify-center p-4 w-full rounded-t-full h-[230px] ${
          btnClick ? "flex" : "hidden"
        }`}
      >
        <div className="flex">
          <button
            onClick={() => {
              navigate("/Community");
            }}
          >
            커뮤니티
          </button>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              navigate("/Quiz");
            }}
          >
            유머
          </button>
          <button onClick={closeNav}>닫기</button>
          <button
            onClick={() => {
              navigate("/Mypage");
            }}
          >
            마이페이지
          </button>
        </div>
      </div>
    )
}

export default NavDiv;
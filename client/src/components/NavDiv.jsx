import { useNavigate } from "react-router-dom";

function NavDiv({navRef, btnClick, closeNav}){

  const navigate = useNavigate();



    return(
      <div
        ref={navRef} // 이 안에 있는 요소는 이벤트 방지함
        className={`bg-gray-200 absolute flex-col items-center bottom-0 justify-center gap-20 p-4 w-full rounded-t-full h-[230px] max-w-[450px] max-h-[450px] transition-all duration-300 ease-in-out ${
          btnClick ? "flex opacity-100 pointer-events-auto" : "flex pointer-events-none opacity-0"
        }`}
      >
        <div className="flex">
          <button className="cursor-pointer hover:font-bold"
            onClick={() => {
              navigate("/Community");
            }}
          >
            커뮤니티
          </button>
        </div>
        <div className="flex justify-between items-center w-full">
          <button className="cursor-pointer flex-1 text-center hover:font-bold"
            onClick={() => {
                navigate("/Quiz");
              }}
              >
              유머
              </button>
              <button
              className="flex-1 text-center cursor-pointer  hover:font-bold"
              onClick={closeNav}
              >
              닫기
              </button>
              <button
              className="flex-1 text-center cursor-pointer  hover:font-bold"
              onClick={() => {
              navigate("/Login");
            }}
          >
            로그인
          </button>
        </div>
      </div>
    )
}

export default NavDiv;
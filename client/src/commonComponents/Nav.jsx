import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const [btnClick, setBtnClick] = useState(false);
  // Ref로 dom 찾는 방법 처음은 null > 이후 랜더링 되면 ref={navRef}를 가진 요소를 찾아줌
  const navRef = useRef(null);

  const showNav = (event) => {
    event.stopPropagation(); // 이벤트가 전파되는것을 방지하는 코드 // 이게 없으면 navRef 이 요소 외의 것들을 클릭하면 navRef이 요소는 닫히게 되어있는데
    setBtnClick(true);
  };

  const closeNav = () => {
    setBtnClick(false);
  };

  // 화면의 다른 곳을 클릭하면 Nav를 닫음
  useEffect(() => {
    const handleClickOutside = (event) => {
      // navRef.current = ref={navRef}를 가진 요소를 찾아줌
      // navRef.current.contains(event.target) = 클릭한 곳이 navRef 영역 안에 포함되는지 체크함
      if (navRef.current && !navRef.current.contains(event.target)) {
        setBtnClick(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      // 컴포넌트가 언마운트 될 때 이벤트 리스너를 제거함 / 이유는 메모리 누수, 중복 실행을 막기 위해 정리하는 것.
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute bottom-0 transform -translate-x-50% w-full rounded-t-2xl flex items-center justify-center">
      <button
        onClick={showNav}
        className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#D9D9D9] p-2 mb-7 cursor-pointer"
      ></button>
      <div
        ref={navRef} // 이 안에 있는 요소는 이벤트 방지함
        className={`bg-[#D9D9D9] absolute flex-col items-center justify-center p-4 w-full rounded-t-full h-[230px] ${
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
    </div>
  );
}

export default Nav;

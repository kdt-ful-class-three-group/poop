import { useNavigate } from "react-router-dom";
import poopTimeApi from "../services/poopTimeApi.js";
function Mypage() {
  const navigate = useNavigate();
  const usernick = sessionStorage.getItem("nickname");
  const logOutFun = async () => {
    const logOutApi = await poopTimeApi("logout", "post");
    console.log(logOutApi);
    // const logoutData = await Response.json();
    if (logOutApi.success) {
      sessionStorage.clear();
      navigate("/quiz"); // 로그인 성공 시 /quiz로 이동
      console.log("로그아웃 성공");
    }
  };
  return (
    <div className="w-full">
      <div className="mb-4">
        <button>
          <img src="./public/img/arrowLeft.svg" alt="" />
        </button>
      </div>
      <div className="flex items-center pb-3 mb-3 ">
        <img className="w-[40px]" src="./public/img/poopNameImg.svg" alt="" />
        <h4 className="text-xm ml-4">{usernick}</h4>
      </div>
      <div className="flex items-center justify-between shadow-[0_0_5px_0_rgba(0,0,0,0.1),_0_0_1px_0_rgba(0,0,0,0.1)] p-3 mb-2">
        <p className="text-sm">회원정보</p>
        <img src="./public/img/arrowRight.svg" alt="" />
      </div>
      <div className="flex items-center justify-between shadow-[0_0_5px_0_rgba(0,0,0,0.1),_0_0_1px_0_rgba(0,0,0,0.1)] p-3 mb-2">
        <p className="text-sm">내가 맞춘 퀴즈</p>
        <img src="./public/img/arrowRight.svg" alt="" />
      </div>
      <div className="flex items-center justify-between shadow-[0_0_5px_0_rgba(0,0,0,0.1),_0_0_1px_0_rgba(0,0,0,0.1)] p-3 mb-2">
        <p className="text-sm">내가 본 컨텐츠</p>
        <img src="./public/img/arrowRight.svg" alt="" />
      </div>
      <div className="flex items-center justify-between shadow-[0_0_5px_0_rgba(0,0,0,0.1),_0_0_1px_0_rgba(0,0,0,0.1)] p-3 mb-2">
        <p className="text-sm">나의 즐겨찾기 컨텐츠</p>
        <img src="./public/img/arrowRight.svg" alt="" />
      </div>
      <div className="flex items-center justify-between shadow-[0_0_5px_0_rgba(0,0,0,0.1),_0_0_1px_0_rgba(0,0,0,0.1)] p-3 mb-2">
        <p className="text-sm">내가 추천한 컨텐츠</p>
        <img src="./public/img/arrowRight.svg" alt="" />
      </div>
      <div className="flex items-center justify-between shadow-[0_0_5px_0_rgba(0,0,0,0.1),_0_0_1px_0_rgba(0,0,0,0.1)] p-3 mb-2">
        <p className="text-sm">고객센터</p>
        <img src="./public/img/arrowRight.svg" alt="" />
      </div>
      <div className="flex items-center justify-between shadow-[0_0_5px_0_rgba(0,0,0,0.1),_0_0_1px_0_rgba(0,0,0,0.1)] p-3 mb-2">
        <p className="text-sm">개인정보 처리방침</p>
        <img src="./public/img/arrowRight.svg" alt="" />
      </div>
      <button
        onClick={logOutFun}
        className="flex w-full items-center mt-4 justify-center text-[#888888] text-xs"
      >
        로그아웃
      </button>
    </div>
  );
}

export default Mypage;

// 계정 입력
import LoginInput from "../components/LoginInput";
// 계정 찾기
import FindAccount from "../components/FindAccount";
// 간편 로그인
import EasyLogin from "../components/EasyLogin";
//버튼 컴포넌트
import Button from "../components/Button";

import { useNavigate } from "react-router-dom";
import poopTimeApi from "../services/poopTimeApi";
// import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  // const [loginData, setLoginData] = useState("");
  // 아이디 작성
  // 비밀번호 작성
  // 로그인 버튼
  // 자동로그인 선택
  // 아이디찾기 / 비밀번호 찾기
  // 간편로그인 3개
  // 회원가입 - 라우터
  // const checkSession = async () => {
  //   const response = await fetch("http://localhost:8080/loginCheck", {
  //     method: "GET",
  //     credentials: "include", // 세션 쿠키 포함
  //   });
  //   const data = await response.json();
  //   console.log("세션 상태:", data);
  // };

  const poopLoginFunApi = async (username, password) => {
    try {
      const poopLoginApi = await poopTimeApi("login", "post", {
        user_id: username,
        password: password,
      });
      console.log("서버 응답:", poopLoginApi);
      if (poopLoginApi.success) {
        console.log("로그인 성공");
        navigate("/quiz"); // 로그인 성공 시 /quiz로 이동
      } else {
        console.log("로그인 실패:", poopLoginApi.msg);
      }
      return poopLoginApi;
    } catch (error) {
      console.error("로그인 데이터 요청 실패", error);
    }
  };

  return (
    <div className="flex flex-col justify-center h-full w-full gap-3">
      <h1 className="text-2xl mb-[30px]">로그인</h1>
      <LoginInput loginData={poopLoginFunApi} />
      <FindAccount />
      <EasyLogin />
      <Button
        text="회원가입"
        colorClass={""}
        clickEvent={() => navigate("/Terms")}
      />
    </div>
  );
}

export default Login;

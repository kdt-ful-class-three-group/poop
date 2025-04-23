// 계정 입력
import LoginInput from "../components/LoginInput";
// 계정 찾기
import FindAccount from "../components/FindAccount";
// 간편 로그인
import EasyLogin from "../components/EasyLogin";
//버튼 컴포넌트
import Button from "../components/Button";

import { useNavigate } from "react-router-dom";

function Login() {

  // 아이디 작성
  // 비밀번호 작성
  // 로그인 버튼
  // 자동로그인 선택
  // 아이디찾기 / 비밀번호 찾기
  // 간편로그인 3개
  // 회원가입 - 라우터
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center h-full w-full gap-3">
      <h1 className="text-2xl mb-[30px]">로그인</h1>
      <LoginInput/>
      <FindAccount/>
      <EasyLogin/>
      <Button text='회원가입' colorClass={''} clickEvent={()=>navigate('/Register')}/>
    </div>
  );
}

export default Login;
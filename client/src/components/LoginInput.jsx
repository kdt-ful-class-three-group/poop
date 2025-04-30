import { useState } from "react";
import Button from "./Button";
import { useAuth } from "../layout/AuthContext.jsx";

function LoginInput({ loginData }) {
  // 아이디 입력
  // 비밀번호 입력
  // 로그인 버튼
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const loginBtnClick = (e) => {
    e.preventDefault();
    loginData(username, password).then((res) => {
      if (res.success) {
        sessionStorage.setItem("userId", username);
        sessionStorage.setItem("nickname", res.user_nick);

        login({ userId: username });
      } else {
        console.log("로그인 실패");
      }
    });
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={loginBtnClick}>
      <input
        type="text"
        placeholder="아이디"
        value={username}
        onChange={(e) => {
          const value = e.target.value;
          // 특수문자를 제외한 값만 허용
          const filteredValue = value.replace(/[^a-zA-Z0-9]/g, ""); // 영문자와 숫자만 허용
          setUsername(filteredValue);
        }}
        className="bg-gray-300 px-4 py-2 rounded-md focus:bg-gray-100"
        required
      ></input>
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => {
          const value = e.target.value;
          // 특수문자를 제외한 값만 허용
          const filteredValue = value.replace(/[^a-zA-Z0-9]/g, ""); // 영문자와 숫자만 허용
          setPassword(filteredValue);
        }}
        className="bg-gray-300 px-4 py-2 rounded-md focus:bg-gray-100"
        required
      ></input>
      <Button text="로그인" colorClass="bg-gray-300" />
    </form>
  );
}

export default LoginInput;

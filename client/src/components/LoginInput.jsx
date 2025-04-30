import { useState } from "react";
import Button from "./Button";

function LoginInput({ loginData }) {
  // 아이디 입력
  // 비밀번호 입력
  // 로그인 버튼
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginBtnClick = (e) => {
    e.preventDefault();
    loginData(username, password);
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={loginBtnClick}>
      <input
        type="text"
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-gray-300 px-4 py-2 rounded-md focus:bg-gray-100"
        required
      ></input>
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-gray-300 px-4 py-2 rounded-md focus:bg-gray-100"
        required
      ></input>
      <Button text="로그인" colorClass="bg-gray-300" />
    </form>
  );
}

export default LoginInput;

import Input from "../components/Input.jsx"
import RegisterEmail from '../components/RegisterEmail';
import React, {useState, useEffect } from "react";

function Register() {
  const [showEmail, setShowEmail] = useState(true);
  const [username, setUsername] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordCheckVisible, setIsPasswordCheckVisible] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // 아이디 중복 체크 함수
  const checkUsername = async (username) => {
    try {
      const response = await fetch('http://localhost:8080/login/check-username', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
      const data = await response.json();
      if (data.available) {
        setUsernameMessage("사용 가능한 아이디입니다.");
      } else {
        setUsernameMessage("이미 사용 중인 아이디입니다.");
      }
    } catch (error) {
      console.error("Error checking username:", error);
    }
  };

  useEffect(() => {
    if (username) {
      checkUsername(username); // 아이디가 변경될 때마다 중복 체크 실행
    }
  }, [username]);

  // 비밀번호 유효성 검사
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // 최소 8자, 문자와 숫자 포함
    return regex.test(password);
  };

  // 비밀번호 확인 유효성
  const isPasswordMatch = password === passwordCheck;

  // "다음" 버튼 활성화 여부
  useEffect(() => {
    if (username && password && passwordCheck) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [username, password, passwordCheck]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const togglePasswordCheckVisibility = () => {
    setIsPasswordCheckVisible(!isPasswordCheckVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault() ;
    // 회원가입 로직
  };


  const buttonClick = (e) => {
    setShowEmail(false);
  }

  return (
    <div className="w-full h-full">
      <h1 className="justify-start items-left mt-20">회원가입</h1>
      <div className="h-100 flex flex-col justify-center items-center">
        <form className="w-full" onSubmit={handleSubmit}>
          <label className="text-sm text-black mb-2">아이디</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <p className="text-sm text-gray-500">{usernameMessage}</p>

          <label className="text-sm text-black mb-2">비밀번호</label>
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-2"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-2"
            >
              👁️
            </button>
          </div>
          <p className="text-sm text-gray-500">
            {validatePassword(password) ? "유효한 비밀번호입니다." : "8자 이상, 영문, 숫자, 특수문자 포함"}
          </p>

          <label className="text-sm text-black mb-2">비밀번호 확인</label>
          <input 
            type={isPasswordCheckVisible ? "text" : "password"}
            name="passwordCheck"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <p className={`test-sm ${isPasswordMatch ? "text-green-500" : "text-red-500"}`}>
            {isPasswordMatch ? "비밀번호가 일치합니다." : "다시 입력해주세요"}
          </p>

          <button
            type="submit"
            className={`w-full h-8 text-center text-sm bg-gray-300 hover:bg-gray-500 py-2 rounded mt-4 ${isButtonEnabled ? "bg-blue-500" : "bg-gray-300"}`}
            disabled={!isButtonEnabled}
          >
            다음
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
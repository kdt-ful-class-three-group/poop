// commponent/Register.jsx
import React, { useState, useEffect } from "react";
import { userRegister } from "../context/registerContext";

function Register({nextHandle}) {
  const {formData, updateFormData} = userRegister();
  const [showEmail, setShowEmail] = useState(true);
  const [usernameMessage, setUsernameMessage] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordCheckVisible, setIsPasswordCheckVisible] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const { username, password } = formData;


  // 아이디 중복 체크 함수
  const checkUsername = async (username) => {
    try {
      const response = await fetch("http://localhost:8080/login/check-username", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
        credentials: "same-origin",
      });
      const data = await response.json();
      setUsernameMessage(data.available ? "사용 가능한 아이디입니다." : "이미 사용 중인 아이디입니다.");
    } catch (error) {
      console.error("Error checking username:", error);
    }
  };

  useEffect(() => {
    if (username) checkUsername(username);
  }, [username]);

  // 비밀번호 유효성 검사
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const isPasswordMatch = password === passwordCheck;

  useEffect(() => {
    const isUsernameValid = username.length > 0 && usernameMessage === "사용 가능한 아이디입니다.";
    const isValidPassword = validatePassword(password);
    const isFormValid = isUsernameValid && isValidPassword && passwordCheck.length > 0 && isPasswordMatch;

    setIsButtonEnabled(isFormValid);
  }, [username, password, passwordCheck, usernameMessage, isPasswordMatch]);

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);
  const togglePasswordCheckVisibility = () => setIsPasswordCheckVisible((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isButtonEnabled) {
      nextHandle(); // 다음 단계로 이동
    }
  };

  return (
    <div className="w-full h-full px-4">
      {showEmail ? (
        <>
          <h1 className="text-xl font-bold mt-20 mb-8">회원가입</h1>
          <div className="flex flex-col justify-center items-center">
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
              <label className="text-sm text-black mb-1">아이디</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => updateFormData("username", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-1"
                required
              />
              <p className="text-sm mb-2">{usernameMessage}</p>

              <label className="text-sm text-black mb-1">비밀번호</label>
              <div className="relative mb-2">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => updateFormData("password", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-2 text-gray-600"
                >
                  👁️
                </button>
              </div>
              <p className="text-sm mb-2 text-gray-600">
                {validatePassword(password)
                  ? "유효한 비밀번호입니다."
                  : "영문/숫자/특수문자 포함 8자 이상 입력해주세요."}
              </p>

              <label className="text-sm text-black mb-1">비밀번호 확인</label>
              <div className="relative mb-2">
                <input
                  type={isPasswordCheckVisible ? "text" : "password"}
                  name="passwordCheck"
                  value={passwordCheck}
                  onChange={(e) => setPasswordCheck(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordCheckVisibility}
                  className="absolute right-2 top-2 text-gray-600"
                >
                  👁️
                </button>
              </div>
              <p className={`text-sm mb-2 ${isPasswordMatch ? "text-green-500" : "text-red-500"}`}>
                {isPasswordMatch ? "비밀번호가 일치합니다." : "비밀번호가 다릅니다."}
              </p>

              <button
                type="submit"
                className={`w-full py-2 rounded text-white text-sm ${
                  isButtonEnabled ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"
                }`}
                disabled={!isButtonEnabled}
              >
                다음
              </button>
            </form>
          </div>
        </>
      ) : (
        <RegisterEmail />
      )}
    </div>
  );
}

export default Register;

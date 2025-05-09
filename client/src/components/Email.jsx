// src/components/Email.jsx
import { useState, useEffect } from "react";
import { userRegister } from "../context/RegisterContext";

function Email({ nextHandle }) {
  const [email, setemail] = useState('');
  const [isEmailVaild, setIsEmailVaild] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [authCode, setAuthCode] = useState(''); // 사용자가 입력하는 인증번호
  const [sentCode, setSentCode] = useState(''); // 서버에서 보낸 인증번호
  const [isCodeMatch, setIsCodeMatch] = useState(null); // null: 아직 입력 안 함, true/false
  const { updateFormData } = userRegister();
  // 이메일 정규식 검사
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  useEffect(() => {
    setIsEmailVaild(validateEmail(email));
    setShowEmailError(email !== "" && !validateEmail(email));
  }, [email]);

  // 인증코드 전송
  const handleSendCode = async () => {
    try {
      const res = await fetch("http://localhost:8081/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // 세션 유지 필수!
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      alert("이메일이 전송되었습니다."); // "이메일이 전송되었습니다"
    } catch (err) {
      console.error(err);
      alert("인증번호 전송 실패!");
    }
  };

  const handleCheckCode = async (e) => {
    const value = e.target.value;
    setAuthCode(value);
    setIsCodeMatch(value);

    if (value.length === 6) {
      try {
        const res = await fetch("http://localhost:8081/email/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ code: value }),
        });

        const data = await res.json();
        setIsCodeMatch(data.success); // true or false
      } catch (err) {
        console.error(err);
        alert("인증번호 확인 실패!");
      }
    } else {
      setIsCodeMatch(null);
    }
  };

  const handleNext = () => {
    if (isCodeMatch && nextHandle) {
      updateFormData("email", email);
      nextHandle(); // 다음 단계로 이동
    }
  }


  return (
    <div className="flex flex-col gap-1 w-full">
      {/* 이메일 */}
      <form className="flex flex-col gap-1">
        <p className="text-sm">이메일</p>
        <div className="flex justify-between">

          <input type="text" className="w-9/12 bg-gray-300 focus:bg-gray-100"
            value={email}
            onChange={(e) => setemail(e.target.value)} />
          <button
            type="button"
            onClick={handleSendCode}
            disabled={!isEmailVaild}
            className={`px-4 py-2 rounded ${isEmailVaild ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"}`}
          >
            인증
          </button>
        </div>
        {showEmailError && (
          <p className="text-xs text-red-500">이메일 형식과 일치하지 않습니다</p>
        )}
      </form>
      {/* 이메일 인증 */}
      <div className="flex flex-col gap-1">
        <p className="text-sm" >이메일 인증</p>
        <input type='text' className="w-full bg-gray-300 py-2 focus:bg-gray-100"
          value={authCode}
          onChange={handleCheckCode}
        />
        {isCodeMatch === true && (
          <p className="text-xs text-green-500">인증번호가 일치합니다</p>
        )}
        {isCodeMatch === false && (
          <p className="text-xs text-red-500">다시 입력해주세요</p>
        )}
      </div>

      <button
        type="button"
        disabled={!isCodeMatch}
        onClick={handleNext}
        className={`w-full py-2 rounded ${isCodeMatch ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"}`}
      >
        다음
      </button>

    </div>
  )
}

export default Email;
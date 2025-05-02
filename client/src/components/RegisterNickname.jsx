// RegisterBirth.jsx
import React from "react";
import { useRegister } from "../layout/registerContext.jsx";
import { useState, useEffect } from "react";
const RegisterNickname = () => {
  const { setRegisterData, registerData, updateRegisterData } = useRegister();
  const [localData, setLocalData] = useState({
    user_nick: "",
  });
  useEffect(() => {
    updateRegisterData("user_nick", localData.user_nick); // user_id 저장
  }, [localData.user_nick]);
  return (
    <div className="mt-5">
      {/* 2. 생년월일 */}
      <label className="block font-bold mb-2">닉네임</label>
      <input
        type="text"
        name="birthdate"
        placeholder="닉네임을 입력해 주세요"
        maxLength="8"
        value={localData.user_nick || ""}
        onChange={(e) => {
          setLocalData((prev) => ({
            ...prev,
            user_nick: e.target.value, // 선택된 성별 저장
          }));
        }}
        className="w-full p-2 border rounded bg-gray-200"
      />
      <button
        className="bg-[#62a3ff] w-full rounded-[3px] p-2 mt-5"
        onClick={() => alert("회원가입 완료!")}
      >
        완료
      </button>
    </div>
  );
};

export default RegisterNickname;

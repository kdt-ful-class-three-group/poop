// RegisterBirth.jsx
import React from "react";

const RegisterNickname = () => {
  return (
    <div className="mt-5">
      {/* 2. 생년월일 */}
      <label className="block font-bold mb-2">닉네임</label>
      <input
        type="text"
        name="birthdate"
        placeholder="닉네임을 입력해 주세요"
        maxLength="8"
        className="w-full p-2 border rounded bg-gray-200"
      />
    </div>
  );
};

export default RegisterNickname;

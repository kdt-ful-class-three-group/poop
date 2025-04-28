// RegisterBirth.jsx
import React from "react";

const RegisterNickname = () => {
  return (
    <div className="m-3 w-full ">
      <button className="mb-4 px-4 py-2 bg-gray-300 rounded">이전</button>
      {/* 2. 생년월일 */}
      <div className="mb-4">
        <label className="block font-bold mb-2">닉네임</label>
        <input
          type="text"
          name="birthdate"
          placeholder="닉네임을 입력해 주세요"
          maxLength="8"
          className="w-full p-2 border rounded bg-gray-200"
        />
      </div>

      {/* 3. 다음 버튼 */}
      <div>
        <button className="w-full py-2 bg-gray-300 rounded">다음</button>
      </div>
    </div>
  );
};

export default RegisterNickname;

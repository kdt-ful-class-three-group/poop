import React from "react";
import { fetchRegister } from "../api/fectchApi.js";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../context/RegisterContext.jsx";

const RegisterNickname = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = userRegister();
  console.log("현재까지 받은 유저 정보", formData);

  const [nickname, setNickname] = React.useState("");

  const handelSubmit = async (e) => {
    if (!nickname || nickname.trim() === "") {
      alert("닉네임을 입력해주세요.");
      return;
    }
    if (nickname.length < 2 || nickname.length > 20) {
      alert("닉네임은 2자리 이상 8자리 이하로 입력해주세요.");
      return;
    }
    if (!/^[a-zA-Z0-9가-힣]+$/.test(nickname)) {
      alert("닉네임은 한국어 및 영문자와 숫자만 입력 가능합니다.");
      return;
    }
    const updated = {
      user_nick: nickname,
    };
    updateFormData("user_nick", nickname);
    console.log("닉네임을 받은 유저 정보", updated);
    console.log("최종 유저 정보", formData);

    try {
      const userData = await fetchRegister(formData);
      console.log("유저 등록 성공", userData);
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (err) {
      console.error("유저 등록 에러", err);
    }
  };

  return (
    <div className="w-full ">
      <div className="mb-4">
        <label className="block font-bold mb-2">닉네임</label>
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임을 입력해 주세요"
          maxLength="8"
          className="w-full p-2 border rounded bg-gray-200"
        />
      </div>

      {/* 3. 다음 버튼 */}
      <div>
        <button
          onClick={handelSubmit}
          type="submit"
          className={`w-full py-2 rounded ${
            nickname === "" ? "bg-gray-300" : "bg-blue-500"
          }`}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default RegisterNickname;

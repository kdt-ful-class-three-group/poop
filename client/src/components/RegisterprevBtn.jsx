import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function RegisterprevBtn() {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === "/Register/Terms") {
    return null; // 약관 동의 페이지에서는 이전 버튼 숨김
  }
  return (
    <button
      className="bg-[#D9D9D9] rounded-[3px] p-2 mt-5"
      onClick={() => {
        navigate(-1);
      }}
    >
      이전
    </button>
  );
}

export default RegisterprevBtn;

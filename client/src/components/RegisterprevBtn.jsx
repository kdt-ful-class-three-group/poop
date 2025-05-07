import React from "react";

function RegisterprevBtn({flag, setFlag}) {
  if (flag === 0) {
    return null; // 약관 동의 페이지에서는 이전 버튼 숨김
  }
  console.log(flag);
  return (
    <button
      className="bg-[#D9D9D9] rounded-[3px] p-2 mt-5"
      onClick={() => {
        setFlag(--flag);
      }}
    >
      이전
    </button>
  );
}

export default RegisterprevBtn;

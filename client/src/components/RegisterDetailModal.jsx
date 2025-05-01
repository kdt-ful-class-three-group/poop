import React from "react";

function RegisterDetailModal({ setModalOpen, content }) {
  console.log(setModalOpen);
  return (
    <div className="w-[50%] ">
      {content === "personalInfo" && (
        <div>
          <p>개인정보 내용</p>

          <button
            onClick={() => {
              setModalOpen(false);
            }}
          >
            닫기
          </button>
        </div>
      )}
      {content === "termsOfService" && (
        <div>
          <p>이용약관 내용</p>

          <button
            onClick={() => {
              setModalOpen(false);
            }}
          >
            닫기
          </button>
        </div>
      )}
    </div>
  );
}

export default RegisterDetailModal;

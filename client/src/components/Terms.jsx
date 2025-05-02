import React from "react";
import { useState } from "react";
import RegisterDetailModal from "../components/RegisterDetailModal.jsx"; // 약관 동의 모달 컴포넌트
function Terms({ nextHandle }) {
  const [allChecked, setAllChecked] = useState(false); //* 전체 동의 선택 상태
  const [individualChecks, setIndividualChecks] = useState({
    personalInfo: false,
    termsOfService: false,
  }); // 개별 체크박스 상태
  const [personalInfomodalOpen, setPersonalInfoModalOpen] = useState(false); //* 개인정보 모달 열기 상태
  const [termsOfServicemodalOpen, setTermsOfServiceModalOpen] = useState(false); //* 개인정보 모달 열기 상태
  const allCheck = (e) => {
    const isChecked = e.target.checked;
    setAllChecked(isChecked);
    setIndividualChecks({ personalInfo: isChecked, termsOfService: isChecked });
  };
  // 개별 체크박스 클릭 시
  const individualCheck = (e) => {
    const { name, checked } = e.target;
    setIndividualChecks((prev) => ({
      ...prev,
      [name]: checked,
    }));

    // 모든 개별 체크박스가 체크되었는지 확인하여 전체 동의 상태 업데이트
    setAllChecked(
      Object.values({ ...individualChecks, [name]: checked }).every(Boolean)
    );
  };
  return (
    <div className="w-full">
      <div className="text-xl">
        <h2>회원가입 약관 동의</h2>
      </div>
      <div className="mt-6 mb-1">
        <label className="flex items-center mb-3">
          <input
            className="mr-2"
            type="checkbox"
            checked={allChecked}
            onChange={allCheck}
          />
          <p className="text-xs">약관 전체 동의 하기</p>
        </label>
        <div className="flex items-center justify-between mb-3">
          <label className="flex items-center">
            <input
              className="mr-2"
              type="checkbox"
              name="personalInfo"
              checked={individualChecks.personalInfo}
              onChange={individualCheck}
            />
            <p className="text-xs">개인정보 수집 및 이용 동의 (필수)</p>
          </label>
          <button
            className="text-xs"
            onClick={() => setPersonalInfoModalOpen(true)}
          >
            자세히
          </button>
        </div>
        <div className="flex items-center justify-between mb-3">
          <label className="flex items-center">
            <input
              className="mr-2"
              type="checkbox"
              name="termsOfService"
              checked={individualChecks.termsOfService}
              onChange={individualCheck}
            />
            <p className="text-xs">이용약관 동의 (필수)</p>
          </label>
          <button
            className="text-xs"
            onClick={() => {
              setTermsOfServiceModalOpen(true);
            }}
          >
            자세히
          </button>
        </div>
        <div>
          <p className="text-[10px] text-[#939393]">
            모든 필수 약관에 동의하셔야 회원가입이 가능합니다. <br /> 📝
            [동의하기] 버튼을 누르면 약관에 동의한 것으로 간주됩니다.
          </p>
        </div>
        <button
          className={`flex w-full justify-center rounded-[3px] curser- p-2 mt-5 ${
            allChecked ? "bg-[#62a3ff]" : "bg-[#D9D9D9]"
          }`}
          disabled={!allChecked} // 전체 동의가 체크되지 않으면 비활성화
          onClick={() => nextHandle("/Register/Info")}
        >
          다음
        </button>
      </div>
      {personalInfomodalOpen && (
        <RegisterDetailModal
          setModalOpen={setPersonalInfoModalOpen} // 개인정보 모달 닫기 핸들러
          content="personalInfo"
        />
      )}

      {termsOfServicemodalOpen && (
        <RegisterDetailModal
          setModalOpen={setTermsOfServiceModalOpen} // 이용약관 모달 닫기 핸들러
          content="termsOfService"
        />
      )}
    </div>
  );
}

export default Terms;

import React from "react";
import { useState } from "react";

function Terms({handleNext}) {

  const [showRegister, setShowRegister] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  const nextHandler = () => {
    if(!privacyChecked || !termsChecked){
      alert("모든 필수 약관에 동의하셔야 회원가입이 가능합니다.");
      return;
    } else{
      setShowRegister(true);
      console.log("다음 버튼 클릭");
    }
    handleNext();

  }

  const handleAllcheck = (e) => {
    setAllChecked(e.target.checked);
    setPrivacyChecked(e.target.checked);
    setTermsChecked(e.target.checked);

    // if(setPrivacyChecked (false) || setTermsChecked (false) ){
    //   setAllChecked(false);
    // }
  }


  return (
    <div>
      <div className="text-xl">
        <h2>회원가입 약관 동의</h2>
      </div>
      <div className="mt-6 mb-1">
        <label className="flex items-center mb-3">
          <input checked={allChecked}
                 onChange={handleAllcheck}className="mr-2" type="checkbox" />
          <p className="text-xs">약관 전체 동의 하기</p>
        </label>
        <div className="flex items-center justify-between mb-3">
          <label className="flex items-center">
            <input checked={privacyChecked} onChange={(e)=>{setPrivacyChecked(e.target.checked)}} className="mr-2" type="checkbox" />
            <p className="text-xs">개인정보 수집 및 이용 동의 (필수)</p>
          </label>
          <button className="text-xs">자세히</button>
        </div>
        <div className="flex items-center justify-between mb-3">
          <label className="flex items-center">
            <input checked={termsChecked} onChange={(e)=>{setTermsChecked(e.target.checked)}} className="mr-2" type="checkbox" />
            <p className="text-xs">이용약관 동의 (필수)</p>
          </label>
          <button className="text-xs">자세히</button>
        </div>
        <div>
          <p className="text-[10px] text-[#939393]">
            모든 필수 약관에 동의하셔야 회원가입이 가능합니다. <br /> 📝
            [동의하기] 버튼을 누르면 약관에 동의한 것으로 간주됩니다.
          </p>
        </div>
        <button  type="submit" onClick={nextHandler} className="flex w-full justify-center rounded-[3px] p-2 mt-5 bg-[#D9D9D9] hover:bg-[#A9A9A9] text-sm cursor-pointer">
          다음
        </button>
      </div>
    </div>
  );
}

export default Terms;

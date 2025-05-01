import React, { useEffect } from "react";
import { useState } from "react";

function Terms({setDisabled}) {

  //전체동의와 관련된 상태
  const [all, setAll] = useState(false)
  const [personal, setPersonal] = useState(false)
  const [terms, setTerms] = useState(false)

  //버튼 상태
  // const [disabled, setDisabled] = useState(true)
  useEffect(()=>{
    setDisabled(true)
  },[])

  //전체동의 선택과 관련된 실행
  useEffect(()=>{
    if(all){
      setPersonal(all)
      setTerms(all)
      //버튼이용할 수 있도록 
      setDisabled(!all)
    } else {
      setDisabled(!all)
    }
  },[all])

  //개별동의에 따른 전첵동의도 변경됨
  //개별동의 다 체크되면 전체동의 체크
  //개별동의 체크 하나만 헤제해도 전체동의 해제
  useEffect(()=>{
    if(personal&&terms){
      setAll(true)
    }
    if(!personal || !terms){
      setAll(false)
    }
  },[personal,terms])

  return (
    <div>
      <div className="text-xl">
        <h2>회원가입 약관 동의</h2>
      </div>
      <div className="mt-6 mb-1">
        <label className="flex items-center mb-3">
          <input className="mr-2" type="checkbox" checked={all} onChange={()=>{setAll(!all)}}/>
          <p className="text-xs">약관 전체 동의 하기</p>
        </label>
        <div className="flex items-center justify-between mb-3">
          <label className="flex items-center">
            <input className="mr-2" type="checkbox" checked={personal} onChange={()=>setPersonal(!personal)}/>
            <p className="text-xs">개인정보 수집 및 이용 동의 (필수)</p>
          </label>
          <button className="text-xs">자세히</button>
        </div>
        <div className="flex items-center justify-between mb-3">
          <label className="flex items-center">
            <input className="mr-2" type="checkbox" checked={terms} onChange={()=>setTerms(!terms)}/>
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
      </div>
    </div>
  );
}

export default Terms;

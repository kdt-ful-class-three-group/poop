import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Terms from "../components/Terms.jsx";
import Register from "../components/Register.jsx";
import RegisterEmail from "../components/RegisterEmail.jsx";
import RegisterBirth from "../components/RegisterBirth.jsx";
import RegisterNickname from "../components/RegisterNickname.jsx";
import RegisterprevBtn from "../components/RegisterprevBtn.jsx";
function RegisterMain() {
  const navigate = useNavigate();
  const hasRun = useRef(false);
  useEffect(() => {
    if (!hasRun.current && performance.navigation.type === 1) {
      hasRun.current = true; // 실행 여부 기록
      if (location.pathname !== "/Register/Terms") {
        const shouldRedirect = window.confirm(
          "새로고침 시 기존 데이터가 삭제될 수 있습니다. 계속하시겠습니까?"
        );

        if (shouldRedirect) {
          navigate("/Register/Terms", { replace: true });
        }
      }
    }
  }, []);

  const nextHandle = (nextPath) => {
    // if (flag < 4) {
    //   setFlag(flag + 1);
    // }
    navigate(nextPath);
  };

  // const prevHandle = () => {
  //   setFlag(flag - 1);
  // };

  return (
    <div className=" w-full h-full">
      {/* 공통 이전 버튼 */}
      <RegisterprevBtn />

      {/* 라우트 설정 */}
      <Routes>
        <Route
          path="/Terms" // 상대 경로로 설정
          element={
            <div>
              <Terms nextHandle={nextHandle} />
            </div>
          }
        />
        <Route
          path="/Info" // 상대 경로로 설정
          element={
            <div>
              <Register nextHandle={nextHandle} />
            </div>
          }
        />
        <Route
          path="/RegisterEmail" // 상대 경로로 설정
          element={
            <div>
              <RegisterEmail nextHandle={nextHandle} />
             
            </div>
          }
        />
        <Route
          path="/RegisterBirth" // 상대 경로로 설정
          element={
            <div>
              <RegisterBirth nextHandle={nextHandle} />
             
            </div>
          }
        />
        <Route
          path="/RegisterNickname" // 상대 경로로 설정
          element={
            <div>
              <RegisterNickname nextHandle={nextHandle} />
             
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default RegisterMain;

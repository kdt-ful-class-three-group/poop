import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../commonComponents/Menu.jsx";
// import Nav from "../commonComponents/Nav.jsx";

export default function Layout({ showDom, setShowDom }) {
  // props로 상태 받기
  return (
    <>
      <Menu setShowDom={setShowDom} /> {/* Menu에 setShowDom 전달 */}
      <div className="flex justify-center items-center w-full mt-[40px]">
        {/* 중첩된 Route 컴포넌트들이 이 자리에 렌더링 함 */}
        <Outlet />
      </div>
    </>
  );
}

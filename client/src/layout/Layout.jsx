import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../commonComponents/Menu.jsx";
import Nav from "../commonComponents/Nav.jsx";

export default function Layout() {
  return (
    <div className="flex flex-col items-center h-[calc(100vh-120px)] w-full px-[30px]">
      <Menu />
      <div className="flex justify-center items-center w-full mt-[40px]">
        {/* 중첩된 Route 컴포넌트들이 이 자리에 렌더링 함 */}
        {/* Outlet 컴포넌트는 중첩된 Route의 자식 컴포넌트를 렌더링하는 역할을 함 */}
        <Outlet />
      </div>
    </div>
  );
}

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const loggedInRoute = ({ children }) => {
  const { isLoggedIn } = useAuth(); //* 로그인 상태 확인
  if (isLoggedIn) {
    return <Navigate to="/quiz" replace />;
  }
  return children; //* 로그인 상태면 자식 컴포넌트 렌더링
};
export default loggedInRoute;

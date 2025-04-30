import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth(); //* 로그인 상태 확인
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />; //* 로그인 상태가 아니면 로그인 페이지로 리다이렉트
  }
  return children; //* 로그인 상태면 자식 컴포넌트 렌더링
};
export default ProtectedRoute;

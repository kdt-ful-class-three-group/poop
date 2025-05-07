import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const logoutHandle = () => {
    setIsLogin(false);
  }

  const loginHandle = () => {
    console.log("제대로 실행이 완료되었다.");
    setIsLogin(true);
    console.log("로그인 상태", isLogin);
  }

  return (
    <LoginContext.Provider value={{ isLogin, loginHandle, logoutHandle }}>
      {children}
    </LoginContext.Provider>
  )
}
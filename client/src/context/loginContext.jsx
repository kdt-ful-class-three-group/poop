import React, { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const logoutHandle = () => {
    setIsLogin(false);
  }

  const loginHandle = () => {
    setIsLogin(true);
  }

  return (
    <LoginContext.Provider value={{ isLogin, loginHandle, logoutHandle }}>
      {children}
    </LoginContext.Provider>
  )
}
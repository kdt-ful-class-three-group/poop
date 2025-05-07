import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const logoutHandle = () => {
    navigate("/Quiz");
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
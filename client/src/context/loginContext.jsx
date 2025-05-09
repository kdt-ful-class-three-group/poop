import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(()=>{
    fetch("http://localhost:8080/auth/check",{
      credentials:"include",
    })
    .then((response) => {
      if (response.ok) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    })
  },[])

  const logoutHandle = () => {
    fetch("http://localhost:8080/auth/logout", {
      method: "POST",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          alert("로그아웃 되었습니다.");
        } else {
          alert("로그아웃 실패");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    sessionStorage.clear()
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
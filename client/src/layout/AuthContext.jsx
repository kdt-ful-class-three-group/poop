import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //* 로그인 상태일시 false
  const [user, setUser] = useState(null); //* 로그인한 유저 정보

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");

    if (userId) {
      //* 로그인 상태
      setIsLoggedIn(true); //* 로그인 상태면 true로 변경
      setUser({ userId }); //* 유저 정보를 담음
    } else {
      //* 로그아웃 상태
      setIsLoggedIn(false); //* 로그아웃 상태면 false로 변경
      setUser(null); //* 유저 정보를 null로 초기화
    }
  }, []);
  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    sessionStorage.clear(); // 세션 스토리지 비우기
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

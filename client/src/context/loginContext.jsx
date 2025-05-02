import React, { createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
  const test = "test";

  return (
    <LoginContext.Provider value={{test}}>
      {children}
    </LoginContext.Provider>
  )
}
import React, { createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
  const test = "test";

  return (
    <loginContext.Provider value={{test}}>
      {children}
    </loginContext.Provider>
  )
}
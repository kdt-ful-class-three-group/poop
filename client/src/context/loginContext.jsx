import React, { createContext } from "react";

const LoginContext = createContext();

export const LoginProvider = ({children}) => {
  const test = "test";

  return (
    <loginContext.Provider value={{test}}>
      {children}
    </loginContext.Provider>
  )
}

export const loginTest = () => useContext(LoginContext);
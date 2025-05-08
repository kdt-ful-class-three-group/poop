import React, { createContext, useState } from 'react';


export const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    user_id: '',
    password: '',
    email: '',
    user_nick: '',
    gender: '',
    birth_date: '',
  });


  const updateSignupData = (newData) => {
    setSignupData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <SignupContext.Provider value={{ signupData, updateSignupData }}>
      {children}
    </SignupContext.Provider>
  );
}
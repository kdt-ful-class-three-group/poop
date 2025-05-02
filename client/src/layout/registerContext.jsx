import { createContext, useContext, useState } from "react";

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [registerData, setRegisterData] = useState({
    user_id: "",
    password: "",
    email: "",
    user_nick: "",
    gender: "",
    birth_date: "",
  });

  const updateRegisterData = (key, value) => {
    setRegisterData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  console.log(registerData);
  return (
    <RegisterContext.Provider
      value={{ registerData, setRegisterData, updateRegisterData }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => {
  return useContext(RegisterContext);
};

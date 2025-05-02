// src/co
import { createContext, useContext, useState} from "react"

const RegisterContext = createContext(); 

export const RegisterProvider = ({children}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    nickname: "",
    gender : "",
    birth: "",
  });

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key] : value,
    }));
  };

  return(
    <RegisterContext.Provider value={{formData, updateFormData}}>
      {children}
    </RegisterContext.Provider>
  );
};

export const userRegister = () => useContext(RegisterContext);
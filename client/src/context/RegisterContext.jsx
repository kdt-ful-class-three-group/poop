// src/context/registerContext.jsx
import { createContext, useContext, useState} from "react"

const RegisterContext = createContext(); 

export const RegisterProvider = ({children}) => {
  const [formData, setFormData] = useState({
    user_id : "",
    password: "",
    email: "",
    user_nick: "",
    gender : "",
    birth_date: "",
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
//모듈 가져오기
import { createContext, useContext, useState } from 'react'

//창고 만들기 (+내보내기)
export const RegisterContext = createContext()

//전달할 내용 (+내보내기)
export const RegisterProvider =({children})=>{

  //가져올 데이터
  const [registerData, setRegisterData] = useState({
    user_id: '',
    password: '',
    nickname: '',
    birthDate: '',
    gender: '',
    email: ''
  })

  const updateData = (inputData)=>{
    setRegisterData(prev=>({...prev,...inputData}))
  }

  return(
    <RegisterContext.Provider value={{registerData,updateData}}>
      {children}
    </RegisterContext.Provider>
  )
}
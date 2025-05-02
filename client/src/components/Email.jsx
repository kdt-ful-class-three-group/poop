import { useState, useContext } from 'react'
import Button from "./Button";
import { RegisterContext } from '../context/RegisterContext';

function Email({setFlag}){

  //이메일 입력값
  const [email, setEmail] = useEffect('')
  //이메일 관련 텍스트
  const [emailText, setEmailText] = useEffect('')
  //이메일 인증 값
  const [check,setCheck] = useEffect(null)
  //인증 관련 텍스트
  const [checkText, setCheckText] = useEffect('')
  //창고에 데이터 저장
  const {updateData} = useContext(RegisterContext)
  //버튼에 적용
  const [disabled, setDisabled] = useState(false)

  return(
    <div className="flex flex-col gap-1 w-full">
      {/* 이메일 */}
      <form className="flex flex-col gap-1">
        <p className="text-sm">이메일</p>
        <div className="flex justify-between">
          <input type="text" className="w-9/12 bg-gray-300 focus:bg-gray-100" />
          <Button text='인증' colorClass={'bg-gray-300'}/>
        </div>
        <p className="text-xs text-red-500">이메일 형식과 일치하지 않습니다</p>
      </form>
      {/* 이메일 인증 */}
      <div className="flex flex-col gap-1">
        <p className="text-sm" >이메일 인증</p>
        <input type='text' className="w-full bg-gray-300 py-2 focus:bg-gray-100"/>
        <p className="text-xs text-red-500">다시 입력해주세요</p>
      </div>
      <button type="submit"
              className="w-full h-8 text-center text-sm bg-gray-300 hover:bg-gray-500 py-2 rounded mt-4" disabled={disabled}>다음</button>
    </div>
  )
}

export default Email;
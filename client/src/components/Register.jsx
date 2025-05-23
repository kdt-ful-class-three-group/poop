import Input from "../components/Input.jsx"
import { useEffect, useState } from 'react'
import { userRegister } from '../context/registerContext.jsx'

function Register({ nextHandle }) {
  //아이디 값
  const [user, setUser] = useState('')
  //비밀번호
  const [pw, setPw] = useState('')
  const [checkPw, setCheckPw] = useState('') //비밀번호 확인

  //다음화면 보여줄 것인지
  const [disabled, setDisabled] = useState(true)

  //메시지
  const [idText, setIdText] = useState('30자 이내로 입력해주세요')
  const [pwText, setPwText] = useState('')
  const [pwCheckText, setCheckPwText] = useState('')

  //창고에서 데이터 가져오기
  const { updateFormData } = userRegister()

  //제출 -> 아이디, 비밀번호 값 담기
  const userCheck = (e) => {
    // 아이디 특수문자 안됨
    const input = e.target.value

    const hasChar = /[^a-zA-Z0-9]/

    if (hasChar.test(input)) {
      setIdText('아이디에 특수문자는 포함할 수 없습니다')
    } else {
      // setIdText('')
      setUser(input)
    }
  }

  useEffect(() => {
    //입력 내용이 없을 때
    if (user.length === 0) {
      setIdText('')
      return
    }

    fetch(`http://localhost:8080/register?user_id=${user}`)
      .then(response => response.json())
      .then(data => {
        if (data.msg) {
          setIdText(data.msg);
        }
      })
      .catch(error => console.error('Error:', error));

  }, [user])


  const pwCheck = (e) => {
    // 비밀번호 조건 충족    
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //입력창 활성화를 위해 입력
    setPw(e.target.value)

    if (!pattern.test(e.target.value)) {
      setPwText('영문+숫자+특수문자로 8자 이상 입력해주세요')
    } else {
      setPwText('')
      setPw(e.target.value)
    }
  }

  const samePwCheck = (e) => {
    setCheckPw(e.target.value)
    if (pw === e.target.value) {
      setCheckPwText('비밀번호가 일치합니다')
    } else {
      setCheckPwText('다시 입력해주세요')
    }
  }

  useEffect(() => {
    if (idText === '사용 가능한 사용자입니다.' && pwText === '' && pwCheckText === '비밀번호가 일치합니다') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [idText, pwText, pwCheckText]);

  //다음버튼 클릭이벤트
  const buttonClick = (e) => {
    e.preventDefault()
    updateFormData("user_id", user);
    updateFormData("password", pw);
    nextHandle();
  }

  return (
    <div className=" w-full h-full">
      <div className="h-100 flex flex-col justify-center items-center">
        <form className="w-full" onSubmit={buttonClick}>
          <label className="text-sm text-black mb-2 ">아이디</label>
          <p className="text-red-500 text-xs">{idText}</p>
          <Input className={"bg-gray-300 h-10 w-full border-solid mb-8 p-2"} type="text" name="username" value={user} onChange={(e) => userCheck(e)} />
          <label className="text-sm text-black mb-2">비밀번호</label>
          <p className="text-red-500 text-xs">{pwText}</p>
          <Input className={"bg-gray-300 h-10 w-full border-solid mb-8 p-2"} type="password" name="password" value={pw} onChange={(e) => pwCheck(e)} />
          <label className="text-sm text-black mb-2">비밀번호 확인</label>
          <p className="text-red-500 text-xs">{pwCheckText}</p>
          <Input className={"bg-gray-300 h-10 w-full border-solid mb-8 p-2"} type="password" name="passwordCheck" value={checkPw} onChange={(e) => samePwCheck(e)} />
          <button type="submit"
            className={`flex w-full justify-center rounded-[3px] p-2 mt-5  ${disabled ? "bg-gray-300" : "bg-blue-500"}`} disabled={disabled}>
            다음
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

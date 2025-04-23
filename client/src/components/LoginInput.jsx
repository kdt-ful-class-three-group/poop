import Button from "./Button";

function LoginInput(){
  // 아이디 입력
  // 비밀번호 입력
  // 로그인 버튼

  return(
    <form className="flex flex-col gap-2">
      <input type="text" placeholder="아이디"
        className="bg-gray-300 px-4 py-2 rounded-md focus:bg-gray-100" required></input>
      <input type='password' placeholder="비밀번호"
        className="bg-gray-300 px-4 py-2 rounded-md focus:bg-gray-100" required></input>
      <Button text='로그인' colorClass = "bg-gray-300"/>
    </form>
  )
}

export default LoginInput;
function LoginInput(){
  // 아이디 입력
  // 비밀번호 입력
  // 로그인 버튼

  return(
    <form>
      <input type="text" placeholder="아이디"></input>
      <input type='password' placeholder="비밀번호"></input>
      <button>로그인</button>
    </form>
  )
}

export default LoginInput;
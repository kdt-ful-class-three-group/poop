function FindAccount(){
  // 자동 로그인
  // 아이디 / 비밀번호 찾기

  return(
    <div className="flex justify-between">
      <label className="cursor-pointer py-2">
        <input type="checkbox"></input>
        자동 로그인
      </label>
      <ul className="flex gap-2 py-2">
        <li className="cursor-pointer">아이디 찾기</li>
        <li>|</li>
        <li className="cursor-pointer">비밀번호 찾기</li>
      </ul>
    </div>
  )
}

export default FindAccount;
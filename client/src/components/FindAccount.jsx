function FindAccount({setAutoLogin}){
  // 자동 로그인
  // 아이디 / 비밀번호 찾기

  return(
    <div className="flex justify-between text-xs">
      <label className="cursor-pointer py-2 text-gray-400">
        <input type="checkbox"
          className="mr-1"
          onChange={(e)=>setAutoLogin(e.target.checked)}></input>
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
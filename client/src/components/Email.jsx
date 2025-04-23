import Button from "./Button";

function Email(){
  return(
    <div>
      {/* 이메일 */}
      <form>
        <p>이메일</p>
        <div>
          <input type="text" />
          <Button text='인증받기' colorClass={'bg-gray-300'}/>
        </div>
        <p>이메일 형식과 일치하지 않습니다</p>
      </form>
      {/* 이메일 인증 */}
      <div>
        <p>이메일 인증</p>
        <input type='text'/>
        <p>다시 입력해주세요</p>
      </div>
    </div>
  )
}

export default Email;
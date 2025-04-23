import Button from "./Button";

function Email(){
  return(
    <div className="flex flex-col gap-4 w-full">
      {/* 이메일 */}
      <form>
        <p className="text-sm">이메일</p>
        <div className="flex">
          <input type="text" className="w-10/12" />
          <Button text='인증' colorClass={'bg-gray-300'}/>
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
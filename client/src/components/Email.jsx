import Button from "./Button";

function Email(){
  return(
    <form>
      <div>
        <p>이메일</p>
        <div>
          <input type="text" />
          <Button text='인증받기' colorClass={'bg-gray-300'}/>
        </div>
        <p>이메일 형식과 일치하지 않습니다</p>
      </div>
    </form>
  )
}

export default Email;
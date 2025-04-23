import Button from "./Button";
import Email from "./Email";

function RegisterEmail(){
  // 이전 버튼
  // 이메일 + 인증받기
  // 인증받기
  // 다음

  return(
    <div>
      <Button text='이전'
        colorClass={'bg-gray-300'}
      />
      <Email/>
      <Button text='다음' colorClass={'bg-gray-300'}/>
    </div>
  )
}

export default RegisterEmail;
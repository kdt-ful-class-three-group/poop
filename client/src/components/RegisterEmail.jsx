import Email from "./Email";

function RegisterEmail({setFlag}) {
  // 이전 버튼
  // 이메일 + 인증받기
  // 인증받기
  // 다음

  return (
    <div className="mt-4">
      <Email setFlag={setFlag}/>
    </div>
  )
}

export default RegisterEmail;
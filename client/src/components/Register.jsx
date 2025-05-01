import Input from "../components/Input.jsx"

function Register() {
  return (
    <div className=" w-full h-full">
      <div className="w-full h-full">
        <h1 className="justify-start items-left mt-20">회원가입</h1>
        <div className="h-100 flex flex-col justify-center items-center">
          <div className="w-full">
            <label className="text-sm text-black mb-2 ">아이디</label>
            <Input type="text" name="username" />
            <label className="text-sm text-black mb-2">비밀번호</label>
            <Input type="password" name="password" />
            <label className="text-sm text-black mb-2">비밀번호 확인</label>
            <Input type="password" name="passwordCheck" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
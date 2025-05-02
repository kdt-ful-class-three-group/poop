import Email from "./Email";

function RegisterEmail({ nextHandle }) {
  // 이전 버튼
  // 이메일 + 인증받기
  // 인증받기
  // 다음

  return (
    <div className="mt-4">
      <Email />
      <button
        className="bg-[#62a3ff] w-full rounded-[3px] p-2 mt-5"
        onClick={() => nextHandle("/Register/RegisterBirth")} // 상대 경로로 이동
      >
        다음
      </button>
    </div>
  );
}

export default RegisterEmail;

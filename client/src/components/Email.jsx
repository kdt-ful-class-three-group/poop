import Button from "./Button";
import Input from "../components/Input.jsx";
import { useState } from "react";
function Email() {
  const [localData, setLocalData] = useState({
    email: "",
  });
  return (
    <div className="flex flex-col gap-1 w-full">
      {/* 이메일 */}
      <form className="flex flex-col gap-1">
        <p className="text-sm">이메일</p>
        <div className="flex justify-between">
          <Input
            type="text"
            className="w-9/12 bg-gray-300 focus:bg-gray-100"
            placeholder="이메일을 입력하세요"
            value={localData.email}
            onChange={(e) => {
              setLocalData((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
          />
          {/* <input type="text" className="w-9/12 bg-gray-300 focus:bg-gray-100" /> */}
          <Button text="인증" colorClass={"bg-gray-300"} />
        </div>
        <p className="text-xs text-red-500">이메일 형식과 일치하지 않습니다</p>
      </form>
      {/* 이메일 인증 */}
      <div className="flex flex-col gap-1">
        <p className="text-sm">이메일 인증</p>
        <Input
          type="text"
          className="w-9/12 bg-gray-300 focus:bg-gray-100"
          placeholder="인증된 번호를 입력하세요"
          value={localData.email}
          onChange={(e) => {
            setLocalData((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        />
        {/* <input
          type="text"
          className="w-full bg-gray-300 py-2 focus:bg-gray-100"
        /> */}
        <p className="text-xs text-red-500">다시 입력해주세요</p>
      </div>
    </div>
  );
}

export default Email;

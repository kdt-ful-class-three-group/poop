// RegisterBirth.jsx
import React from "react";
import { useRegister } from "../layout/registerContext.jsx";
import { useState, useEffect } from "react";

const RegisterBirth = ({ nextHandle }) => {
  // const [gender, setGender] = React.useState("");
  // const [birthdate, setBirthdate] = React.useState("");
  const { setRegisterData, registerData, updateRegisterData } = useRegister();
  const [localData, setLocalData] = useState({
    // user_id: "",
    // password: "",
    // passwordCheck: "",
    gender: "",
    birth_date: "",
  });
  useEffect(() => {
    updateRegisterData("gender", localData.gender); // user_id 저장
    updateRegisterData("birth_date", localData.birth_date); // password 저장
  }, [localData.gender, localData.birth_date]);

  console.log(registerData);
  return (
    <div>
      {/* 1. 성별 */}
      <div className="mb-4">
        <label className="block font-bold mb-2 mt-3">성별</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              onClick={(e) =>
                setLocalData((prev) => ({
                  ...prev,
                  gender: e.target.value, // 선택된 성별 저장
                }))
              }
              className="mr-2"
            />
            남자
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              className="mr-2"
              onClick={(e) =>
                setLocalData((prev) => ({
                  ...prev,
                  gender: e.target.value, // 선택된 성별 저장
                }))
              }
            />
            여자
          </label>
        </div>
      </div>

      {/* 2. 생년월일 */}
      <div className="mb-4">
        <label className="block font-bold mb-2">생년월일</label>
        <input
          type="text"
          name="birthdate"
          placeholder="예: 19990101"
          maxLength="8"
          className="w-full p-2 border rounded bg-gray-200"
          value={localData.birth_date}
          onChange={(e) =>
            setLocalData((prev) => ({
              ...prev,
              birth_date: e.target.value, // 생년월일 저장
            }))
          }
        />
      </div>
      <button
        className="bg-[#62a3ff] w-full rounded-[3px] p-2 mt-5"
        onClick={(e) => {
          nextHandle("/Register/RegisterNickname");
        }}
      >
        다음
      </button>
    </div>
  );
};

export default RegisterBirth;

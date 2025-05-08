import Input from "../components/Input.jsx";
import RegisterEmail from "../components/RegisterEmail";
import { useState, useEffect } from "react";
import poopTimeApi from "../services/poopTimeApi.js";
import { useRegister } from "../layout/registerContext.jsx";
function Register({ flag, setFlag, nextHandle }) {
  // const [showEmail, setShowEmail] = useState(true);
  const { setRegisterData, updateRegisterData } = useRegister();
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [isUserId, setIsUserId] = useState(false);
  // const buttonClick = () => {
  //   setShowEmail(false);
  // };
  const [localData, setLocalData] = useState({
    user_id: "",
    password: "",
    passwordCheck: "",
  });

  const checkUserId = async (value) => {
    try {
      const userData = await poopTimeApi("userIdTest", "POST", {
        userName: value,
      });
      setIsUserId(userData.exists);
    } catch (error) {}
  };
  // useEffect(() => {
  //   const userIdTestApi = async () => {
  //     const userIdTestUrl = await poopTimeApi("userIdTest");
  //     console.log(userIdTestUrl);
  //   };
  //   userIdTestApi();
  // }, []);
  const nextBtnClick = (e) => {
    e.preventDefault();
    setRegisterData((prev) => ({
      ...prev,
      ...localData,
    }));
    updateRegisterData("user_id", localData.user_id); // user_id 저장
    updateRegisterData("password", localData.password); // password 저장
    // setShowEmail(false);
    if (isPasswordMatch) {
      nextHandle("/Register/RegisterEmail");
    }
  };
  useEffect(() => {
    console.log("flag", flag); // 상태 변경 확인
  }, [flag]);
  // 비밀번호와 비밀번호 확인이 같은지 확인
  useEffect(() => {
    setIsPasswordMatch(
      localData.password !== "" &&
        localData.passwordCheck !== "" &&
        localData.password === localData.passwordCheck
    );
  }, [localData.password, localData.passwordCheck]);

  return (
    <div className=" w-full h-full">
      <div className="w-full h-full">
        <h1 className="justify-start items-left mt-20">회원가입</h1>
        <div className="h-100 flex flex-col justify-center items-center">
          <form className="w-full" onSubmit={nextBtnClick}>
            <label className="inline-block text-sm text-black mb-2 ">
              아이디
            </label>
            <Input
              className="bg-gray-300 w-full border-solid p-2 "
              type="text"
              name="username"
              placeholder=""
              value={localData.user_id || ""}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[a-zA-Z0-9]*$/.test(value)) {
                  setLocalData((prev) => ({
                    ...prev,
                    user_id: value,
                  }));
                  checkUserId(value);
                  // poopTimeApi("userIdTest", "POST", { userName: value });
                }
              }}
            />
            {isUserId && (
              <p className="text-red-600 text-[12px] block">
                아이디가 중복되었습니다.
              </p>
            )}

            <label className="inline-block text-sm text-black mb-2 mt-8">
              비밀번호
            </label>
            <Input
              className="bg-gray-300 w-full border-solid p-2 "
              type="password"
              name="password"
              placeholder=""
              value={localData.password || ""}
              onChange={(e) => {
                setLocalData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
            />
            <label className="inline-block text-sm text-black mb-2 mt-8">
              비밀번호 확인
            </label>
            <Input
              className="bg-gray-300 w-full border-solid mb-2 p-2 "
              type="password"
              name="passwordCheck"
              placeholder=""
              value={localData.passwordCheck || ""}
              onChange={(e) => {
                setLocalData((prev) => ({
                  ...prev,
                  passwordCheck: e.target.value,
                }));
              }}
            />
            {!isPasswordMatch &&
              localData.password &&
              localData.passwordCheck && (
                <p className="text-red-500 text-xs mt-[0.5rem]">
                  비밀번호가 일치하지 않습니다.
                </p>
              )}
            <button
              type="submit"
              className={`w-full text-center text-sm py-2 rounded mt-7 ${
                isPasswordMatch ? "bg-[#62a3ff]" : "bg-[#D9D9D9]"
              }`}
              disabled={!isPasswordMatch}
            >
              다음
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

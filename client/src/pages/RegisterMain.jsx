import React, { useState } from "react";
import Button from "../components/Button";
import Terms from '../components/Terms';
import Register from "../components/Register";
import RegisterEmail from '../components/RegisterEmail';
import RegisterBirth from "../components/RegisterBirth";
import RegisterNickname from "../components/RegisterNickname";
//context관련
import { RegisterProvider } from "../context/RegisterContext";

function RegisterMain() {
  const [flag, setFlag] = useState(0);

  // const [disabled, setDisabled] = useState(true);

  // const nextHandle = () => {
  //   if (flag < 4) {
  //     setFlag(flag + 1);
  //   }
  // }

  const prevHandle = () => {
      setFlag(flag - 1);
  }

  return (
    <RegisterProvider>

    <div className=" w-full h-full">
      {
        flag === 0 &&
        <div>
          <Terms setFlag={setFlag}/>
        </div>
      }
      {
        flag === 1 &&
        <div>
          <Register setFlag={setFlag} />
        </div>
      }
      {
        flag === 2 &&
        <div>
          <Button text={"이전"} colorClass={'bg-[#D9D9D9] rounded-[3px] p-2 mt-5'} clickEvent={prevHandle} />
          <RegisterEmail setFlag={setFlag}/>
        </div>
      }
      {
        flag === 3 &&
        <div>
          <Button text={"이전"} colorClass={'bg-[#D9D9D9] rounded-[3px] p-2 mt-5'} clickEvent={prevHandle} />
          <RegisterBirth setFlag={setFlag}/>
        </div>
      }
      {
        flag === 4 &&
        <div>
          <Button text={"이전"} colorClass={'bg-[#D9D9D9] rounded-[3px] p-2 mt-5'} clickEvent={prevHandle} />
          <RegisterNickname setFlag={setFlag}/>
        </div>
      }
      {/* <Button text={flag === 4 ? "완료" : "다음"} colorClass={'bg-[#D9D9D9] w-full rounded-[3px] p-2 mt-5'} clickEvent={nextHandle} disabled={disabled} /> */}
    </div>
    </RegisterProvider>
  );
}

export default RegisterMain;
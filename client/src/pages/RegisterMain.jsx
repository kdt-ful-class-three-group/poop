import React, { useState } from "react";
import Button from "../components/Button";
import Terms from '../components/Terms';
import Register from "../components/Register";
import RegisterEmail from '../components/RegisterEmail';
import RegisterBirth from "../components/RegisterBirth";
import RegisterNickname from "../components/RegisterNickname";

function RegisterMain() {
  const [flag, setFlag] = useState(0);

  const nextHandle = () => {
    if (flag < 4) {
      setFlag(flag + 1);
    }
  }

  const prevHandle = () => {
      setFlag(flag - 1);
  }

  return (
    <div className=" w-full h-full">
      {
      flag === 0 &&
      <div>
      <Terms nextHandle={nextHandle} />
      </div>
      }
      {
        flag === 1 &&
        <div>
          <Register nextHandle={nextHandle}/>
        </div>
      }
      {
        flag === 2 &&
        <div>
          <Button text={"이전"} colorClass={'bg-[#D9D9D9] rounded-[3px] p-2 mt-5'} clickEvent={prevHandle} />
          <RegisterEmail nextHandle={nextHandle}/>
        </div>
      }
      {
        flag === 3 &&
        <div>
          <Button text={"이전"} colorClass={'bg-[#D9D9D9] rounded-[3px] p-2 mt-5'} clickEvent={prevHandle} />
          <RegisterBirth nextHandle={nextHandle} />
        </div>
      }
      {
        flag === 4 &&
        <div>
          <Button text={"이전"} colorClass={'bg-[#D9D9D9] rounded-[3px] p-2 mt-5'} clickEvent={prevHandle} />
          <RegisterNickname nextHandle={nextHandle} />
        </div>
      }
      {/* <Button text={flag === 4 ? "완료" : "다음"} colorClass={'bg-[#D9D9D9] w-full rounded-[3px] p-2 mt-5'} clickEvent={nextHandle} /> */}
    </div>
  );
}

export default RegisterMain;
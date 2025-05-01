import React from "react";
import Button from "../components/Button";
import Terms from '../components/Terms';
import Register from "../components/Register";
import RegisterEmail from '../components/RegisterEmail';
import RegisterBirth from "../components/RegisterBirth";
import RegisterNickname from "../components/RegisterNickname";

function RegisterMain() {
  return (
    <div className=" w-full h-full">
      <div className="hidden">
        {<Terms/>}
      </div>
      <div className="hidden">
        {<Register/>}
      </div>
      <div className="hidden">
        <Button text='이전' colorClass={'bg-[#D9D9D9] flex justify-center rounded-[3px] p-2 mt-5'}/>
        {<RegisterEmail/>}
      </div>
      <div className="hidden">
        <Button text='이전' colorClass={'bg-[#D9D9D9] flex justify-center rounded-[3px] p-2 mt-5'}/>
        {<RegisterBirth/>}
      </div>
      <div className="">
        {<RegisterNickname/>}
      </div>
      <Button text='다음' colorClass={'bg-[#D9D9D9] flex w-full justify-center rounded-[3px] p-2 mt-5'}/>
    </div>
  );
}

export default RegisterMain;
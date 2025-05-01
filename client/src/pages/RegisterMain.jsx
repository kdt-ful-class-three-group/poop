import React from "react";
import Button from "../components/Button";
import Terms from '../components/Terms';
import Register from "../components/Register";

function RegisterMain() {
  return (
    <div className=" w-full h-full">
      <div className="hidden">
        {<Terms/>}
      </div>
      <div className="">
        {<Register/>}
      </div>
      <Button text='다음' colorClass={'bg-[#D9D9D9] flex w-full justify-center rounded-[3px] p-2 mt-5'}/>
    </div>
  );
}

export default RegisterMain;
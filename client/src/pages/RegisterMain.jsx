import React, { useState } from "react";
import Terms from '../components/Terms';
import Register from "../components/Register";
import RegisterEmail from '../components/RegisterEmail';
import RegisterBirth from "../components/RegisterBirth";
import RegisterNickname from "../components/RegisterNickname";
import RegisterprevBtn from "../components/RegisterprevBtn";

function RegisterMain() {
  const [flag, setFlag] = useState(0);

  return (
    <div className=" w-full h-full">
      <RegisterprevBtn setFlag={setFlag} flag={flag} />
      {
        flag === 0 &&
        <div>
          <Terms setFlag={setFlag} flag={flag} />
        </div>
      }
      {
        flag === 1 &&
        <div>
          <Register setFlag={setFlag} flag={flag} />
        </div>
      }
      {
        flag === 2 &&
        <div>
          <RegisterEmail setFlag={setFlag} flag={flag} />
        </div>
      }
      {
        flag === 3 &&
        <div>
          <RegisterBirth setFlag={setFlag} flag={flag} />
        </div>
      }
      {
        flag === 4 &&
        <div>
          <RegisterNickname setFlag={setFlag} flag={flag} />
        </div>
      }
    </div>
  );
}

export default RegisterMain;
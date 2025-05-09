import React, { useState } from "react";
import Terms from '../components/Terms';
import Button from "../components/Button";
import Register from "../components/Register";
import RegisterEmail from '../components/RegisterEmail';
import RegisterBirth from "../components/RegisterBirth";
import RegisterNickname from "../components/RegisterNickname";
import RegisterprevBtn from "../components/RegisterprevBtn";
import { RegisterProvider } from "../context/registerContext";

function RegisterMain() {
  const [flag, setFlag] = useState(0);

  // const [disabled, setDisabled] = useState(true);

  const nextHandle = () => {
    if (flag < 4) {
      setFlag(flag + 1);
    }
  }

  return (
    <RegisterProvider>

      <div className=" w-full h-full">
        <RegisterprevBtn setFlag={setFlag} flag={flag} />
        {
          flag === 0 &&
          <div>
            <Terms nextHandle={nextHandle} />
          </div>
        }
        {
          flag === 1 &&
          <div>
            <Register nextHandle={nextHandle} />
          </div>
        }
        {
          flag === 2 &&
          <div>
            <RegisterEmail nextHandle={nextHandle} />
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
    </RegisterProvider>
  );
}

export default RegisterMain;
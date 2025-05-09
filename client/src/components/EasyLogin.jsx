import Button from "./Button";
import {NaverBtn, GoogleBtn, KakaoBtn} from "oauth-btn";

function EasyLogin(){

  const ButtonTexts= [
    "카카오톡으로 계속하기",
    "네이버로 계속하기",
    "구글로 계속하기"
  ]

  return(
    <div className="flex  gap-2">
      <KakaoBtn shape="circle" className="w-80"/>
      <NaverBtn shape="circle" className="w-80"/>
      <GoogleBtn  shape="circle" className= "w-80" />
    </div>

  )
}

export default EasyLogin;
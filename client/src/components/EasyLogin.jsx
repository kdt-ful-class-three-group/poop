import Button from "./Button";
import{KakaoBtn, GoogleBtn, NaverBtn} from "oauth-btn";

function EasyLogin(){

  const ButtonTexts= [

  ]

  return(

    <>
      <KakaoBtn shape="rect"  />
      <NaverBtn shape="rect" />
      <GoogleBtn className="border-2 border-black w-50 " shape="rect" />
    </>

  )
}

export default EasyLogin;
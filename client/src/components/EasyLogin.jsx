import Button from "./Button";

function EasyLogin(){

  const ButtonTexts= [
    "카카오톡으로 계속하기",
    "네이버로 계속하기",
    "구글로 계속하기"
  ]

  return(
    <div className="flex flex-col gap-2">
      {ButtonTexts.map((text,i)=>(
        <Button
          key={i}
          text={text}
          colorClass='bg-gray-300'></Button>
      ))}
    </div>
  )
}

export default EasyLogin;
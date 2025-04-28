import Button from "./Button";

function QuizControl({btnText, answerBtn, prevBtn, nextBtn}){
  return(
    <div className="flex flex-col gap-5">
      <Button text={btnText} colorClass={"bg-gray-300 w-full"} clickEvent={answerBtn}/>
      <div className="flex justify-between">
        <Button text ='이전 문제' colorClass={"bg-gray-300 w-[45%]"} clickEvent={prevBtn}/>
        <Button text ='다음 문제' colorClass={"bg-gray-300 w-[45%]"} clickEvent={nextBtn}/>
      </div>
    </div>
  )
}

export default QuizControl;
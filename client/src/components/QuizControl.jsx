import Button from "./Button";

function QuizControl(){
  return(
    <div>
      <Button text='정답확인' colorClass={"bg-gray-300 w-full"}/>
      <div className="flex justify-between">
        <Button text ='이전 문제' colorClass={"bg-gray-300 w-[45%]"} clickEvent={() => {}}/>
        <Button text ='다음 문제' colorClass={"bg-gray-300 w-[45%]"} clickEvent={() => {}}/>
      </div>
    </div>
  )
}

export default QuizControl;
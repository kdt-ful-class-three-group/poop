import Button from "./Button";

function QuizButton({nextBtn, prevBtn}){
  return(
    <div className="w-11/12 m-auto flex flex-col gap-5 text-center">
      {/* 정답 작성 및 확인 */}
      <div className="w-full border-1">
        <div>
          <input placeholder="정답 작성하기"></input>
          <button>확인</button>
        </div>
        <p>다시 입력해주세요</p>
      </div>
      {/* 정답보기 */}
      <Button text="정답확인" colorClass={"bg-gray-300"}/>
      {/* 문제 넘어가기 */}
      <div className="w-full">
        <Button text ='이전 문제' colorClass={"bg-gray-300"} clickEvent={()=>prevBtn()}/>
        <Button text ='다음 문제' colorClass={"bg-gray-300"} clickEvent={()=>nextBtn()}/>
      </div>
    </div>
  )
}

export default QuizButton;
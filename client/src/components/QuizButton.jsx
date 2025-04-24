import Button from "./Button";

function QuizButton({nextBtn, prevBtn}){
  return(
    <div className="flex flex-col gap-5 text-center">
      {/* 정답 작성 및 확인 */}
      <div className="w-full">
        <div className="flex border-[1px] border-[#D9D9D9]/70">
          <input
            className="w-full outline-none p-2"
            type="text"
            placeholder="정답을 입력해주세요."
          />
          <button className="bg-[#8E5E43] border-[#8E5E43] p-2 rounded-[0px_3px_3px_0px] text-white whitespace-nowrap">확인</button>
        </div>
        <p className="text-left text-red-500 text-sm">다시 입력해주세요</p>
      </div>
      {/* 정답보기 */}
      <Button text="정답확인" colorClass={"bg-gray-300 w-full"}/>
      {/* 문제 넘어가기 */}
      <div className="flex justify-between">
        <Button text ='이전 문제' colorClass={"bg-gray-300 w-[45%]"} clickEvent={prevBtn}/>
        <Button text ='다음 문제' colorClass={"bg-gray-300 w-[45%]"} clickEvent={nextBtn}/>
      </div>
    </div>
  )
}

export default QuizButton;
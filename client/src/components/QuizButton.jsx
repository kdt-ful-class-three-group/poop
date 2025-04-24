import {useState} from "react";
import Button from "./Button";
import QuizControl from "./QuizControl";

function QuizButton({nextBtn, prevBtn, data}){
  //정답인지 아닌지
  // const [isCorrect, setIsCorrect] = useState(true);
  // const [pText, setPText] = useState({text:'',class:''});
  // const [btnText, setBtnText] = useState('정답확인');

  // // 정답 확인 버튼 클릭 시 정답 확인
  // const checkAnswer = (e)=>{
  //   e.preventDefault()

  //   const inputAnswer = e.target.previousElementSibling.value;
  //   console.log(data?.answer || '')

  //   if(inputAnswer !== data?.answer){
  //     // setIsCorrect(false);
  //     setPText({text:'정답이 아닙니다.', class:'text-red-500'});
  //   }
  //   if(inputAnswer === data?.answer){
  //     e.preventDefault()
  //     nextBtn();
  //     e.target.previousElementSibling.value = '';
  //     setBtnText('정답확인');
  //     setPText({text:'정답입니다.', class:'text-blue-500'});
  //   }
  // }
  // // 정답 확인 버튼
  // const checkAnswerBtn = (e)=>{
  //   e.preventDefault()
  //   setBtnText(data?.answer || '');
  // }

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
          {/* 확인버튼 누르면 정답 일치하는지 확인 */}
          <button 
            className="bg-[#8E5E43] border-[#8E5E43] p-2 rounded-[0px_3px_3px_0px] text-white whitespace-nowrap cursor-pointer"
            onClick={(e)=>checkAnswer(e)}>확인</button>
        </div>
        {/* 정답이 일치하지 않으면 발생 */}
          <p className={`text-left text-sm ${pText.class}`}>{pText.text}</p>
      </div>
      {/* 정답보기 */}
      {/* 정답 클릭하면 답 보여주기 */}
      <Button text={btnText} colorClass={"bg-gray-300 w-full"} clickEvent={checkAnswerBtn}/>
      {/* 문제 넘어가기 */}
      <QuizControl/>
    </div>
  )
}

export default QuizButton;
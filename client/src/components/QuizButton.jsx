import {useState} from "react";
import Button from "./Button";
import QuizControl from "./QuizControl";

function QuizButton({nextBtn, prevBtn, data}){
  //정답인지 아닌지
  const [isAnswer, setIsAnswer] = useState(false);
  // const [pText, setPText] = useState({text:'',class:''});
  const [btnText, setBtnText] = useState('정답확인');

  //정답확인 버튼 -> !answer 값 들어가게도록
  const answerBtn =()=>{
    setIsAnswer(!isAnswer)

    //정답 확인
    if(isAnswer){
      setBtnText(data?.answer || '');
    } else {
      setBtnText('정답확인');
    }
  }

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
        <div className="w-full flex border-[1px] border-[#D9D9D9]/70">
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
      {/* 정답보기 */}
      <QuizControl btnText={btnText} answerBtn={answerBtn} prevBtn={} nextBtn={} />
    </div>
  )
}

export default QuizButton;
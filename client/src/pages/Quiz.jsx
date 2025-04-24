import { useEffect, useState } from "react";

import QuizCard from "../components/QuizCard";
import QuizButton from "../components/QuizButton";

function Quiz() {

  const [data ,setData] = useState([]);
  const [num, setNum] = useState(0);

  //fetch 가져오기

  //버튼 이벤트
  const prevBtn = ()=>{
    if(num>0){
      setNum(num-1);
    }
  }
  const nextBtn = ()=>{
    if(num<data.length-1){
      setNum(num+1);
    }
  }

  //정답확인


  return (
    <div className="w-full">
      <QuizCard quizData={{qui_id:0,question:'기본'}}/>
      <QuizButton nextBtn={()=>console.log('다음문제')} prevBtn={()=>console.log('이전문제')}/>
    </div>
  );
}

export default Quiz;

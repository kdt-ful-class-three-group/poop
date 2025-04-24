import { useEffect, useState } from "react";

import QuizCard from "../components/QuizCard";
import QuizButton from "../components/QuizButton";

function Quiz() {

  //quiz에 지정하기
  

  return (
    <div className="w-full">
      <QuizCard quizData={{qui_id:0,question:'기본'}}/>
      <QuizButton nextBtn={()=>console.log('다음문제')} prevBtn={()=>console.log('이전문제')}/>
    </div>
  );
}

export default Quiz;

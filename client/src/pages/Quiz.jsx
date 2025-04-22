import { useEffect, useState } from "react";

import QuizCard from "../components/QuizCard";
import QuizButton from "../components/QuizButton";

function Quiz() {

  const [quizData, setQuizData] = useState([]); // 퀴즈를 저장할 상태 변수

  // API 가져오기
  useEffect(()=>{
    const fetchQuiz = async() => {
      try{
        const response = await fetch('http://localhost:8080/quiz')
        if(!response.ok){
          throw new Error('네트워크 응답이 좋지 않습니다.');
        }

        const data = await response.json();

        setQuizData(data);
      }
      catch(err){
        console.error('퀴즈를 가져오는 중 오류 발생:', err);
      }
    }

    fetchQuiz();
  },[])

  //quiz에 지정하기


  return (
    <div className="max-w-[450px] m-auto w-full flex flex-col gap-10">
      <QuizCard quizData={quizData[0]}/>
      <QuizButton />
    </div>
  );
}

export default Quiz;
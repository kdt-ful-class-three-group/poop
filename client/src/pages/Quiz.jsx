import { useEffect, useState } from "react";

import QuizCard from "../components/QuizCard";
import QuizButton from "../components/QuizButton";

function Quiz() {

  const [quizData, setQuizData] = useState([]); // 퀴즈를 저장할 상태 변수
  const [number, setNumber] = useState(0); // 퀴즈 번호를 저장할 상태 변수

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

  //버튼 설정
  const nextBtn = ()=>{
    if(number < quizData.length - 1){
      setNumber(number + 1);
    }
  }
  const prevBtn = ()=>{
    if(number > 0){
      setNumber(number - 1);
    }
  }

  //quiz에 지정하기

  return (
    <div className="max-w-[450px] m-auto w-full flex flex-col gap-10">
      <QuizCard quizData={quizData[number] || '문제'}/>
      <QuizButton nextBtn={nextBtn} prevBtn={prevBtn}/>
    </div>
  );
}

export default Quiz;
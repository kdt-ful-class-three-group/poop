import { useEffect, useState } from "react";

import QuizCard from "../components/QuizCard";
import QuizButton from "../components/QuizButton";

function Quiz() {
  const [quizData, setQuizData] = useState(null);
  const [moveData, setMoveData] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [isCorrect, setIsCorrect] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8081/quiz").then((response) => response.json())
      .then((data) => {
        setQuizData(data);
      })
  }, []);
  //quiz에 지정하기

  const nextEvent = () => {
    if (moveData === quizData.length) {
      console.log('문제 끝');
    } else {
      setMoveData(moveData + 1);
    }
    console.log('next');
  }

  const prevEvent = () => {
    if (moveData === 0) {
      console.log('문제 끝');
    } else {
      setMoveData(moveData - 1)
    }
    console.log('prev');
  }

  const showAnswer = () => {
    setIsShow(!isShow);
    console.log(quizData[moveData].answer);
  }

  const checkAnswer = () => {
    const input = document.querySelector('input');
    const userAnswer = input.value;
    if (quizData[moveData].answer === userAnswer) {
      setIsCorrect(1);
      console.log('정답');
    } else {
      setIsCorrect(-1);
      console.log('오답');
    }
  }

  return (
    <div className="w-full">
      <div className="shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-[6px]  mb-[30px] p-4">
        {quizData ? <p>{quizData[moveData].question}</p> : <p>데이터 없음</p>}
      </div>
      <div className="border-[1px] flex border-[#D9D9D9]/70  mb-[60px] ">
        <input
          className="w-full outline-none p-2"
          type="text"
          placeholder="정답을 입력해주세요."
        />
        <button className="bg-[#8E5E43] border-[#8E5E43] p-2 rounded-[0px_3px_3px_0px] text-white whitespace-nowrap" onClick={checkAnswer}>
          확인
        </button>
      </div>
      <div className="text-center">
        {isCorrect === -1 && <p className="text-red-500">다시 입력해 주세요</p>}
        {isCorrect === 1 && <p className="text-green-500">정답 입니다.</p>}
      </div>
      <div className="flex justify-center bg-gray-300 px-4 py-2 rounded-md mb-[30px] hover:bg-gray-400">
        {isShow ? <button onClick={showAnswer}>{quizData[moveData].answer}</button> : <button onClick={showAnswer}>정답확인</button>}
      </div>
      <div className="flex justify-between">
        <button className="bg-gray-300 w-[45%] px-4 py-2 rounded-md hover:bg-gray-400" onClick={prevEvent}>
          이전 문제
        </button>
        <button className="bg-gray-300 w-[45%] px-4 py-2 rounded-md hover:bg-gray-400" onClick={nextEvent}>
          다음 문제
        </button>
      </div>
    </div>
  );
}

export default Quiz;

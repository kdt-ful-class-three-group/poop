import { useEffect, useState } from "react";

import QuizCard from "../components/QuizCard";
import QuizButton from "../components/QuizButton";

function Quiz() {
  const [quizData, setQuizData] = useState(null);
  const [moveData, setMoveData] = useState(0);

  useEffect(() => {
  fetch("http://localhost:8081/quiz").then((response) => response.json())
      .then((data) => {
        setQuizData(data);
      })
  }, [moveData]);
  //quiz에 지정하기

  const nextEvent = () => {
    setMoveData(moveData + 1);
    console.log('next');
  }

  const prevEvent = () => {
    setMoveData(moveData - 1)
    console.log('prev');
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
        <button className="bg-[#8E5E43] border-[#8E5E43] p-2 rounded-[0px_3px_3px_0px] text-white whitespace-nowrap">
          확인
        </button>
      </div>
      <div className="flex justify-center bg-gray-300 px-4 py-2 rounded-md mb-[30px] hover:bg-gray-400">
        <button>정답확인</button>
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

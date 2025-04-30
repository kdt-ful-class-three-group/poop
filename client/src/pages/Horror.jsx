import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import poopTimeApi from "../services/poopTimeApi";
function Horror() {
  const location = useLocation();
  const category = location.state?.category || "없음"; // 기본값 설정
  const [quizDataState, setQuizDataState] = useState([]);
  const [quizNextNum, setQuizNextNum] = useState(0);
  useEffect(() => {
    const apiQuizData = async () => {
      const quizData = await poopTimeApi(category);
      setQuizDataState(quizData);
    };
    apiQuizData();
  }, [category]);
  //* 퀴즈 다음버튼
  const quizNext = () => {
    //* 퀴즈 다음 버튼 클릭 시 디비 데이터 길이 보다 많으면 멈춤
    if (quizDataState.length - 1 > quizNextNum) {
      setQuizNextNum(quizNextNum + 1);
    }
  };
  //* 퀴즈 이전 버튼
  const quizPrev = () => {
    //* 퀴즈 다음 버튼 클릭 시 0 보다 적으면 멈춤
    if (quizNextNum > 0) {
      setQuizNextNum(quizNextNum - 1);
    }
  };
  return (
    <div className="w-full h-[calc(100vh-230px)] flex items-center">
      <div className="absolute left-1">
        <button onClick={quizPrev} className="text-6xl">
          &#8249;
        </button>
      </div>
      {/* {quizDataState.map((data) => {
        <div
          key={data.id}
          className="w-full h-[100%] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-[6px] flex items-center justify-center"
        >
          <p className="">{data.question}</p>
        </div>;
      })} */}
      {quizDataState.length > 0 && (
        <div
          key={quizDataState[quizNextNum].quiz_id}
          className="shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-[6px]  mb-[30px] p-4"
        >
          <p>{quizDataState[quizNextNum].question}</p>
        </div>
      )}
      <div className="absolute right-1">
        <button onClick={quizNext} className="text-6xl">
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Horror;

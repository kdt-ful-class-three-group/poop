import { useEffect, useState } from "react";
import poopTimeQuizApi from "../services/pooptimequizapi";
import { useLocation } from "react-router-dom";
function Quiz() {
  const location = useLocation();
  const category = location.state?.category || "없음";
  const [quizDataState, setQuizDataState] = useState([]);
  const [quizNextNum, setQuizNextNum] = useState(0);
  const [quizAnswerValue, setQuizAnswerValue] = useState("");
  // 유머 데이터 받아오는 부분
  useEffect(() => {
    const apiQuizData = async () => {
      const quizData = await poopTimeQuizApi(category);
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
  const quizAnswer = () => {
    if (quizDataState.length > 0) {
      const currentQuiz = quizDataState[quizNextNum]; // 현재 퀴즈 데이터
      if (currentQuiz.answer === quizAnswerValue) {
        alert("정답입니다.");
      } else {
        alert("오답입니다.");
      }
    }
  };
  //quiz에 지정하기
  return (
    <div className="w-full">
      {quizDataState.length > 0 && (
        <div
          key={quizDataState[quizNextNum].quiz_id}
          className="shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-[6px]  mb-[30px] p-4"
        >
          <p>{quizDataState[quizNextNum].question}</p>
        </div>
      )}
      <div className="border-[1px] flex border-[#D9D9D9]/70  mb-[60px] ">
        <input
          className="w-full outline-none p-2"
          type="text"
          value={quizAnswerValue}
          onChange={(e) => setQuizAnswerValue(e.target.value)}
          placeholder="정답을 입력해주세요."
        />
        <button
          className="bg-[#8E5E43] border-[#8E5E43] p-2 rounded-[0px_3px_3px_0px] text-white whitespace-nowrap"
          onClick={quizAnswer}
        >
          확인
        </button>
      </div>
      {quizDataState.length > 0 && (
        <div
          key={quizNextNum}
          className="flex justify-center bg-gray-300 px-4 py-2 rounded-md mb-[30px] hover:bg-gray-400"
        >
          <button>정답확인</button>
          <p>{quizDataState[quizNextNum].answer}</p>
        </div>
      )}
      <div className="flex justify-between">
        <button
          onClick={quizPrev}
          className="bg-gray-300 w-[45%] px-4 py-2 rounded-md hover:bg-gray-400"
        >
          이전 문제
        </button>
        <button
          onClick={quizNext}
          className="bg-gray-300 w-[45%] px-4 py-2 rounded-md hover:bg-gray-400"
        >
          다음 문제
        </button>
      </div>
    </div>
  );
}

export default Quiz;

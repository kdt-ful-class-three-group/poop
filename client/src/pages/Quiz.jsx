import { useState, useEffect } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(false);

  // 처음 렌더링될 때 문제 데이터를 가져오기
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8080/quiz");
        const data = await response.json();
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setQuestions(shuffled);
      } catch (error) {
        console.error("문제를 불러오는 데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  // 정답 확인
  const checkAnswer = () => {
    if (!userAnswer.trim()) return; // 입력값이 없으면 리턴
    const currentQuestion = questions[currentIndex]; // 현재 문제 가져오기
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setFeedback("정답입니다!");
    } else {
      setFeedback("다시 입력해주세요!");
    }
  };

  // 다음 문제로 이동
  const goToNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetQuestionState();
    }
  };

  // 이전 문제로 이동
  const goToPrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      resetQuestionState();
    }
  };

  // 문제 전환 시 상태 초기화
  const resetQuestionState = () => {
    setUserAnswer("");
    setFeedback("");
    setShowAnswer(false);
  };

  // 사용자 입력 처리 및 특수문제 제한 처리
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^\w\sㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
    setUserAnswer(filteredValue);
  };

  // 정답 보기 토글
  const toggleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  // 로딩 중 화면
  if (loading) {
    return <div className="flex items-center justify-center h-screen">로딩 중...</div>;
  }

  // 메인 렌더링
  return (
    <div className="w-full max-w-xl mx-auto p-4">
      {/* 문제 */}
      <div className="shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-[6px] mb-[30px] p-4 min-h-[80px] flex items-center justify-center text-center">
        {/* 문제가 있을때만 화면을 보여줘 */}
        {questions.length > 0 && <p>{questions[currentIndex].question}</p>}
      </div>

      {/* 정답 입력 및 확인 버튼 */}
      <div className="border-[1px] flex border-[#D9D9D9]/70 mb-[10px]">
        <input
          className="w-full outline-none p-2"
          type="text"
          placeholder="정답을 입력해주세요."
          value={userAnswer}
          // input 창에 뭔가를 입력할 때 handleInputChange 함수 실행
          onChange={handleInputChange}
        />
        <button
          onClick={checkAnswer}
          className="bg-[#8E5E43] border-[#8E5E43] p-2 rounded-[0px_3px_3px_0px] text-white whitespace-nowrap"
        >
          확인
        </button>
      </div>

      {/* 피드백 */}
      {feedback && (
        <p className={`text-center mb-4 ${feedback === '정답입니다!' ? 'text-green-500' : 'text-red-500'}`}>
          {feedback}
        </p>
      )}

      {/* 정답 보기 */}
      <div className="flex justify-center bg-gray-300 px-4 py-2 rounded-md mb-[30px] hover:bg-gray-400">
        <button onClick={toggleShowAnswer}>
          정답보기 {showAnswer && `: ${questions[currentIndex]?.answer}`}
        </button>
      </div>

      {/* 이전/다음 버튼 */}
      <div className="flex justify-between">
        <button
          onClick={goToPrevQuestion}
          className={`w-[45%] px-4 py-2 rounded-md 
            ${currentIndex === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400'}
          `}>
          이전 문제
        </button>
        <button
          onClick={goToNextQuestion}
          className={`w-[45%] px-4 py-2 rounded-md 
            ${currentIndex === questions.length - 1 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-gray-300 hover:bg-gray-400'}
          `}
        >
          다음 문제
        </button>
      </div>
    </div>
  );
};

export default Quiz;

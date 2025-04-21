import { useState, useEffect } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);

  // 문제 데이터 가져오기
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // 실제 환경에서는 API 호출로 대체
        // const response = await fetch('/database/seed.js'); 
        // const data = await response.json();
        
        const shuffled = [...data].sort(() => Math.random() - 0.5); // 문제 섞기
        setQuestions(shuffled);
        setLoading(false);
        } catch (error) {
        console.error('문제를 불러오는 데 실패했습니다.', error);
        setLoading(false);
        }
    };

    fetchQuestions();
  }, []);

  // 정답 확인
  const checkAnswer = () => {
    if (!userAnswer.trim()) return;
    
    const currentQuestion = questions[currentIndex];
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setFeedback('정답입니다!');
    } else {
      setFeedback('다시 입력해주세요!');
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

  // 문제 상태 초기화
  const resetQuestionState = () => {
    setUserAnswer('');
    setFeedback('');
    setShowAnswer(false);
  };

  // 특수문자 입력 방지
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // 특수문자 제거 (한글, 영문, 숫자만 허용)
    const filteredValue = inputValue.replace(/[^\w\sㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
    setUserAnswer(filteredValue);
  };

  // 정답 토글
  const toggleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">로딩 중...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow " >
     

      {/* 문제 영역 */}
      <div className="min-h-48 mb-8 border rounded flex items-center justify-center ">
        {questions.length > 0 && (
          <div className="text-center p-4">
            <p className="mt-2">{questions[currentIndex].question}</p>
          </div>
        )}
      </div>

      {/* 정답 입력 영역 */}
      <div className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={userAnswer}
            onChange={handleInputChange}
            className="flex-grow p-2 border rounded-l"
            placeholder="정답 작성하기"
          />
          <button
            onClick={checkAnswer}
            className="text-white px-4 py-2 rounded-r bg-yellow-700"
          >
            확인
          </button>
        </div>
        {feedback && (
          <p className={`mt-2 text-sm ${feedback === '정답입니다!' ? 'text-green-500' : 'text-red-500'}`}>
            {feedback}
          </p>
        )}
      </div>

      {/* 정답 보기 버튼 */}
      <div className="relative mb-4">
        <button
          onClick={toggleShowAnswer}
          className="w-full bg-gray-200 text-gray-700 p-2 rounded flex items-center justify-center"
        >
          <span className="mr-2">정답보기</span>
          {showAnswer && (
            <span className="inline-block ml-2">
              {questions[currentIndex]?.answer}
            </span>
          )}
        </button>
       
      </div>

      {/* 다음 문제 버튼 */}
      <button
        onClick={goToNextQuestion}
        className="w-full bg-gray-200 text-gray-700 p-2 rounded mb-4"
      >
        다음 문제로 넘어가기
      </button>

      {/* 화살표 네비게이션 */}
      <div className="flex justify-between">
        <button
          onClick={goToPrevQuestion}
          disabled={currentIndex === 0}
          className={`text-2xl ${currentIndex === 0 ? 'text-gray-300' : 'text-gray-700'}`}
        >
          &lt;
        </button>
        
        <button
          onClick={goToNextQuestion}
          disabled={currentIndex === questions.length - 1}
          className={`text-2xl ${currentIndex === questions.length - 1 ? 'text-gray-300' : 'text-gray-700'}`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Quiz;
import { useEffect, useState } from "react";

import QuizCard from "../components/QuizCard.jsx";
import PageButton from "../components/PageButton.jsx";

function Quiz() {
    const [quizData, setQuizData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);


    const handleSubmit = () => {
        if(answer === ""){
            alert("답 입력해주세요.");
        } else if(answer === quizData[currentIndex].answer){
            setIsAnswerCorrect(true);
            alert("정답입니다.");
            setCurrentIndex(prev => prev + 1);
            setAnswer("");
        } else {
            setIsAnswerCorrect(false);
           alert("오답입니다.");
           setAnswer("")
        }
    }


  //quiz에 지정하기

  return (
    <div className="w-full">
      <div className="shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-[6px]  mb-[30px] p-4">
         <QuizCard
            quizData={quizData}
          setQuizData={setQuizData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
      />
      </div>
      <div className="border-[1px] flex border-[#D9D9D9]/70  mb-[60px] ">

              <input
                  className="w-full outline-none p-2"
                  type="text"
                  placeholder="정답을 입력해주세요."
                  name="answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}

              />
              <button onClick={handleSubmit}
                  className="bg-[#8E5E43] border-[#8E5E43] p-2 rounded-[0px_3px_3px_0px] text-white whitespace-nowrap">
                  확인
              </button>



      </div>
        <div className="flex justify-center bg-gray-300 px-4 py-2 rounded-md mb-[30px] hover:bg-gray-400">
            <button>정답확인</button>
        </div>
        <PageButton

            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            length={quizData.length}
        />
    </div>
  );
}

export default Quiz;

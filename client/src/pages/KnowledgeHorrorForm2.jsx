import React from "react";
import { useLocation, } from "react-router-dom";
import QuizCard from "../components/HorrorCard.jsx";
import HorrorCard from "../components/HorrorCard.jsx";
import PageButton from "../components/PageButton.jsx";
import {useState} from "react";

function KnowledgeHorror() {
  const location = useLocation();
  const category = location.state?.category || "없음"; // 기본값 설정
  const [horrorData, setHorrorData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);



    const toggleAnswer = () => {
        setShowAnswer((prev) => !prev);
    };


    return (
    <div className="w-full ">
        <div className="relative shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-[6px]  mb-[20px] p-4 ">
            {showAnswer && (
                <div className="absolute inset-0 flex justify-center items-center bg-black/1 backdrop-blur-sm">
                    <div className="relative bg-white border border-gray-300 px-6 py-4 rounded-lg text-center max-w-[90%] max-h-[80%] overflow-auto shadow-lg">
                        {horrorData[currentIndex]?.answer}
                    </div>
                </div>
            )}


            <HorrorCard
            horrorData={horrorData}
            setHorrorData={setHorrorData}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
        />
        </div>

            <div className="flex justify-center mb-[30px]">
                <button
                    onClick={toggleAnswer}
                    className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                    {showAnswer ? "닫기" : "해설 보기"}
                </button>
            </div>



            <PageButton
                prevLabel="이전 문제"
                nextLabel="다음 문제"
                onNext={() => setShowAnswer(false)}
                onPrev={() => setShowAnswer(false)}


                setCurrentIndex={setCurrentIndex}
                currentIndex={currentIndex}
                length={horrorData.length}
            />

    </div>


)
}

export default KnowledgeHorror;
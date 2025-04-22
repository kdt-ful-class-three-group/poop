import { useEffect, useState } from "react";
import CardBtn from "./CardBtn";
import ShowAnswer from "./ShowAnswer.jsx";


function QuizCard() {
    const [quizData, setQuizData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/quiz");
                if (response.ok) {
                    const data = await response.json();
                    setQuizData(data);
                }
            } catch (error) {
                console.error("Error fetching quiz data:", error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className="flex flex-col justify-center items-center rounded-lg p-4 w-full">
            {quizData.length > 0 && (
                <>

                    <div className="border-2 border-gray-300 rounded-lg  mx-4 w-[320px] h-[240px] flex flex-col justify-center items-center">
                        <div>{quizData[currentIndex]?.question}</div>
                        {/*<div>{quizData[currentIndex]?.answer}</div>*/}
                    </div>

                    <label className="flex justify-center items-center mt-4">
                        <input className="border-2 border-gray-300 rounded-lg p-2 w-[260px] h-[40px]" type="text" placeholder="정답을 입력하세요"/>
                        <button type={"submit"} className="h-[40px] w-15 bg-[#8E5E43] rounded-lg ">확인</button>
                    </label>

                    <ShowAnswer/>


                    <CardBtn
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                        length={quizData.length}
                    />

                </>
            )}
        </div>
    );
}

export default QuizCard;
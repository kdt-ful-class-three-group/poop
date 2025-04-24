import { useEffect, useState } from "react";
// import ShowAnswer from "./ShowAnswer.jsx";


function QuizCard({ quizData, setQuizData, currentIndex}) {



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

                    <div className="rounded-lg p-3  mx-4 w-[320px] h-[240px] flex flex-col justify-center items-center overflow-auto">
                        <div className="break-word">{quizData[currentIndex]?.question}</div>
                        {/*<div>{quizData[currentIndex]?.answer}</div>*/}
                    </div>


                </>
            )}
        </div>
    );
}

export default QuizCard;

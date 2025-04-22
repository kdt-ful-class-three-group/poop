import {useEffect, useState} from "react";


function Quiz() {
    const [quizData, setQuizData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/quiz", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });


                if (response.ok) {
                    const data = await response.json();
                    console.log("Fetched quiz data:", data);
                    setQuizData(data);


                } else {
                    console.error("Failed to fetch quiz data");

                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {quizData ? (
                <>
                <div>퀴즈: {quizData[0].question}</div>
                <div>정답:{quizData[1].answer}</div>
                </>
            ) : (
                <p>Loading quiz data...</p>
            )}
        </>
    );
}

export default Quiz;
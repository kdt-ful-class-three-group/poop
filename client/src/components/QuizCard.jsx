import {useEffect,useState}  from "react";

function QuizCard() {

    const [quizData, setQuizData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch("http://localhost:8080/quiz", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },

                })
                    if (response.ok){
                        const data = await response.json();
                        console.log("Fetched quiz data:", data);
                        setQuizData(data);

                }

            }catch(error){
                console.error("Error fetching quiz data:", error);
            }
        }
        fetchData();
    }, []);




    return(
        <div className="flex flex-col justify-center items-center rounded-lg p-4 w-full -">
                {quizData ? (
                    <div className="border-2 border-gray-300 rounded-lg p-4 w-full ">
                        <div> {quizData[0].question}</div>
                        <div>{quizData[1].answer}</div>
                    </div>
                ) : (
                    <p>Loading quiz data...</p>
                )}

        </div>
    )

}

export default QuizCard;
import { useEffect, useState } from "react";
import PageButton from "./PageButton.jsx";
// import CardBtn from "./CardBtn";
// import ShowAnswer from "./ShowAnswer.jsx";


function HorrorCard() {
    const [horrorData, setHorrorData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/horror");
                if (response.ok) {
                    const data = await response.json();
                    setHorrorData(data);
                }
            } catch (error) {
                console.error("Error fetching quiz data:", error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className="flex flex-col justify-center items-center rounded-lg p-4 w-full h-full">
            {horrorData.length > 0 && (
                <>

                    <div className="border-2 border-gray-300 rounded-lg p-3  mx-4 w-[320px] h-[240px] flex flex-col justify-center items-center overflow-auto">
                        <div className="break-word">{horrorData[currentIndex]?.question}</div>
                    </div>

                    <PageButton
                    setCurrentIndex={setCurrentIndex}
                    currentIndex={currentIndex}
                    length={horrorData.length}
                    />


                </>
            )}
        </div>
    );
}

export default HorrorCard;

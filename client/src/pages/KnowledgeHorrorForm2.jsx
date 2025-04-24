import React from "react";
import { useLocation } from "react-router-dom";
import QuizCard from "../components/HorrorCard.jsx";
import HorrorCard from "../components/HorrorCard.jsx";

function KnowledgeHorror() {
  const location = useLocation();
  const category = location.state?.category || "없음"; // 기본값 설정

  return (
    <div className="w-full ">
        <HorrorCard/>
        <div className="flex justify-center bg-gray-300 px-4 py-2 rounded-md mb-[30px] hover:bg-gray-400">
        <button>해석 보기</button>
      </div>

    </div>
  );
}

export default KnowledgeHorror;
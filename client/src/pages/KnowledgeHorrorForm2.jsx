import React from "react";
import { useLocation } from "react-router-dom";

function KnowledgeHorror() {
  const location = useLocation();
  const category = location.state?.category || "없음"; // 기본값 설정

  return (
    <div className="w-full">
      <div className="h-[calc(100vh-380px)] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-[6px] mb-[30px] p-4">
        <p className="h-full flex items-center justify-center">
          내용
        </p>
      </div>
      <div className="flex justify-center bg-gray-300 px-4 py-2 rounded-md mb-[30px] hover:bg-gray-400">
        <button>해석 보기</button>
      </div>
      <div className="flex justify-between">
        <button className="bg-gray-300 w-[45%] px-4 py-2 rounded-md hover:bg-gray-400">
          이전
        </button>
        <button className="bg-gray-300 w-[45%] px-4 py-2 rounded-md hover:bg-gray-400">
          다음
        </button>
      </div>
    </div>
  );
}

export default KnowledgeHorror;

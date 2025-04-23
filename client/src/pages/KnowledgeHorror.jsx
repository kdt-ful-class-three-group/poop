import React from "react";
import { useLocation } from "react-router-dom";

function KnowledgeHorror() {
  const location = useLocation();
  const category = location.state?.category || "없음"; // 기본값 설정

  return (
    <div className="w-full h-[calc(100vh-230px)] flex items-center">
      <div className="flex items-center justify-center">
        <button className="text-7xl">&#8249;</button>
      </div>
      <div className="w-full h-[100%] border-1 flex items-center justify-center">
        <p className="">
          내용
        </p>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <button className="text-7xl">&#8250;</button>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeHorror;

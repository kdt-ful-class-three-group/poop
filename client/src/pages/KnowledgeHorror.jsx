import React from "react";
import { useLocation } from "react-router-dom";

function KnowledgeHorror() {
  const location = useLocation();
  const category = location.state?.category || "없음"; // 기본값 설정

  return (
    <div className="w-full h-[calc(100vh-230px)] flex items-center">
      <div>
        <button className="text-6xl">&#8249;</button>
      </div>
      <div className="w-full h-[100%] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-[6px] flex items-center justify-center">
        <p className="">
          내용
        </p>
      </div>
      <div>
        <button className="text-6xl">&#8250;</button>
      </div>
    </div>
  );
}

export default KnowledgeHorror;

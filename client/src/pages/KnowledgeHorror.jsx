<<<<<<< HEAD
function Knowledge() {
  return (
    <div>
      <h1>Knowledge</h1>
      <p>This is the knowledge page.</p>
=======
import React from "react";
import { useLocation } from "react-router-dom";

function KnowledgeHorror() {
  const location = useLocation();
  const category = location.state?.category || "없음"; // 기본값 설정

  return (
    <div className="w-full h-[calc(100vh-230px)] flex items-center">
      <div className="absolute left-1">
        <button className="text-6xl">&#8249;</button>
      </div>
      <div className="w-full h-[100%] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-[6px] flex items-center justify-center">
        <p className="">
          내용
        </p>
      </div>
      <div className="absolute right-1">
        <button className="text-6xl">&#8250;</button>
      </div>
>>>>>>> fa9d107fa1e622f483757d30a700f3dca7cf181d
    </div>
  );
}

<<<<<<< HEAD
export default Knowledge;
=======
export default KnowledgeHorror;
>>>>>>> fa9d107fa1e622f483757d30a700f3dca7cf181d

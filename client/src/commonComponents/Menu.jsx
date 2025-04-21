// src/commonComponents/Menu.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    // <div className="flex justify-center items-start h-screen pt-15">
      <div className="flex justify-center items-center gap-8 my-10">
        <button
          onClick={() => navigate("/quiz")}
          className="px-7 py-3 bg-gray-200 hover:bg-gray-400 rounded-md shadow"
        >
          퀴즈
        </button>
        <button
          onClick={() => navigate("/knowledgeHorror")}
          className="px-7 py-3 bg-gray-200 hover:bg-gray-300 rounded-md shadow"
        >
          상식
        </button>
        <button
          onClick={() => navigate("/knowledgeHorror")}
          className="px-7 py-3 bg-gray-200 hover:bg-gray-300 rounded-md shadow"
        >
          괴담
        </button>
      </div>
    // </div>
  );
};

export default Menu;

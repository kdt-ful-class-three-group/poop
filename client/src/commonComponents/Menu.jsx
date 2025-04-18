import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ onSelect }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-4">
        <button
          onClick={() => onSelect("/Quiz")}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md shadow"
        >
          퀴즈
        </button>
        <button
          onClick={() => onSelect("knowledge")}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md shadow"
        >
          상식
        </button>
        <button
          onClick={() => onSelect("horror")}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md shadow"
        >
          괴담
        </button>
      </div>
    </div>
  );
};

export default Menu;

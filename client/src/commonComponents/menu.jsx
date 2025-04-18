import React from "react";

const Menu = ({ onSelect }) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button
        onClick={() => onSelect("quiz")}
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
  );
};

export default Menu;

import React from "react";

export default function NavToggle({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-20 h-20 flex justify-center items-center bg-gray-200 rounded-full p-4 cursor-pointer mb-7"
        >
            메뉴
        </button>
    );
}
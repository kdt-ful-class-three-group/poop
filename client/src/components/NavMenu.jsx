    import React from "react";
    import { NavLink } from "react-router-dom";

    export default function NavMenu({ onClose }) {
        return (
            <div className="bg-[#D9D9D9] absolute flex-col items-center bottom-0 justify-center p-4 w-[450px] rounded-t-full h-[230px] flex">
                <NavLink to="/Mypage" className="py-1">
                    마이페이지
                </NavLink>
                <NavLink to="/community" className="py-1">
                    커뮤니티
                </NavLink>
                <NavLink to="/hummor" className="py-1">
                    유머
                </NavLink>
                <button
                    onClick={onClose}
                    className="mt-2 text-red-500 self-center"
                >
                    닫기
                </button>
            </div>
        );
    }
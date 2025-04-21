import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavToggle from "../components/NavBtn.jsx";
import NavMenu from "../components/NavMenu.jsx";

function Nav() {
    const [open, setOpen] = useState(false);
    const toggleNav = () => setOpen(prev => !prev);



    return (
        <div className="fixed w-full bottom-0 flex justify-center items-center">
            {open
                ? <NavMenu onClose={toggleNav} />
                : <NavToggle onClick={toggleNav} />
            }
        </div>
    );





}

export default Nav;
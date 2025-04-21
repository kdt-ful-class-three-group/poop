import Menu from "../commonComponents/menu.jsx";
import Nav from "../commonComponents/Nav.jsx";

export default function Layout({ children }) {
    return (
        <>
            <Menu />
            <div className="container mx-auto bg-white min-h-screen flex justify-center items-center">
                {children}
            </div>
            <Nav/>

        </>
    )
}
import './home.css';
import Menu from "../commonComponents/menu.jsx";



function Home() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="fixed width-full flex bg-whitep ">
                <Menu/>
            </div>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-cyan-600">Home</h1>
                <p>This is the Home page.</p>
            </div>
        </div>
    );
}

export default Home;
import './home.css';
import Menu from "../commonComponents/menu.jsx";



function Home() {
    return (
        <>
            <div className="fixed width-full flex bg-whitep ">
                <Menu/>
            </div>
            <div className=" flex w-full flex-col items-center justify-center h-screen">
                <div className="text-center mt-24">
                    <h1 className="text-cyan-600 text-3xl font-bold mb-4">Home</h1>
                    <p className="text-gray-700 text-lg">This is the Home page.</p>
                </div>
            </div>
        </>
    );
}

export default Home;
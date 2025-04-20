
import Menu from "../commonComponents/menu.jsx";
import StartCard from "../components/StartCard.jsx";
function Home() {
    return (
        <>
            <Menu />


            <div className="container mx-auto bg-white min-h-screen flex justify-center items-center">
                <StartCard/>
            </div>

        </>
    );
}

export default Home;

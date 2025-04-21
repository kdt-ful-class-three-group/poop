
import Menu from "../commonComponents/menu.jsx";
import StartCard from "../components/StartCard.jsx";
import Layout from "../layouts/Layout.jsx";
function Home() {
    return (

        <Layout>
            <div className="container mx-auto bg-white min-h-screen flex justify-center items-center">
                <StartCard/>
            </div>
        </Layout>
    );
}

export default Home;

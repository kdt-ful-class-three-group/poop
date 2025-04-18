import './home.css'
import Nav from '../commonComponents/nav';

function Home() {
    return (
        <div>
          <Nav/>
            <h1 className="text-cyan-400">Home</h1>
            <p>This is the Home page.</p>
        </div>
    );
}

export default Home;
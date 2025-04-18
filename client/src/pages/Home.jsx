import './home.css'
import Menu from '../commonComponents/menu';

function Home() {
    return (
        <div>
          <Menu/>
            <h1 className="text-cyan-400">Home</h1>
            <p>This is the Home page.</p>
        </div>
    );
}

export default Home;
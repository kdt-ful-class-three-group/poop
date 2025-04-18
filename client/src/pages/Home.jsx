<<<<<<< HEAD
import './home.css'
import Menu from '../commonComponents/menu';


=======
>>>>>>> 09744a79be3d954e427d451972bf37b56ac13544
function Home() {
  const handleMenuSelect = (menu) => {
    console.log(`선택된 메뉴: ${menu}`);
  }
    return (
        <div>
            <Menu onSelect={handleMenuSelect} />
            <h1 className="text-cyan-400">Home</h1>
            <p>This is the Home page.</p>
        </div>
    );
}

export default Home;
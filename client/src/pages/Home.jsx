import Menu from '../commonComponents/menu';


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
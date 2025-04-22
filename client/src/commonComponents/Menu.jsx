// commonComponents/Menu.jsx
import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();

    const goTo = (type) => {
        navigate('/KnowledgeHorror', { state: { type } });
    };

    return (
        <div className="fixed w-full flex top-10 justify-around bg-transparent p-4">
            <button onClick={() => navigate('/quiz')}>퀴즈</button>
            <button onClick={() => goTo('horror')}>공포</button>
            <button onClick={() => goTo('knowledge')}>지식</button>
        </div>
    );
}

export default Menu;
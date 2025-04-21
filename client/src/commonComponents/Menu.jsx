import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/Quiz")}>퀴즈</button>
      <button>상식</button>
      <button>괴담</button>
    </div>
  );
}

export default Menu;

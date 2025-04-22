import { useNavigate } from "react-router-dom";
// import KnowledgeHorror from "../pages/KnowledgeHorror";
function Menu() {
  const navigate = useNavigate();
  const KnowledgeHorrorNav = (category) => {
    // navText(category);
    navigate("/KnowledgeHorror", { state: { category } });
  };
  return (
    <div>
      <button onClick={() => navigate("/Quiz")}>퀴즈</button>
      <button onClick={() => KnowledgeHorrorNav("knowledge")}>상식</button>
      <button onClick={() => KnowledgeHorrorNav("horror")}>괴담</button>
    </div>
  );
}

export default Menu;

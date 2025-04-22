import { useNavigate } from "react-router-dom";
// import KnowledgeHorror from "../pages/KnowledgeHorror";
function Menu() {
  const navigate = useNavigate();
  const KnowledgeHorrorNav = (category) => {
    // navText(category);
    navigate("/KnowledgeHorror", { state: { category } });
  };

  const buttonClass = 'cursor-pointer bg-gray-200 p-[5px_20px]'

  return (
    <div className="flex w-full justify-around mt-10 mb-10">
      <button className={buttonClass}
      onClick={() => navigate("/Quiz")}>퀴즈</button>
      <button className={buttonClass} onClick={() => KnowledgeHorrorNav("knowledge")}>상식</button>
      <button className={buttonClass} onClick={() => KnowledgeHorrorNav("horror")}>괴담</button>
    </div>
  );
}

export default Menu;

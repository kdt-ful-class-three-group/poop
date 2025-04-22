import { useNavigate } from "react-router-dom";
// import KnowledgeHorror from "../pages/KnowledgeHorror";
function Menu() {
  const navigate = useNavigate();
  const KnowledgeHorrorNav = (category) => {
    // navText(category);
    navigate("/KnowledgeHorror", { state: { category } });
  };

  const buttonClass = 'cursor-pointer bg-gray-200 pl-4 pr-4 pt-2 pb-2'

  return (
    <div className="flex w-full m-auto max-w-[450px] justify-between mt-10 mb-10">
      <button className={buttonClass}
      onClick={() => navigate("/Quiz")}>퀴즈</button>
      <button className={buttonClass} onClick={() => KnowledgeHorrorNav("knowledge")}>상식</button>
      <button className={buttonClass} onClick={() => KnowledgeHorrorNav("horror")}>괴담</button>
    </div>
  );
}

export default Menu;

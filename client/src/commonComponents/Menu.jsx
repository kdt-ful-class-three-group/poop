import { useNavigate } from "react-router-dom";
// import KnowledgeHorror from "../pages/KnowledgeHorror";
function Menu() {
  const navigate = useNavigate();
  const KnowledgeHorrorNav = (category) => {
    // navText(category);
    navigate("/KnowledgeHorror", { state: { category } });
  };
  return (
    <div
      className="flex justify-between w-[calc(100%-80px)] m-auto"
      style={{ margin: "30px auto 0" }}
    >
      <button
        className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
        onClick={() => navigate("/Quiz")}
      >
        퀴즈
      </button>
      <button
        className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 "
        onClick={() => KnowledgeHorrorNav("knowledge")}
      >
        상식
      </button>
      <button
        className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
        onClick={() => KnowledgeHorrorNav("horror")}
      >
        괴담
      </button>
    </div>
  );
}

export default Menu;

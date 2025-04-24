import { useNavigate } from "react-router-dom";

// import KnowledgeHorror from "../pages/KnowledgeHorror";
function Menu({ setShowDom }) {
  const navigate = useNavigate();

  const KnowledgeHorrorNav = (category) => {
    // if (showDom === true) {
    // showDom이 false일 때만 상태 변경
    setShowDom(false);
    // }
    // navText(category);
    navigate(`/${category}`, { state: { category } });
  };
  return (
    <div className="flex justify-between w-full ">
      <button
        className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
        onClick={() => KnowledgeHorrorNav("Quiz")}
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

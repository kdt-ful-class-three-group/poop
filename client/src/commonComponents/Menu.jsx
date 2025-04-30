
import { useNavigate } from "react-router-dom";
// import KnowledgeHorror from "../pages/KnowledgeHorror";

import Button from "../components/Button";
function Menu() {
  const navigate = useNavigate();
  const Humor = (url,category) => {
    // navText(category);
    navigate(url, { state: { category } });
  };
  return (
    <div className="flex justify-between w-full ">
      <button
        className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
        onClick={() => Humor('/Quiz','quiz')}
      >
        퀴즈
      </button>
      <button
        className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 "
        onClick={() => Humor('/Quiz','sense')}
      >
        상식
      </button>
      <button
        className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
        onClick={() => Humor('/Quiz','horror')}
      >
        괴담
      </button>
    </div>
  );
}

export default Menu;

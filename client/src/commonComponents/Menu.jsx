
import { useNavigate } from "react-router-dom";
// import KnowledgeHorror from "../pages/KnowledgeHorror";

import Button from "../components/Button";
function Menu() {
  const navigate = useNavigate();
  const KnowledgeHorrorNav = (category) => {
    // navText(category);
    navigate("/KnowledgeHorror", { state: { category } });
  };
  return (
    <div className="flex justify-between w-full mt-8">
      <Button text='퀴즈' colorClass='bg-gray-300' clickEvent={()=>navigate('/Quiz')}/>
      <Button text='상식' colorClass='bg-gray-300' clickEvent={()=> KnowledgeHorrorNav("knowledge")}/>
      <Button text='괴담' colorClass='bg-gray-300' clickEvent={()=> KnowledgeHorrorNav("horror")}/>
    </div>
  );
}

export default Menu;

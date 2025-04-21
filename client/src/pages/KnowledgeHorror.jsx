import Menu from "../commonComponents/Menu.jsx";
import { useLocation } from 'react-router-dom';

function KnowledgeHorror() {
  const location = useLocation();
  const { category } = location.state || {};
  

  return (
    <div>
      <Menu />
      <div>
        <h1>{category}</h1>
        <p>This is the {category} page.</p>
      </div>
    </div>
  );
}

export default KnowledgeHorror;
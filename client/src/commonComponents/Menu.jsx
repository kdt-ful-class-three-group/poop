import { useNavigate } from 'react-router'

function Menu() {
  const navigate = useNavigate();

  const quiz = () => {
    navigate('/Quiz');
  }

  const KnowledgeHorror = (category) => {
    navigate('/KnowledgeHorror', {
      state : {
        category : category
      }
    });
  }

  return (
    <div className="border-1 flex justify-around">
      <button className="" onClick={() => quiz()}>퀴즈</button>
      <button className="" onClick={() => KnowledgeHorror('knowledge')}>상식</button>
      <button className="" onClick={() => KnowledgeHorror('horror')}>괴담</button>
    </div>
  )
}

export default Menu;
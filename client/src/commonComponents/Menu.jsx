import { useNavigate } from 'react-router'

function Menu() {
  const navigate = useNavigate();

  const quiz = () => {
    console.log('quiz');
    navigate('/Quiz');
  }

  const common_sense = () => {
    console.log('common_sense');
    navigate('/KnowledgeHorror');
  }

  const horror = () => {
    console.log('horror');
    navigate('/KnowledgeHorror');
  }

  return (
    <div className="border-1 flex justify-around">
      <button className="" onClick={() => quiz()}>퀴즈</button>
      <button className="" onClick={() => common_sense()}>상식</button>
      <button className="" onClick={() => horror()}>괴담</button>
    </div>
  )
}

export default Menu;
import { useNavigate } from "react-router"

function Nav() {
  const navigate = useNavigate()

  const goToQuiz=()=>{
    navigate("/Quiz")
  }
  const goToHorror = ()=>{
    navigate("/Horror")
  }
  const goToKnowledge = ()=>{
    navigate("/Knowledge")
  }

  return (
    <div>
      <button onClick={navigate("/Quiz")}>퀴즈</button>
      <button onClick={goToHorror}>괴담</button>
      <button onClick={goToKnowledge}>상식</button>
    </div>
  )
}

export default Nav
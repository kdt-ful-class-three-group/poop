import {useNavigate} from 'react-router'

function Menu() {
  const navigate = useNavigate()

  //각각 페이지로 이동하는 함수 작성
  const goToQuiz = ()=>{
    navigate("/Quiz")
  }
  // const goToHorror = ()=>{
  //   navigate("/Horror")
  // }
  // const goToKnowledge=()=>{
  //   navigate("/Knowledge")
  // }

  //버튼 3개가 담긴 div 렌더
  return(
    <div>
      <button onClick={goToQuiz} className='cursor-pointer'>퀴즈</button>
      <button className='cursor-pointer'>괴담</button>
      <button className='cursor-pointer'>상식</button>
    </div>
  )
  
}

export default Menu;
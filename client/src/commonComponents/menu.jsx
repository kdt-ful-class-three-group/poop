import {useNavigate} from 'react-router'

function Menu() {
    const navigate = useNavigate()


    const goToQuiz = ()=>{
        navigate("/Quiz")
    }
    const goToHorror = ()=>{
        navigate("/Horror")
    }
    const goToKnowledge=()=>{
        navigate("/Knowledge")
    }

    return(
        <div className="fixed w-full flex top-10 left-0 bg-transparent p-4 justify-around">
            <button onClick={goToQuiz}>퀴즈</button>
            <button onClick={goToHorror}>괴담</button>
            <button onClick={goToKnowledge}>상식</button>
        </div>
    )

}

export default Menu;
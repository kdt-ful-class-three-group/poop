import {useNavigate} from "react-router";

function Menu() {
    const navigate = useNavigate();

    const quiz = () => {
        navigate('/quiz');
    }


    return(
        <div className="fixed w-full flex top-10 justify-around bg-transparent p-4">
            <button onClick={quiz}>퀴즈</button>
        </div>
    )

}

export default Menu;
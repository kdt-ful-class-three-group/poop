function Button({text, colorClass, onclick}){

  return(

    // props로 onClick을 받기 위해 수정
    <button className={`${colorClass} hover:bg-gray-400 py-2 px-4 rounded-md cursor-pointer`} onClick={onclick || null}> {text} </button>
  )
}

export default Button;
function Button({text, colorClass, clickEvent}){

  return(
    <button 
    className={`${colorClass} hover:bg-gray-400 py-2 px-4 rounded-md cursor-pointer`} 
    onClick={clickEvent}> {text} </button>
  )
}

export default Button;
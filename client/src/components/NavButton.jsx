function NavButton({onClick}){
  return(
    <button 
    onClick={onClick}
    className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#D9D9D9] p-2 mb-7 cursor-pointer"
    ></button>
  )
}

export default NavButton;
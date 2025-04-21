import {useEffect, useState} from 'react'

function Nav() {

  const [usualNav, setUsualNav]= useState("flex justify-center align-bottom absolute w-full bottom-[20px]")
  const [isClicked, setIsClicked] = useState(false)

  return(
    <div className={usualNav}>
      <div className="bg-gray-400 w-[70px] h-[70px] rounded-full cursor-pointer"></div>
    </div>
  )
}

export default Nav;